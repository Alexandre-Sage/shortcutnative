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

                        categories: "",
                    },
                importCategories:[],
                importSoftware: []
    }

    } componentDidMount(){
        //Fetch categories
        fetch("http://shortcuts.api.pierre-jehan.com/categories?page=1")
        .then(response=>response.json())
        .then(data=>this.setState({importCategories: data["hydra:member"]}))
        .catch(error=>console.log(error));

        //Fetch software
        fetch("http://shortcuts.api.pierre-jehan.com/software?page=1")
        .then(response=>response.json())
        .then(data=>this.setState({importSoftware: data["hydra:member"]}))
        .catch(error=>console.log(error));

    } render(){

        const categoriesJsx= this.state.importCategories.map((cat)=>(<Picker.Item key={cat.id} value={cat["@id"]} label={cat.name}/>))
         const softwareJsx=this.state.importSoftware.map(soft=>(<Picker.Item key={soft.id} value={soft["@id"]} label={soft.name}/>));

        return(
            <View>
                <View>
                    <Text>Nom du raccourcis: </Text>
                    <TextInput defaultValue={"Entrez nom ici"}

                                onChangeText={(titleVal)=>{this.setState({apiSend: {...this.state.apiSend, title: titleVal}})}}/>
                </View>

                <Text>Categories: </Text>
                <Picker
                        onValueChange={(catValue)=>{
                        this.setState({apiSend: {...this.state.apiSend, categories: [catValue]}})}}>
                        {categoriesJsx}
                </Picker>

                <Text>Logiciels: </Text>
                <Picker onValueChange={(softValue)=>this.setState({apiSend: {...this.state.apiSend, software:softValue}})}>
                    {softwareJsx}
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
                <TouchableOpacity onPress={(data)=>{console.log(JSON.stringify(this.state.apiSend));fetch("http://shortcuts.api.pierre-jehan.com/shortcuts", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify(this.state.apiSend),
                            })
                              .then((response) => response.json())
                              .then((data) => console.log(data))
                              .catch((error) => console.error(error))}}><Text>Envoyer</Text></TouchableOpacity>
            </View>
        )
    }
};
