import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View ,Button,FlatList,ActivityIndicator} from 'react-native';
import {useTheme} from '@react-navigation/native';

import axios from 'axios';

import ItemPharm from '../components/ItemPharm'
import SearchInput from '../components/SearchInput'

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {getDistance} from 'geolib';
import { publiqueRequest } from '../requestMethods';

class ListPharmScreen extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          listPharmacie:[],
          listPharmacieBackup:[],
          query: null,
          isLoading: true,

          location: null,
          errorMessage: null,
          loaded: false,

          distance:null,

        }
     this._getPharm = this._getPharm.bind(this);
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



          componentDidMount(){
                if (Platform.OS === 'android' && !Constants.isDevice) {
                  this.setState({
                    errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
                    loaded:true
                  });
                } else {
                  this._getLocationAsync();
                  this._getPharm();
                }

            }

            async _getPharm(){
              try {
                 const reponse = await publiqueRequest.get();
                  this.setState({
                     listPharmacie: reponse.data,
                     listPharmacieBackup: reponse.data,

                  })

                }catch (error) {
                error(error);
                }
            }

            _calculeDistance(myPosLat, myPosLong, myDesLat, myDeslong){

              const distance = getDistance(
                {latitude: myPosLat, longitude: myPosLong},
                {latitude: myDesLat, longitude: myDeslong}
              )
                return distance/100
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

                 let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true});
                 this.setState({
                     location,
                     loaded: true,
                     errorMessage: null,
                     isLoading: false,
                  })

            }
          };

            _displayPills = (idPharmacie) => {
                    this.props.navigation.navigate("PillScreen", {idPharmacie : idPharmacie} );
              }



            _displayPharm(){
                  const listPharmacie = this.state.listPharmacie
                  if(listPharmacie != undefined){
                      return(
                          <FlatList
                             data={this.state.listPharmacie}
                            keyExtractor={(item) =>item.id_pharmacie.toString()}
                            renderItem={({item}) =><ItemPharm list={item}
                                                    myLat={this.state.location.coords.latitude}
                                                    myLong={this.state.location.coords.longitude}
                                                    displayPills={this._displayPills}
                                                    desLat={item.coordonnees.latitude}
                                                    desLong={item.coordonnees.longitude}
                                                    funcDist={this._calculeDistance}
                                      />}
                            />
                      )
                  }
            }

            filterItem = (event) =>{
              var query = event.nativeEvent.text;
              this.setState({
                query:query
              });
              if(query == ""){
                this.setState({
                  listPharmacie: this.state.listPharmacieBackup
                })
              }else{
                var data = this.state.listPharmacieBackup;
                query = query.toLowerCase();
                data = data.filter(l => l.nom.toLowerCase().match(query));

                this.setState({
                    listPharmacie: data,
                });
              }
            }

  render(){



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
                console.log(this.state.location.coords.latitude)
                console.log(this.state.location.coords.longitude)

            // if we have a location show it
            return (
              <View style ={styles.container}>
                    <SearchInput
                        initialValue= "Entrer un text..."
                        valeur = {this.state.query}
                        oChange={this.filterItem.bind(this)}
                    />
                    {this._displayPharm()}
             </View>

            );
          }
        }else {
          // if we haven't loaded show a waiting placeholder
              return(
                <View style ={styles.container}>
                    {this._displayLoading()}
                </View>
              );
        }
    }
  };

export default ListPharmScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    loading_container:{
    position : 'absolute',
    left:0,
    right:0,
    top:100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }

  });
