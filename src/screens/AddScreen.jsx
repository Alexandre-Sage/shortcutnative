import React from 'react';
import {StyleSheet, Text, TextInput, View,Image, Picker, TouchableOpacity, ScrollView} from 'react-native';
import {Component} from "react"

https://stackoverflow.com/questions/44873750/how-to-submit-a-form-in-react-native
export default class AddScreen extends Component {
    constructor(props){
        super(props)

    } componentDidMount(){
        fetch("http://shortcuts.api.pierre-jehan.com/shortcuts",{
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
              "title": "Test",
              "windows": "string",
              "macos": "string",
              "linux": "string",
              "context": "string",
              "description": "string",
              "image": {
                "contentUrl": "string",
                "file": "string",
                "filePath": "string"
              },
              "software": {
                "name": "string",
                "logo": "string",
                "shortcuts": [
                  "string"
                ]
              },
              "categories": [
                {
                  "name": "string",
                  "shortcuts": [
                    "string"
                  ]
                }
              ],
              "createdAt": "2021-11-21T20:58:50.800Z"
            })
        })

    } render(){

        return(
            <View>
                <View>
                    <Text>Nom du raccourcis: </Text>
                    <TextInput defaultValue={"Entrez nom ici"}/>
                </View>

                <Text>Categories: </Text>
                <Picker>
                    <Picker.Item label="Développement"/>
                    <Picker.Item label="Design"/>
                    <Picker.Item label="PHP"/>
                    <Picker.Item label="JavaScript"/>
                </Picker>

                <Text>Logiciels: </Text>
                <Picker>
                    <Picker.Item label="Google Chrome"/>
                    <Picker.Item label="Firefox"/>
                    <Picker.Item label="PHP Storm"/>
                    <Picker.Item label="Visual Studio Code"/>
                    <Picker.Item label="XD"/>
                </Picker>

                <View>
                    <Text>Windows: </Text>
                    <TextInput defaultValue={"Entrez raccourcis windows ici"}/>
                </View>

                <View>
                    <Text>MacOs: </Text>
                    <TextInput defaultValue={"Entrez raccourcis MacOs ici"}/>
                </View>

                <View>
                    <Text>linux: </Text>
                    <TextInput defaultValue={"Entrez raccourcis Linux ici"}/>
                </View>

                <View>
                    <Text>Contexte: </Text>
                    <TextInput defaultValue={"Entrez Contexte ici"}/>
                </View>

                <View>
                    <Text>Description: </Text>
                    <TextInput defaultValue={"Entrez description ici"}/>
                </View>

            </View>
        )
    }
};
