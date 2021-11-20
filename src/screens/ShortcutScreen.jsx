import React from 'react';
import {StyleSheet, Text, View, Button, Image, Picker, TouchableOpacity, ScrollView} from 'react-native';
import {Component} from "react";

/*const shortcut=this.props.navigation.getParams("shortcut");
this.setState({choosenShortcut: shortcut})
console.log(this.state.choosenShortcut);*/

export default class ShortcutScreen extends Component{

    render(){
        const shortcut= this.props.route.params.shortcut
        return(
            <View>
                <Text>{shortcut.title}</Text>
            </View>
    )
    }
};
