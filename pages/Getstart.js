import { ImageBackground, StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Getstart = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
                style={styles.imageBg}
                source={require('../asset/2.jpg')}> 
                <View
                style={styles.header}>
                </View>

                <View
                style={styles.bottom}> 
                        <Text style={styles.title}>Un depaysement total</Text> 
                        <Text style={styles.description}>La nature est belle protegeons la ! c'est dans ce havre de paix que nous vous proposons ce sejour detente situe au Nord de la France</Text> 
                        <Button style={styles.bouton}
        title="Voir plus"
        onPress={() => navigation.navigate('Accueil')}
      />
                        
                </View>
      </ImageBackground>
    </View>
  )
}

export default Getstart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      },

    imageBg:{
        flex: 1,
        padding:10

    },

    header: {

        flex:2,



    },
    bottom: {

        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        borderRadius:10,
        padding: 10,


    },

    title: {

        fontSize : 30,
        color : 'white',
        fontWeight:'bold',
        textAlign:'center',



    },

    description: {

        fontSize : 16,
        color : 'white',
        marginTop: 45,
        marginBottom:30,

    
        



    },
    bouton: {

        



    },



})