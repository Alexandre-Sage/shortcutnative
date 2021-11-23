import React from 'react';
import {StyleSheet, Text, TextInput, View,Image, Picker, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {Component} from "react"
import { LinearGradient } from 'expo-linear-gradient';

/*/https://stackoverflow.com/questions/44873750/how-to-submit-a-form-in-react-native*/
/*https://www.techup.co.in/react-native-fetch-post-request-registration-form/?fbclid=IwAR12hUuhPGpgZ6cz4FzEzLqcu_uxlL17xJsJHhZtQvWc3tQhd_HlXyzbkyQ*/

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
            <LinearGradient style={styles.linear} colors={[  "rgba(41,45,44,0.9)", "rgba(37,42,42,0.9)", "rgba(88,81,67,0.8)", "rgba(66,64,56,0.7)", "rgba(66,64,56,0.7)", "rgba(66,64,56,0.6)", "rgba(66,64,56,0.6)","rgba(66,64,56,0.7)","rgba(66,64,56,0.7)", "transparent" ]}
                            start={[0.2,0.6]}
                            end={[0.9,0]}
                            style={styles.gradientStyle}>
            <ScrollView style={styles.mainContainerAdd}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Nom du raccourcis: </Text>
                    <TextInput style={styles.titleInput} defaultValue={"Entrez nom ici"}

                                onChangeText={(titleVal)=>{this.setState({apiSend: {...this.state.apiSend, title: titleVal}})}}/>
                </View>

                <View style={styles.categoriesContainer}>
                    <Text style={styles.categoriesTitle}>Categories: </Text>
                    <TouchableOpacity style={styles.categoreisPickerTouch}><Picker style={styles.categoreisPicker}
                            onValueChange={(catValue)=>{
                            this.setState({apiSend: {...this.state.apiSend, categories: [catValue]}})}}>
                            {categoriesJsx}
                    </Picker></TouchableOpacity>
                </View>
                <View style={styles.softwareContainer}>
                    <Text style={styles.softwareTitle}>Logiciels: </Text>
                    <TouchableOpacity style={styles.softwarePicker}><Picker  onValueChange={(softValue)=>this.setState({apiSend: {...this.state.apiSend, software:softValue}})}>
                        {softwareJsx}
                    </Picker></TouchableOpacity>
                </View>
                <View style={styles.osMainContainer}>
                    <View style={styles.osContainer}>
                        <Text style={styles.osTitle}>Windows: </Text>
                        <TextInput style={styles.osInput}
                                    defaultValue={"Entrez raccourcis windows ici"}
                                    onChangeText={(winShort)=>this.setState( {apiSend: {...this.state.apiSend, windows: winShort}})}/>
                    </View>

                    <View style={styles.osContainer}>
                        <Text style={styles.osTitle}>MacOs: </Text>

                        <TextInput style={styles.osInput}
                                    defaultValue={"Entrez raccourcis MacOs ici"}
                                   onChangeText={(macShort)=>this.setState( {apiSend:{...this.state.apiSend, macos: macShort}})}/>
                    </View>

                    <View style={styles.osContainer}>
                        <Text style={styles.osTitle}>linux: </Text>
                        <TextInput style={styles.osInput}
                                    defaultValue={"Entrez raccourcis Linux ici"}
                                    onChangeText={(linShort)=>this.setState( {apiSend:{...this.state.apiSend, linux: linShort}})}/>
                    </View>
                </View>
                <View style={styles.contextContainer}>
                    <Text style={styles.contextTitle}>Contexte: </Text>
                    <TextInput style={styles.contextInput}
                                defaultValue={"Entrez Contexte ici"}
                                onChangeText={(contShort)=>this.setState( {apiSend: {...this.state.apiSend, context: contShort}})}/>
                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTitle}>Description: </Text>
                    <TextInput style={styles.descriptionInput}
                                defaultValue={"Entrez description ici"}
                                onChangeText={(descShort)=>this.setState( {apiSend:{...this.state.apiSend, description: descShort}})}/>
                </View>
                <TouchableOpacity style={styles.buttonSend} onPress={(data)=>{console.log(JSON.stringify(this.state.apiSend));fetch("http://shortcuts.api.pierre-jehan.com/shortcuts", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify(this.state.apiSend),
                            })
                              .then((response) => response.json())
                              .then((data) => console.log(data))
                              .catch((error) => console.error(error))
                                this.props.navigation.navigate("home")
                            Alert.alert("Raccouris ajouter avec succes retour a la page home")}}><Text style={styles.buttonText}>Envoyer</Text></TouchableOpacity>
                        </ScrollView>
                    </LinearGradient>
        )
    }
};

const styles = StyleSheet.create({
    mainContainerAdd:{
        height: "100%",

    },
    titleContainer:{
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: "rgba(31, 227, 236, 0.5)",
        height: 150,
        width: 350,
        justifyContent: 'space-around',

    },
    title:{
        fontSize: 25,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "rgba(31, 227, 236, 0.5)",
    },
    titleInput:{
        fontSize: 18,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 7,
        width: 300,
        marginLeft: 5,
        paddingLeft: 3,
        height: 50
    },
    categoriesContainer:{
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: "rgba(31, 227, 236, 0.5)",
        height: 150,
        width: 350,
        justifyContent: 'space-around',
    },
    categoriesTitle:{
        fontSize: 25,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "rgba(31, 227, 236, 0.5)",
    },
    categoreisPickerTouch:{
        fontSize: 18,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 7,
        width: 300,
        marginLeft: 5,
        paddingLeft: 3,
        height: 50
    },
    softwareContainer:{
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: "rgba(31, 227, 236, 0.5)",
        height: 150,
        width: 350,
        justifyContent: 'space-around',
    },
    softwareTitle:{
        fontSize: 25,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "rgba(31, 227, 236, 0.5)",
    },
    softwarePicker:{
        fontSize: 18,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 7,
        width: 300,
        marginLeft: 5,
        paddingLeft: 3,
        height: 50
    },
    osContainer:{
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: "rgba(31, 227, 236, 0.5)",
        height: 150,
        width: 350,
        justifyContent: 'space-around',
},
    osTitle:{
        fontSize: 25,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "rgba(31, 227, 236, 0.5)",
    },
    osInput:{
        fontSize: 18,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 7,
        width: 300,
        marginLeft: 5,
        paddingLeft: 3,
        height: 50
    },
    contextContainer:{
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: "rgba(31, 227, 236, 0.5)",
        height: 150,
        width: 350,
        justifyContent: 'space-around',
    },
    contextTitle:{
        fontSize: 25,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "rgba(31, 227, 236, 0.5)",
    },
    contextInput:{
        fontSize: 18,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 7,
        width: 300,
        marginLeft: 5,
        paddingLeft: 3,
        height: 50
    },
    descriptionContainer:{
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: "rgba(31, 227, 236, 0.5)",
        height: 150,
        width: 350,
        justifyContent: 'space-around',
    },
    descriptionTitle:{
        fontSize: 25,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "rgba(31, 227, 236, 0.5)",
    },
    descriptionInput:{
        fontSize: 18,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: 7,
        width: 300,
        marginLeft: 5,
        paddingLeft: 3,
        height: 50
    },
    buttonSend:{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30,
        marginBottom: 30,
        backgroundColor: "rgba(31, 227, 236, 0.5)",
        width: 200,
        height: 75,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonText:{
        fontSize: 30
    },
})
