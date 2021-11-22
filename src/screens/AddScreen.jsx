import React from 'react';
import {StyleSheet, Text, TextInput, View,Image, Picker, TouchableOpacity, ScrollView} from 'react-native';
import {Component} from "react"

/*/https://stackoverflow.com/questions/44873750/how-to-submit-a-form-in-react-native*/
/*https://www.techup.co.in/react-native-fetch-post-request-registration-form/?fbclid=IwAR12hUuhPGpgZ6cz4FzEzLqcu_uxlL17xJsJHhZtQvWc3tQhd_HlXyzbkyQ*/
    /*fetch("http://shortcuts.api.pierre-jehan.com/shortcuts",{
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify({*/

        //Envoyer "@id": "/categories/13", via les value des picker software et categories
export default class AddScreen extends Component {
    constructor(props){
        super(props)
        this.state={
                apiSend:{
                    title:"",
                    windows: "",
                    macos: "",
                    linux: "",
                    context: "",
                    description: "",
                        software: "",

                        categories: [],
                    },
                importCategories:[],
                importSoftwares: []
    }

    } componentDidMount(){



    } render(){
        console.log(this.state);
        return(
            <View>
                <View>
                    <Text>Nom du raccourcis: </Text>
                    <TextInput defaultValue={"Entrez nom ici"}

                                onChangeText={(titleVal)=>{this.setState({apiSend: {...this.state.apiSend, title: titleVal}})}}/>
                </View>

                <Text>Categories: </Text>
                <Picker selectedValue= {this.state}

                        onValueChange={(catValue)=>{

                            this.setState({apiSend: {...this.state.apiSend, categories: catValue}})}}>

                    <Picker.Item value="developpement" label="Développement"/>
                    <Picker.Item value="design" label="Design"/>
                    <Picker.Item value="PHP" label="PHP"/>
                    <Picker.Item value="JavaScript" label="JavaScript"/>
                </Picker>

                <Text>Logiciels: </Text>
                <Picker onValueChange={(softValue)=>this.setState({apiSend: {...this.state.apiSend, software:softValue}})}>
                    <Picker.Item label="Google Chrome"/>
                    <Picker.Item label="Firefox"/>
                    <Picker.Item label="PHP Storm"/>
                    <Picker.Item label="Visual Studio Code"/>
                    <Picker.Item label="XD"/>
                </Picker>

                <View>
                    <Text>Windows: </Text>
                    <TextInput defaultValue={"Entrez raccourcis windows ici"}
                                onChangeText={(winShort)=>this.setState( {apiSend: {...this.state.apiSend, windows: winShort}})}/>
                </View>

                <View>
                    <Text>MacOs: </Text>
                    <TextInput defaultValue={"Entrez raccourcis MacOs ici"}
                               onChangeText={(macShort)=>this.setState( {apiSend:{...this.state.apiSend, macos: macShort}})}/>
                </View>

                <View>
                    <Text>linux: </Text>
                    <TextInput defaultValue={"Entrez raccourcis Linux ici"}
                                onChangeText={(linShort)=>this.setState( {apiSend:{...this.state.apiSend, linux: linShort}})}/>
                </View>

                <View>
                    <Text>Contexte: </Text>
                    <TextInput defaultValue={"Entrez Contexte ici"}
                                onChangeText={(contShort)=>this.setState( {apiSend: {...this.state.apiSend, context: contShort}})}/>
                </View>

                <View>
                    <Text>Description: </Text>
                    <TextInput defaultValue={"Entrez description ici"}
                                onChangeText={(descShort)=>this.setState( {apiSend:{...this.state.apiSend, description: descShort}})}/>
                </View>
                <TouchableOpacity onPress={()=>{console.log(JSON.stringify(this.state.apiSend))}}><Text>Envoyer</Text></TouchableOpacity>
            </View>
        )
    }
};

/*fetch("http://shortcuts.api.pierre-jehan.com/shortcuts",{
    method: "POST",
    headers: {
        accept: "application/json",
        "Content-type": "application/json"
    },
    body: JSON.stringify()*/

    /*fetch(process.env.API_URL + "shortcuts", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(shortcut),
                })
                  .then((response) => response.json())
                  .then((data) => console.log(data))
                  .catch((error) => console.error(error));*/
