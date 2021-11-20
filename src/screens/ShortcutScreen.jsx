import React from 'react';
import {StyleSheet, Text, View, Button, Image, Picker, TouchableOpacity, ScrollView} from 'react-native';
import {Component} from "react";

/*const shortcut=this.props.navigation.getParams("shortcut");
this.setState({choosenShortcut: shortcut})
console.log(this.state.choosenShortcut);*/

export default class ShortcutScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            shortcutDetails: this.props.route.params.shortcut
        }


    } render(){
        console.log(this.state.shortcutDetails);
        const shortcut= this.props.route.params.shortcut
        const categoriesJsx= shortcut.categories.map((category)=>(
            <Text key={category.id}>{category.name}</Text>
        ))
        const softwareJsx= shortcut.software.map((software)=>(
            <Text key={software.id}>{software.title}</Text>
        ))
        return(
            <View>
                <Text>{shortcut.title}</Text>
                <Text>{shortcut.context}</Text>
                <Text>{shortcut.description}</Text>
                <Text>{shortcut.linux}</Text>
                <Text>{shortcut.macos}</Text>
                <Text>{shortcut.windows}</Text>
                {categoriesJsx}
                {softwareJsx}

            </View>
        )
    }
};
