import React from 'react';
import { StyleSheet,
         Text, 
         View ,
         Button,
         Dimensions
         ,Image,
         TouchableOpacity,
         
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const SplashScreen = ({navigation}) =>{


    return(
    
      <View style={styles.container}>
             <View style={styles.header}>
                 <Animatable.Image
                    animation="bounceIn"
                   duration={1000}
                   source={require('../assets/logoPharmcie.png')}
                   style={styles.logo}
                   resizeMode="stretch"
                 
                 />
             </View>
             <Animatable.View 
                  style={styles.footer}
                  animation="fadeInUpBig"
                  
                  >
                  <Text style={styles.title}>Restez connecter avec votre pharmacie!</Text>
                  <Text style={styles.text}>Se connecter avec un compte</Text>

                  <View style={styles.Button}>
                  <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                      <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                      >
           
                        <Text  style={styles.textSign}>Commencer</Text>
                        <MaterialIcons
                            name="arrow-right"
                            color="#fff"
                            size={20}
                        />
                      </LinearGradient>
                  </TouchableOpacity>
                  </View>



             </Animatable.View>
      </View>
    );
  };
  
  export default SplashScreen;

  const {height} = Dimensions.get("screen");
  const height_logo = height * 0.28;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#009387',
      
    },
    header:{
      flex:2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      paddingVertical: 50,
      paddingHorizontal:30
    },
    logo:{
      width: height_logo,
      height: height_logo,
      borderRadius: 100
    },
    title:{
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
    },
    text: {
      color: 'grey',
      marginTop:5
    },
    Button:{
      alignItems: 'flex-end',
      marginTop:30
    },
    signIn:{
      width: 150,
      height:40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      flexDirection: 'row'
    },
    textSign: {
      color: 'white',
      fontWeight: 'bold'
    }
  });