import React from 'react';
import {StyleSheet, Text, View, Button, Image, Picker, TouchableOpacity, ScrollView} from 'react-native';
import {Component} from "react";
import ShortcutScreen from './ShortcutScreen';

export default class CategorieSearchScreen extends Component{
  constructor(props){
    super(props)
    this.state={
        importCategories: [],
        importShortcuts: [],
        selectedValue: [],
    };
    } componentDidMount(){

        fetch("http://shortcuts.api.pierre-jehan.com/categories?page=1")
        .then(response=>response.json())
        .then(data=>this.setState({importCategories: data["hydra:member"]}))
        .catch(error=>console.log("error"));

  } render() {

      const categorieJsx=this.state.importCategories.map(cat=>(<Picker.Item key={cat.id} value={cat.id} label={cat.name}/>));

      const shortcutJsx = this.state.importShortcuts.map((shortcut) => (

            <TouchableOpacity key={shortcut.id} onPress={()=>this.props.navigation.navigate("Shortcut")} style={styles.shortcutMainContainer}>
              <Text style={styles.shortcutTitle}>{shortcut.title}</Text>
              <Text style={styles.shortcutSoftName}>{shortcut.software.name}</Text>
              <View style={styles.shortcutSmallContainer}>
                {shortcut.categories.map((cat) => (
                  <Text style={styles.shortcutText} key={cat.id}>
                    {cat.name}
                  </Text>
                ))}
                <ShortcutScreen data={[this.state.importShortcuts]}/>
              </View>
            </TouchableOpacity>

        ));
      return(
        <ScrollView >
            <View style={styles.mainContainer}>
                <Text style={styles.pickerTitle}>Rechercher par Catégories: </Text>

                <Picker style={styles.picker}
                    selectedValue={this.state.selectedValue}
                    onValueChange={(cat, shortcut)=>{ console.log("test");
                    fetch("http://shortcuts.api.pierre-jehan.com/shortcuts?categories.id="+cat)
                    .then(response=>response.json())
                    .then(data=>this.setState({importShortcuts: data["hydra:member"], selectedValue: shortcut}))
                    .catch(error=>console.log("error"))
                    }}>

                    {categorieJsx}

                </Picker>

                {shortcutJsx}

            </View>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    mainContainer:{
        alignItems: 'center'

    },
    pickerTitle:{
        fontSize: 25,
    },
    picker:{
        width: 250,
        fontSize: 18,
    },
    shortcutMainContainer:{
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        height: 250,
        width: 325,
        marginTop: 10
    },
    shortcutTitle:{
        fontSize: 18,
        marginBottom: 40,
    },
    shortcutSoftName:{
        fontSize: 16,
        marginBottom:25,
    },
    shortcutSmallContainer:{
        borderWidth: 1,
        alignItems: "center",
        justifyContent: 'center',
        height: 100,
        width: 200,
    },
    shortcutText:{
        borderWidth: 1,
        width: 200,
        textAlign: "center",
    },
})
