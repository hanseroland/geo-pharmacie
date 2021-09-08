import React from 'react';
import { StyleSheet,
            Text,
             View ,
             TouchableOpacity,
             Platform,
             TextInput,
             StatusBar,
             Alert

} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Users from '../model/Users'

import {AuthContext} from '../components/Context';

const SignInScreen = ({navigation}) =>{



  const [data, setData] = React.useState({

       username: '',
       password: '',
       check_textInputChange: false,
       secureTextEntry: true,
       isValidUser: true,
       isValidPassword: true,

  });


  const {signIn} = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if(val.trim().length >= 4){
         setData({

          ...data,
          username: val,
          check_textInputChange:true,
          isValidUser: true
         });
    }else{
      setData({

        ...data,
        username: val,
        check_textInputChange:false,
        isValidUser: false
       });
    }
  }

  const handlePasswordChange = (val) => {
    if(val.trim().length >= 8){
        setData({

          ...data,
          password: val,
          isValidPassword: true
        });
    }else{

      setData({

        ...data,
        password: val,
        isValidPassword: false
      });

    }
  }

  const updateSecureTextEntry = () => {

    setData({

      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  const loginHandle = (userName,password)=>{

        const foundUser = Users.filter(item =>{
        return userName == item.username && password == item.password;
      });

      if (data.username.length == 0 || data.password.length == 0){

        Alert.alert('Aucune saisie', 'Veuillez remplir les deux champs', [
          {text: 'Okey'}
        ]);
      }

      if (foundUser.length == 0){

        Alert.alert('Utilisateur Invalid', 'Username ou Mot de Passe incorrect', [
          {text: 'Okey'}
        ]);
      }



      signIn(foundUser)
  }

  const handleValidUser= (val)=>{

    if(val.trim().length  >= 4 ){
        setData({
          ...data,
          isValidUser: true
        });
    }else{

      setData({
        ...data,
        isValidUser: false
      });
    }

  }

    return(

        <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content" />
       <View style={styles.header}>
             <Text style={styles.text_header}>Bienvenue!</Text>
       </View>

       <Animatable.View style={styles.footer}

        animation="fadeInUpBig"
       >
           <Text style={styles.text_footer}>username</Text>
           <View style={styles.action}>
               <FontAwesome
                 name="user-o"

                 size={20}
               />
               <TextInput
                   placeholder="Votre pseudo"
                   style={styles.textInput}
                   autoCapitalize="none"
                   onChangeText={(val)=>textInputChange(val)}
                   onEndEditing={(e)=>handleValidUser(e.nativeEvent.text) }
               />

               {data.check_textInputChange ?

               <Animatable.View
                  anaimation="bounceIn"
               >
                   <Feather
                       name="check-circle"
                       color="green"
                       size={20}

                   />
               </Animatable.View>

               : null}
           </View>
           {data.isValidUser ? null :
            <Animatable.View animation="fadeInLeft" duration={500}>
                 <Text style={styles.errorMsg}>Le nom d'utilisateur conternir au moins 4 caractères</Text>
            </Animatable.View>
           }


           <Text style={[styles.text_footer,
            { marginTop:35}]}>Mot de Passe</Text>
           <View style={styles.action}>
               <FontAwesome
                 name="lock"
                 size={20}
               />
               <TextInput
                   placeholder="Votre mot de passe"
                   style={styles.textInput}
                   autoCapitalize="none"
                   secureTextEntry={data.secureTextEntry ? true : false}
                   onChangeText={(val)=>handlePasswordChange(val)}
               />

             <TouchableOpacity
               onPress={updateSecureTextEntry}
             >
             {data.secureTextEntry ?
                 <Feather
                     name="eye-off"
                     color="grey"
                     size={20}

                 />
                 :
                 <Feather
                 name="eye"
                 color="grey"
                 size={20}

                  />
             }
             </TouchableOpacity>
           </View>
           {data.isValidPassword ? null :

            <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Le mot de passe doit contenir 8 caractères</Text>
             </Animatable.View>
           }


         <TouchableOpacity>
           <Text style={{color: '#009387', marginTop:15}}>Mot de passe oublié ?</Text>
         </TouchableOpacity>
        <View style={styles.button}>

            <TouchableOpacity  style={styles.signIn}
            onPress={()=>{loginHandle(data.username,data.password)}}
            >
            <LinearGradient
             style={styles.signIn}
             colors={['#08d4c4','#01ab9d']}

            >

               <Text style={[styles.textSign],{color:'#fff'}}>Se connecter</Text>

            </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={()=> navigation.navigate('SignUpScreen')}
             style={[styles.signIn, {

               borderColor:'#009387',
               borderWidth:1,
               marginTop: 15
             }]}

             >
               <Text style={[styles.textSign,
                {
                  color: '#009387'
                }]}>S'inscrire</Text>
            </TouchableOpacity>


        </View>

       </Animatable.View>

</View>



    );
  };

  export default SignInScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#009387',

    },
    header:{
      flex:1,
      justifyContent: 'flex-end',
      paddingHorizontal:20,
      paddingBottom:50
    },
    footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      paddingVertical: 30,
      paddingHorizontal:20
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer:{
      color: '#05375a',
      fontSize: 18
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom:5
    },
    textInput: {
       flex:1,
       marginTop: Platform.OS == 'ios' ? 0:-12,
       paddingLeft: 10,
       color: '#05375a',
       height:50,
       borderTopLeftRadius:20,
       borderTopRightRadius: 20,
       borderRadius:20
    },

    button:{
      alignItems: 'center',
      marginTop:50
    },
    signIn:{
      width: '100%',
      height:50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,

    },
    textSign: {
      fontWeight:10,
      fontWeight: 'bold'
    },
    errorMsg:{
      color: 'red',
      fontWeight: 'bold'
    }
  });
