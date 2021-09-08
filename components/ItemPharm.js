import React from 'react'
import {StyleSheet, Text,Image, View,TouchableOpacity} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';
import {getDistance} from 'geolib';

import * as Linking from 'expo-linking';


class ItemPharm extends React.Component{

  
  

 render (){
     const {list,displayPills,funcDist,myLat,myLong,desLat,desLong} = this.props;
     
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
                  <View style={styles.description_container}>
                      <Text style={styles.adresse_text} numberOfLines={6} > {list.adresse} </Text>
                  </View>

                  <View   style={styles.bottom_container}>
                    <TouchableOpacity
                        onPress={()=>displayPills(list.id_pharmacie)}
                      >
                          <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                          >
                        <Text style={styles.textSign}> médicaments </Text>
                      </LinearGradient>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.mapStyle}>
                        <Image
                          source={require('../assets/banners/map-marker.png')}
                           style={[styles.marker]}
                          />

                        <Text style={styles.ville_text}> {funcDist(myLat,myLong,desLat,desLong)} km,{list.ville} </Text>
                    </TouchableOpacity>

                  </View>
         </View>

        </View>





   )
  }
}

export default ItemPharm;


const styles = StyleSheet.create({

  cardView:{
    flex:1,
    backgroundColor: "#009387",
    borderRadius:20,
    marginVertical:5,
    padding:10,
    width: 400,
    height: 120,
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
      margin:5,

  },
  header_container:{
      flex:3,
      flexDirection: 'row'
  },
  title_text:{
      fontWeight: 'bold',
      fontSize: 13,
      flex:1,
      flexWrap: 'wrap',
      paddingRight:5,
      color:"white"
  },
  description_container: {
     flex:7
  },
  adresse_text : {
     fontStyle: 'italic',
     color: '#000',
     paddingTop:10
  },
  bottom_container :{
      flex:7,
      flexDirection: 'row'

  },
  ville_text:{
      textAlign : 'right',
      color: '#ffffff',
      fontSize: 14,
      paddingBottom:19
  },
  contact_text:{
      fontWeight: 'bold',
      fontSize:13,
      color: '#ffcc00',
  },
  signContact:{ 
    width: 110,
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
  medicament_text:{
    textAlign : 'left',
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom:19
  },
  mapStyle:{
    marginLeft: 140,
    alignItems: 'center'
  },
  marker:{
    width:30,
    height:30,
  },
  pill:{
      width:30,
      height:30,
    },
    signIn:{
      width: 120,
      height:40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      flexDirection: 'row'
    },
    textSign: {
      color: 'white',
      fontWeight: 'bold'
    },
    contact_container:{
      flexDirection: 'row'
    }
});
