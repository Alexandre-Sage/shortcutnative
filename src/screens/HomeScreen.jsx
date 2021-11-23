import React from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Component} from "react"


export default class HomeScreen extends Component {
   constructor(props){
      super(props)
    } render(){
    return (
        <LinearGradient colors={["rgba(41,45,44,0.9)", "rgba(37,42,42,0.9)", "rgba(88,81,67,0.8)", "rgba(66,64,56,0.7)", "rgba(66,64,56,0.7)", "rgba(66,64,56,0.6)", "rgba(66,64,56,0.6)","rgba(66,64,56,0.7)","rgba(66,64,56,0.7)", "transparent" ]}
                        start={[0.2,0.6]}
                        end={[0.9,0]}
                        style={styles.gradientStyle}>
        <View style={styles.mainContainerHome}>

             <Text style={styles.homeTitle}>Rechercher par: </Text>

             <View style={styles.searchView}>
                <TouchableOpacity style={styles.buttonTouch} onPress={()=>this.props.navigation.navigate("Category")}><Text style={styles.touchableText}>Catégories</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonTouch}
                    onPress={()=>this.props.navigation.navigate("Software")}><Text style={styles.touchableText}>Logiciels</Text></TouchableOpacity>
             </View>

             <Text style={styles.homeTitle}>Ou Bien: </Text>

             <View>
                <TouchableOpacity style={styles.buttonTouch}
                    onPress={()=>this.props.navigation.navigate("AddScreen")}><Text style={styles.touchableText}>Ajouter un raccourcis</Text></TouchableOpacity>
             </View>
        </View>
        </LinearGradient>
        );
    }
};


const styles = StyleSheet.create({
    gradientStyle:{
        height: "100%"
    },
   mainContainerHome:{
      alignItems: "center",
      justifyContent: 'space-around',
      height: "100%",
   },
   homeTitle:{
      fontSize: 25,
      fontWeight: "bold",
      color: "rgba(237, 242, 248, 1)",
   },
   searchView:{
       justifyContent: 'space-around',
       height: "50%"
   },
   buttonTouch:{
      alignItems: 'center',
      justifyContent: "center",
      height: 75,
      width: 300,
      backgroundColor: "rgba(31, 227, 236, 0.5)",
      margin: 15,
      borderRadius: 15
   },
   touchableText:{
      color: "white",
   },

  },
);

/*const styles = StyleSheet.create({


  },
);*/
