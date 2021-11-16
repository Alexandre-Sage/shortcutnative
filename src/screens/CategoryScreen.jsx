import React from 'react';
import {StyleSheet, Text, View, Button, Image, Picker, TouchableOpacity} from 'react-native';
import {Component} from "react";

export default class CategorieSearchScreen extends Component{
  constructor(props){
    super(props)
    this.state={
        importCategories: [],
    };
    } componentDidMount(){
        fetch("http://shortcuts.api.pierre-jehan.com/shortcuts?categories.id=1")
        .then(response=>response.json())
        .then(data=>this.setState({importCategories: data["hydra:member"]}))
        .catch(error=>console.log("error"));


  } render() {

      console.log(this.state.importCategories);


      return(
          <View>
            <Text>Rechercher par Catégories: </Text>
            <Picker
                selectedValue="name"
                onValueChange={(cat) => this.setState({categorie: cat})}>

            </Picker>


          </View>
    )
  }
}
