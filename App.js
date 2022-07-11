import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Getstart from './pages/Getstart'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './pages/Home'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
   
    <NavigationContainer>
    <Stack.Navigator screenOptions={
      {headerShown:false}
    
    } initialRouteName="Accueil">
      <Stack.Screen name="Start" component={Getstart} />
      <Stack.Screen name="Accueil" component={Home} />

    </Stack.Navigator>
  </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})