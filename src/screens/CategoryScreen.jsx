import React from 'react';
import {StyleSheet, Text, View, Button, Image, Picker, TouchableOpacity, ScrollView} from 'react-native';
import {Component} from "react";
import { LinearGradient } from 'expo-linear-gradient';


export default class CategorieSearchScreen extends Component{
  constructor(props){
    super(props)
    this.state={
        importCategories: [],
        importShortcuts: [],
        selectedValue: "",
    };
    } componentDidMount(){

        fetch("http://shortcuts.api.pierre-jehan.com/categories?page=1")
        .then(response=>response.json())
        .then(data=>this.setState({importCategories: data["hydra:member"]}))
        .catch(error=>console.log("error"));

  } render() {

      const categorieJsx=this.state.importCategories.map(cat=>(<Picker.Item key={cat.id} value={cat.id} label={cat.name}/>));

      const shortcutJsx = this.state.importShortcuts.map((shortcut) => (

            <TouchableOpacity key={shortcut.id} onPress={()=>this.props.navigation.navigate("Shortcut", {shortcut: shortcut})} style={styles.shortcutMainContainer}>
              <Text style={styles.shortcutTitle}>{shortcut.title}</Text>
              <Text style={styles.shortcutSoftName}>{shortcut.software.name}</Text>
              <View style={styles.shortcutSmallContainer}>
                {shortcut.categories.map((cat) => (
                  <Text style={styles.shortcutText} key={cat.id}>
                    {cat.name}
                  </Text>
                ))}

              </View>
            </TouchableOpacity>

        ));
      return(
        <LinearGradient colors={[  "rgba(41,45,44,0.9)", "rgba(37,42,42,0.9)", "rgba(88,81,67,0.8)", "rgba(66,64,56,0.7)", "rgba(66,64,56,0.7)", "rgba(66,64,56,0.6)", "rgba(66,64,56,0.6)","rgba(66,64,56,0.7)","rgba(66,64,56,0.7)", "transparent" ]}
                        start={[0.2,0.6]}
                        end={[0.9,0]}
                        style={styles.gradientStyle}>
        <ScrollView >
            <View style={styles.mainContainer}>
                <Text style={styles.pickerTitle}>Rechercher par Catégories: </Text>

                <TouchableOpacity style={styles.touchable}><Picker style={styles.picker}
                    selectedValue={this.state.selectedValue}
                    onValueChange={(cat, shortcut)=>{ console.log(cat); console.log(shortcut);
                    fetch("http://shortcuts.api.pierre-jehan.com/shortcuts?categories.id="+cat)
                    .then(response=>response.json())
                    .then(data=>this.setState({importShortcuts: data["hydra:member"], selectedValue: shortcut}))
                    .catch(error=>console.log("error"))
                    }}>

                    {categorieJsx}

                </Picker></TouchableOpacity>

                {shortcutJsx}

            </View>
        </ScrollView>
    </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
    gradientStyle:{

    },
    mainContainer:{
        alignItems: 'center',


    },
    pickerTitle:{
        fontSize: 25,
        marginTop: 15,
        color: "white",
    },
    touchable:{
        backgroundColor: "rgba(31, 227, 236, 0.5)",
        borderRadius: 10,
        marginTop: 25
    },
    picker:{
        width: 350,
        height: 60,
        fontSize: 20,

    },
    shortcutMainContainer:{

        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 275,
        width: 325,
        marginTop: 55,
        backgroundColor: "rgba(255, 255, 255, 0.6)",

    },
    shortcutTitle:{
        fontSize: 18,
        marginBottom: 40,
        textAlign: 'center'
    },
    shortcutSoftName:{
        fontSize: 17,
        marginBottom:25,
    },
    shortcutSmallContainer:{
        alignItems: "center",
        justifyContent: 'space-around',
        height: 150,
        width: 200,
    },
    shortcutText:{
        borderRadius: 10,
        width: 200,
        height:40,
        textAlign: "center",
        paddingTop: 9,
        fontSize:15,
        backgroundColor: "rgba(31, 227, 236, 0.3)",
    },
})
