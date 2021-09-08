import React from 'react'
import {
   StyleSheet,
   ScrollView,
   Text,
   Platform,
   Animated,
   TouchableOpacity,
   View,
   TextInput
   ,Button,
    Dimensions
   ,Image,
   ActivityIndicator
} from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker,Polyline } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import StarRating from '../screens/StarRating';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import axios from 'axios';

import PolylineDirection from '@react-native-maps/polyline-direction';

import {markers, mapRetroStyle, mapStandaredStyle} from '../model/mapData';



class MapScreen extends React.Component  {
  constructor(props){
      super(props);
      this.state = {
        location: null,
        errorMessage: null,
        loaded: false,
        isLoading: true,
        markers: null,
        region: {
            myLatitude: null,
            myLongitude: null,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          },
       
  
        }
    }
    _displayLoading(){
        if(this.state.isLoading){
          return (
            <View style={styles.loading_container}>
               <ActivityIndicator size='large'/>
            </View>
          )
        }
      }

    componentDidMount () {
       if (Platform.OS === 'android' && !Constants.isDevice) {
         this.setState({
           errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
           loaded:true
         });
       } else {
         this._getLocationAsync();
         this.initialRegion
       }
     }

     _getLocationAsync = async () => {
         let { status } = await Permissions.askAsync(Permissions.LOCATION);
         if (status !== 'granted') {
           this.setState({
             errorMessage: 'Permission to access location was denied',
             loaded: true
           });
         } else {
           // only check the location if it has been granted
           // you also may want to wrap this in a try/catch as async functions can throw
           let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
           const reponse = await axios.get('http://localhost/web_site/apiPharm/')
           this.setState({ location,
                           loaded: true,
                           errorMessage: null, 
                           isLoading: false,
                           markers: reponse.data
                           });
                   }
         };

        
  
 render (){
           // check to see if we have loaded
          if (this.state.loaded) {
            // if we have an error message show it
            if (this.state.errorMessage) {
              return (
                <View style={styles.container}>
                  <Text>{JSON.stringify(this.state.errorMessage)}</Text>
                </View>
              );
            } else if (this.state.location) {
                  console.log(this.state.location)
                  console.log(this.state.markers)
                  
              // if we have a location show it
              return (

            <MapView
                  showsUserLocation
                  style={{ flex: 1 }}
                  provider={PROVIDER_GOOGLE}
                  region={{
                    latitude: this.state.location.coords.latitude,
                    longitude: this.state.location.coords.longitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                  }}
              >
              {this.state.markers.map((marker,index)=>{ 
      
              return (
                    <MapView.Marker  key={index} coordinate={marker.coordonnees} title={marker.nom} >
                      <Animated.View style={[styles.markerWrap]}>
                        <Animated.Image
                          source={require('../assets/banners/map-marker.png')}
                          style={[styles.marker]}
                          resizeMode='cover'
                        />
                      </Animated.View>
        
                    </MapView.Marker>
              )
              })}
            </MapView>
              );
            }
          } else {
            // if we haven't loaded show a waiting placeholder
            return (
              <View style={styles.container}>
                  {this._displayLoading()} 
              </View>
            );
          }

   }
}

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center'
  },
  marker:{
    width:30,
    height:30,
  },
});
