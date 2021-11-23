import React from 'react';
import {StyleSheet, Text, View, Button, Image, Picker, TouchableOpacity, ScrollView} from 'react-native';
import {Component} from "react";
import { LinearGradient } from 'expo-linear-gradient';

export default class ShortcutScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            shortcutDetails: this.props.route.params.shortcut
        }
    } render(){
/*Image*/
/*if (shortcutImage){
    <Image style={styles.img} source={{uri: shortcutImage[0][1]}}/>
} else {

}*/

        const shortcutImage= Object.entries(this.state.shortcutDetails.image).slice(2);
        console.log(shortcutImage[0][1])
        const imageTry= <Image style={styles.img} source={{uri: "http://shortcuts.api.pierre-jehan.com/"+shortcutImage[0][1]}}/>
        console.log(imageTry);
/*Details géné*/
        const DetailsJsx=
            <View style={styles.mainContainerDetails}>
            {Object.entries(this.state.shortcutDetails).slice(3,9).map(([title, detail, keyMap])=>(
                <View style={styles.row} key={keyMap}>
                    <Text style={styles.apiTitle}>{title}</Text>
                    <Text style={styles[title]}>{detail}</Text>
                </View>
            ))}
            </View>

/*Categories*/
        const categoriesJsx= this.state.shortcutDetails.categories.map((category, key)=>(
            <Text key={key}>{category.name}</Text>
        ))

/*Software*/
        const softwareJsx= <Text>{this.state.shortcutDetails.software.name}</Text>

        return(
            <LinearGradient colors={[  "rgba(41,45,44,0.9)", "rgba(37,42,42,0.9)", "rgba(88,81,67,0.8)", "rgba(66,64,56,0.7)", "rgba(66,64,56,0.7)", "rgba(66,64,56,0.6)", "rgba(66,64,56,0.6)","rgba(66,64,56,0.7)","rgba(66,64,56,0.7)", "transparent" ]}
                            start={[0.2,0.6]}
                            end={[0.9,0]}
                            style={styles.gradientStyle}>
            <ScrollView style={styles.mainContainer}>
                {DetailsJsx}
                {imageTry}
                {categoriesJsx}
                {softwareJsx}
            </ScrollView>
            </LinearGradient>
        )
    }
};

const styles = StyleSheet.create({
    img:{
        height: 100,
        width: 100
    },
    mainContainer:{
        height: "100%",

        alignContent: 'space-around'
    },
    mainContainerDetails:{
        alignItems: "center"
    },
    row:{
        marginTop: 20,
        borderRadius: 10 ,
        height: 150,
        justifyContent: 'space-around',
        width: 350,
        backgroundColor: "rgba(31, 227, 236, 0.5)",
    },
    apiTitle:{
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(31, 227, 236, 0.5)",
        paddingBottom: 15,
        marginLeft: 15,
        color: "white"
    },
    title:{
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 10,
        width: 300,
        marginLeft: "auto",
        marginRight: "auto",
    },
    windows:{
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 10,
        width: 300,
        marginLeft: "auto",
        marginRight: "auto",

    },
    macos:{
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 10,
        width: 300,
        marginLeft: "auto",
        marginRight: "auto",
    },
    linux:{
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 10,
        width: 300,
        marginLeft: "auto",
        marginRight: "auto",
    },
    context:{
        fontSize: 20,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 10,
        width: 300,
        height:75,
        paddingLeft: 8,
        paddingTop: 8,
        marginLeft: "auto",
        marginRight: "auto",
    },
    description:{
        fontSize: 17,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 10,
        width: 300,
        height: 90,
        paddingLeft: 8,
        paddingTop: 8,
        marginLeft: "auto",
        marginRight: "auto",
    },
})
