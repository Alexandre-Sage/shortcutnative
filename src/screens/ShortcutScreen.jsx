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
            <Text style={styles.categories} key={key}>{category.name}</Text>
        ))

/*Software*/
        const softwareJsx= <Text syle={styles.software}>{this.state.shortcutDetails.software.name}</Text>

/*Image*/
        let image
        if (this.state.shortcutDetails.image){
            const shortcutImage= Object.entries(this.state.shortcutDetails.image).slice(2);
             image= <Image style={styles.img} source={{uri: "http://shortcuts.api.pierre-jehan.com/"+shortcutImage[0][1]}}/>
        } else {
             image= <Image style={styles.img} source={require("../../assets/marmotte.jpeg")}/>
        }

        return(
            <LinearGradient colors={[  "rgba(41,45,44,0.9)", "rgba(37,42,42,0.9)", "rgba(88,81,67,0.8)", "rgba(66,64,56,0.7)", "rgba(66,64,56,0.7)", "rgba(66,64,56,0.6)", "rgba(66,64,56,0.6)","rgba(66,64,56,0.7)","rgba(66,64,56,0.7)", "transparent" ]}
                            start={[0.2,0.6]}
                            end={[0.9,0]}
                            style={styles.gradientStyle}>
            <ScrollView style={styles.mainContainer}>

                {DetailsJsx}
                <View style={styles.imageContainer}>
                    {image}
                </View>

                <View style={styles.softCatContainer}>
                    <View style={styles.categoriesContainer}>
                        <Text style={styles.categoriesTitle}>Categories: </Text>
                        <View style={styles.smallContainerCategories}>
                            {categoriesJsx}
                        </View>
                    </View>
                    <View style={styles.softwareContainer}>
                        <Text style={styles.softwareTitle}>Logiciels</Text>
                        <View style={styles.smallContainerSoftware}>
                            {softwareJsx}
                        </View>
                    </View>
                </View>
            </ScrollView>
            </LinearGradient>
        )
    }
};

const styles = StyleSheet.create({

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
    imageContainer:{
        alignItems: 'center',
        marginTop: 20
    },
    img:{
        height: 250,
        width: 350,
        borderRadius: 10
    },
    softCatContainer:{
        flexDirection: 'row',
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        justifyContent: 'space-around',
        backgroundColor: "rgba(31, 227, 236, 0.5)",
        width:350,
        height: 140,
        borderRadius: 10,
    },
    categoriesContainer:{
        height:80,
        marginTop: "auto",
        marginBottom: "auto",
        borderRightWidth: 1,
        borderRightColor:"rgba(31, 227, 236, 0.3)",
        width: 160
    },
    categoriesTitle:{
        color: "white",
        borderBottomWidth: 1,
        borderBottomColor:"rgba(31, 227, 236, 0.3)",
        width: 125,
        fontSize: 18,
        textAlign: 'center'
    },
    categories:{

    },
    softwareContainer:{
        height:80,
        marginTop: "auto",
        marginBottom: "auto",
    },
    softwareTitle:{
        color: "white",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(31, 227, 236, 0.3)",
        width: 150,
        fontSize: 18,
        textAlign: 'center'
    },
    software:{

    },
    smallContainerCategories:{
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        height: 65,
        width: 125,
        marginTop: 10,
        alignItems:  'center',
        justifyContent: 'center',
        borderRadius: 10

    },
        smallContainerSoftware:{
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            height: 65,
            width: 125,
            marginTop: 10,
            alignItems:  'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginLeft: 16

        },
})
