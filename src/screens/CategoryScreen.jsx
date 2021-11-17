import React from 'react';
import {StyleSheet, Text, View, Button, Image, Picker, TouchableOpacity} from 'react-native';
import {Component} from "react";
/*selectedValue="name"
onValueChange={(cat) => this.setState({categorie: cat})}*/
export default class CategorieSearchScreen extends Component{
  constructor(props){
    super(props)
    this.state={
        importCategories: [],
        importShortcuts: [],
    };
    } componentDidMount(){
        fetch("http://shortcuts.api.pierre-jehan.com/categories?page=1")
        .then(response=>response.json())
        .then(data=>this.setState({importCategories: data["hydra:member"]}))
        .catch(error=>console.log("error"));

        /*fetch("http://shortcuts.api.pierre-jehan.com/shortcuts?page=1")
        .then(response=>response.json())
        .then(data=>this.setState({importShortcuts: data["hydra:member"]}))
        .catch(error=>console.log("error"));*/
  } render() {
      console.log(this.state.importShortcuts);
      console.log(this.state.importCategories);
      const categorieJsx=this.state.importCategories.map(cat=>(<Picker.Item key={cat.id} value={cat.name} label={cat.name}/>));
      const shortcutJsx = this.state.importShortcuts.map((shortcut) => (

            <View key={shortcut.id} style={styles.shortcutMainContainer}>
              <Text style={styles.shortcutTitle}>{shortcut.title}</Text>
              <Text style={styles.shortcutSoftName}>{shortcut.software.name}</Text>
              <View style={styles.shortcutSmallContainer}>
                {shortcut.categories.map((cat) => (
                  <Text style={styles.shortcutText} key={cat.id}>
                    {cat.name}
                  </Text>
                ))}
              </View>
            </View>

        ));
      return(
          <View style={styles.mainContainer}>
            <Text style={styles.pickerTitle}>Rechercher par Catégories: </Text>
            <Picker style={styles.picker}
                selectedValue={this.state.importCategories}
                onValueChange={(selectedValue)=>{fetch("http://shortcuts.api.pierre-jehan.com/shortcuts?page=1")
                .then(response=>response.json())
                .then(data=>this.setState({importShortcuts: data["hydra:member"]}))
                .catch(error=>console.log("error"));}}>
                {categorieJsx}
            </Picker>
            {shortcutJsx}

          </View>
    )
  }
}

const styles = StyleSheet.create({
    mainContainer:{
        alignItems: 'center',

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
        width: 200
    },
})
