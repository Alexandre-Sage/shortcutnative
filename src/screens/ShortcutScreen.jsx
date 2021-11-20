import React from 'react';
import {StyleSheet, Text, View, Button, Image, Picker, TouchableOpacity, ScrollView} from 'react-native';
import {Component} from "react";

export default class ShortcutScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            shortcutDetails: [this.props.route.params.shortcut]
        }


    } render(){
        console.log(this.state.shortcutDetails);
        const DetailsJsx= this.state.shortcutDetails.map((shortcut, key)=>(
            <View style={styles.mainContainerDetails} key={key}>
            {

                Object.entries(shortcut).slice(3,9).map(([title, detail, key])=>(
                <View style={styles.row} key={key}>
                    <Text style={styles.apiTitle}>{title}</Text>
                    <Text style={styles[title]}>{detail}</Text>
                </View>
            ))}
            </View>
        ))

        const shortcut= this.props.route.params.shortcut
        const categoriesJsx= this.state.shortcutDetails[0].categories.map((category)=>(
            <Text key={category.id}>{category.name}</Text>
        ))
        const softwareJsx= <Text>{this.state.shortcutDetails[0].software.name}</Text>
        return(
            <ScrollView style={styles.mainContainer}>
                {DetailsJsx}
                {categoriesJsx}
                {softwareJsx}
            </ScrollView>
        )
    }
};

const styles = StyleSheet.create({
    mainContainer:{
        height: 1500,

        alignContent: 'space-around'
    },
    mainContainerDetails:{

    },
    row:{
        marginTop: 20,
        borderWidth: 2
    },
    apiTitle:{

    },
    title:{
        fontSize: 25,
        textAlign: 'center'
    },
    windows:{
        fontSize:50,
    },
    macos:{

    },
    linux:{

    },
    context:{

    },
    description:{

    },
})
