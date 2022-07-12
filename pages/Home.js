import { ScrollView, StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { Button } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import { Header } from "@rneui/themed";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SearchBar } from "@rneui/themed";
import places from '../constantes/Place';
 

const Home = () => {
 
const renderCards = ({item}) => 

{return(

  <Text>{item.name}</Text>
)}
 
  return (
    <SafeAreaProvider>
          
          <View style={styles.header}>
                <View style={styles.headerButton}>

                <Icon name='sort'
                      color='rgba(255, 255, 255, 1)'
                      size={35}
                     
                       /> 
                <Icon name='notifications-none'color='rgba(255, 255, 255, 1)' />
                </View>
                  <View>
                <Text style={styles.topText} >Explorez de beaux paysages !</Text>
                  </View>
                    <View style={styles.search} >

                    <SearchBar style={styles.searchBar}
                          placeholder="Type Here..."
                          onChangeText={Home}
                          
                        />


                   </View>
         </View>

         <View style={styles.content}>
                  <ScrollView style={styles.scrollView} horizontal={true}>
                  <Icon
        raised
        name='heartbeat'
        type='font-awesome'
        color='#f50'
        onPress={() => console.log('hello')} />

<Icon
        raised
        name='heartbeat'
        type='font-awesome'
        color='rgba(244, 247, 0, 1)'
        onPress={() => console.log('hello')} />

<Icon
        raised
        name='heartbeat'
        type='font-awesome'
        color='rgba(64, 245, 0, 1)'
        onPress={() => console.log('hello')} />
         <Icon
        raised
        name='heartbeat'
        type='font-awesome'
        color='rgba(0, 242, 245, 1)'
        onPress={() => console.log('hello')} />

<Icon
        raised
        name='heartbeat'
        type='font-awesome'
        color='rgba(245, 89, 0, 1)'
        onPress={() => console.log('hello')} />
         <Icon
        raised
        name='heartbeat'
        type='font-awesome'
        color='#f50'
        onPress={() => console.log('hello')} />


                  </ScrollView>

                  <FlatList
        data={places}
        renderItem={renderCards}
        keyExtractor={(item) => item.id}
        
                 />
         </View>
      


    </SafeAreaProvider>
  )
}

export default Home

const styles = StyleSheet.create({

    header:{
       
        height:200,
        backgroundColor:"rgba(21, 59, 232, 0.9)",
    
    },

    content:{
       
      flex:1,
      
  
  },
  headerButton:{

      flexDirection:'row',
      justifyContent:'space-between',
      padding:20

       
    

},

topText:{

  fontSize:35,
  fontWeight:'700',
  color:'white',
  paddingHorizontal: 20,

   


},

search:{
backgroundColor:"rgba(21, 59, 232, 0.7)",
height:65,
width:'90%',
borderRadius:10,
position:'absolute',
top:170,
//flexDirection:'row',

//alignItems:'center',
elevation: 12,
marginHorizontal: 20,





},

searchBar:{





},
scrollView:{
marginTop : 50,
marginHorizontal:20,



},
        
})