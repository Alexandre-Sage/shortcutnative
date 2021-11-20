import React from 'react';
import {StyleSheet, Text, View, Button, Image, Picker, TouchableOpacity, ScrollView} from 'react-native';
import {Component} from "react";

/*const shortcut=this.props.navigation.getParams("shortcut");
this.setState({choosenShortcut: shortcut})
console.log(this.state.choosenShortcut);*/

export default class ShortcutScreen extends Component{
    constructor(props){
        super(props)
        console.log("p");
        console.log(this.props.data);
        this.state={
            shortcutState: []
        }
    } componentDidMount(){

    } render(){
        console.log(this.props.data);

        return(
            <View>
            <Text></Text>
            </View>
    )
    }
};
