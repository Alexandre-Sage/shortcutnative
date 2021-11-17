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

        fetch("http://shortcuts.api.pierre-jehan.com/shortcuts?categories.id=1")
        .then(response=>response.json())
        .then(data=>this.setState({importShortcuts: data["hydra:member"]}))
        .catch(error=>console.log("error"));
  } render() {
      console.log(this.state.importShortcuts);
      console.log(this.state.importCategories);
      const categorieJsx=this.state.importCategories.map(cat=>(<Picker.Item key={cat.id} value={cat.name} label={cat.name}/>));
      const shortcutJsx= this.state.importShortcuts.map(shortcut=>(
                                                      <View key={shortcut.id}>
                                                        <Text>{shortcut.title}</Text>
                                                      </View>
                                                  ))
      return(
          <View>
            <Text>Rechercher par Catégories: </Text>
            <Picker>
                {categorieJsx}
            </Picker>
            {shortcutJsx}

          </View>
    )
  }
}
