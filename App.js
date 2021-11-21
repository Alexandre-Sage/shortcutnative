import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import SoftwareScreen from './src/screens/SoftwareScreen';
import ShortcutScreen from './src/screens/ShortcutScreen';
import AddScreen from "./src/screens/AddScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
            name="home"
            component={HomeScreen}/>

        <Stack.Screen
            name="Category"
            component={CategoryScreen}/>

        <Stack.Screen
            name="Software"
            component={SoftwareScreen}/>

        <Stack.Screen
            name="Shortcut"
            component={ShortcutScreen}/>

        <Stack.Screen
            name="AddScreen"
            component={AddScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});
