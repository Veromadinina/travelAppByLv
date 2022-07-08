import { StyleSheet, Text, View, StatusBar,TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'


const OnBoard = () => {
  return (
    <View style={{flex:1}}>
     <StatusBar translucent/> 
     <ImageBackground style={{flex:1}} source={require('../asset/image1.jpg')}>
        <View style={styles.details}>
            
            <Text style={{color:'white'}}> Roseraie de l'ile


            </Text>
            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.btn}>
                    <Text style={{fontWeight:'bold'}}>On y va  !

                    </Text>


                </View>


            </TouchableOpacity>
           

        </View>
     </ImageBackground>
    </View>
  )
}

export default OnBoard

const styles = StyleSheet.create({
    details:{
        height:'50%',
        bottom: 0,
        position:'absolute',
        paddingHorizontal: 40,

    },
    btn:{
        height:50,
        width:120,
        backgroundColor:'white',
        marginTop:20,
        borderRadius: 7,
        justifyContent:'center',
        alignItems:'center',




    }
})