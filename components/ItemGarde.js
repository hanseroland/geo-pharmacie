import React from 'react'
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';

import * as Linking from 'expo-linking';

class ItemGarde extends React.Component{


 render (){
   const {list,displayPlanning} = this.props;


    return(

        <View style={styles.cardView} >
         <View style={styles.content_container} >
                  <View   style={styles.header_container}>
                        <Text style={styles.title_text}> {list.nom} </Text>

                      <TouchableOpacity style={styles.signContact}
                              onPress={()=>{  Linking.openURL('tel:'+list.contact);}}
                        >
                        <Text style={styles.contact_text}>{list.contact} </Text>
                          <Ionicons name="ios-call" color={'white'} size={20}/>
                      </TouchableOpacity>
                  </View>
                  <View   style={styles.bottom_container}>
                    <TouchableOpacity
                        onPress={()=>displayPlanning(list.numCalendrier)}
                      >
                          <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                          >
                        <Text style={styles.textSign}> Planning </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
               </View>

        </View>





   )
  }
}

export default ItemGarde;


const styles = StyleSheet.create({

  cardView:{
    flex:1,
    backgroundColor: "#009387",
    borderRadius:20,
    marginVertical:5,
    padding:10,
    width: 400,
    height: 90,
    shadowColor: "#000",
    shadowOffset:{
        width:0,
        height:3,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    marginLeft: 5
  },
  content_container:{
      flex:1,
      margin:5
  },
  header_container:{
      flex:3,
      flexDirection: 'row'
  },
  title_text:{
      fontWeight: 'bold',
      fontSize: 15,
      flex:1,
      flexWrap: 'wrap',
      paddingRight:5,
      color:"white"
  },

  bottom_container :{
      flex:4,
      flexDirection: 'row'

  },

  contact_text:{
      fontWeight: 'bold',
      fontSize:16,
      color: '#ffcc00'
  },

    signIn:{
      width: 120,
      height:40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      flexDirection: 'row'
    },

    signContact:{
      width: 100,
      height:20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      flexDirection: 'row',
      shadowColor: "#000",
      shadowOffset:{
          width:2,
          height:7,
      },
      shadowOpacity: 0.55,
      shadowRadius: 3.84,
    },

    textSign: {
      color: 'white',
      fontWeight: 'bold'
    },
    contact_container:{
      flexDirection: 'row'
    }
});
