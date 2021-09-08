import React from 'react'
import {StyleSheet, Text,Image, View,TouchableOpacity} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';


class ItemPill extends React.Component  {

 render (){

    const {list,dispo} = this.props;
   

    return(
        <View style={styles.cardView}>
           <View style={styles.content_container}>
                    <View style={styles.header_container}>
                          <Text style={styles.title_text}>{list.nomMedicament} {list.dosage}</Text>
                          <Text style={styles.contact_text}>{list.prix} XOF </Text>
                    </View>

                    <View style={styles.description_container}>
                        <Text style={{fontWeight: 'bold'},{color:'white'}}>{dispo(list.quantite)} </Text>
                        <Text style={styles.styleType}>{list.type}/{list.categorie}</Text>
                        <Text style={styles.adresse_text} numberOfLines={1} >{list.details}  </Text>
                    </View>
             </View>
        </View>
    )
  }
}

export default ItemPill;


const styles = StyleSheet.create({

  cardView:{
    backgroundColor: "#009387",
    marginVertical:5,
    padding:10,
    height: 95,
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
  description_container: {
     flex:7
  },
  adresse_text : {
     fontStyle: 'italic',
     color: '#000',
  },
 styleType:{
     color:"#ffcc00"
 },

  contact_text:{
      fontWeight: 'bold',
      fontSize:16,
      color: '#ffcc00'
  },
    contact_container:{
      flexDirection: 'row'
    }
});
