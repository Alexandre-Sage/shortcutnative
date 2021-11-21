import React from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import {Component} from "react"


export default class HomeScreen extends Component {
   constructor(props){
      super(props)


      } componentDidMount(){


         } render(){
              return (
                  <View style={styles.mainContainerHome}>

                     <Text style={styles.homeTitle}>Rechercher par: </Text>

                     <View>
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

           );
         }
   };


const styles = StyleSheet.create({
   mainContainerHome:{
      alignItems: "center",
      justifyContent: "center",
      height: 300,
   },
   homeTitle:{
      fontSize: 20,
      fontWeight: "bold",
   },
   buttonTouch:{
      alignItems: 'center',
      justifyContent: "center",
      height: 50,
      width: 200,
      backgroundColor: "blue",
      margin: 15,
   },
   touchableText:{
      color: "white",
   },

  },
);

/*const styles = StyleSheet.create({


  },
);*/
