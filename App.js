import { NavigationContainer} from '@react-navigation/native';

import React,{useEffect} from 'react';
import { 
          StyleSheet, 
          View ,
          ActivityIndicator     
} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './screens/DrawerContent';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';

import RootStackScreen from './screens/RootStackScreen';

import {AuthContext} from './components/Context'
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();



function App() {



const initialLoginState = {

      isLoading: true,
      userName: null,
      userToken: null,
};




const loginReducer = (prevState, action) =>{

   switch( action.type ){
      case 'RETRIEVE_TOKEN':
        return {
            ...prevState,
            userToken: action.token,
            isLoading: false

        };
      case 'LOGIN':
        return {
          ...prevState,
           userName: action.id,
           userToken: action.token,
          isLoading: false

        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName:null,
          userToken: null,
          isLoading: false

        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false

        };

   }
};

const [loginState,dispatch] =  React.useReducer(loginReducer,initialLoginState);

const authContext = React.useMemo(()=>({

  signIn: async(foundUser)=>{
   // setUserToken('fgkj');
   // setIsLoading(false);
   const userToken = String(foundUser[0].userToken);
   const userName = foundUser[0].username; 
     try{
       await AsyncStorage.setItem('userToken', userToken)
     }catch(e){
       console.log(e);
     }
   
   //console.log('user token', userToken);
   dispatch({type: 'LOGIN', id:userName, token: userToken});
  },

  signOut: async()=>{
    //setUserToken(null);
    //setIsLoading(false);
    try{
      await AsyncStorage.removeItem('userToken')
    }catch(e){
      console.log(e);
    }
    dispatch({type: 'LOGOUT'});
  },

  signUp: ()=>{
   // setUserToken('fgkj');
   // setIsLoading(false);
  },


}), []);


useEffect(()=> {

    setTimeout(async()=>{
      //setIsLoading(false);
      let userToken;
      userToken = null
      try{
        await AsyncStorage.getItem('userToken')
      }catch(e){
        console.log(e);
      }
      //console.log('user token', userToken)
      dispatch({type: 'REGISTER', token: userToken});
    }, 1000);
     

},[]);

if(loginState.isLoading){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
           <ActivityIndicator size="large"/>
    </View>
  );
}


  return (

    <AuthContext.Provider value={authContext}>
    <NavigationContainer> 
     { loginState.userToken !== null ? (
         
       <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> } >
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen}  />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
              <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
         </Drawer.Navigator>
     )
     : 
     <RootStackScreen />
     } 
    
    </NavigationContainer>
    </AuthContext.Provider>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
