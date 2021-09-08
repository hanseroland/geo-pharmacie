import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View ,Button,StatusBar,ScrollView,ActivityIndicator, FlatList} from 'react-native';
import {useTheme} from '@react-navigation/native';

import SearchInput from '../components/SearchInput'
import ItemPill from '../components/ItemPill'

import axios from 'axios';


class PillScreen extends React.Component{

  constructor(props){
      super(props);
      this.state = {
          listMedicament:[],
          listMedicamentBackup:[],
          query: null,
          isLoading: true
        }
     this._getMedicament = this._getMedicament.bind(this);
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


async _getMedicament(){
     try {
        const {idPharmacie} = this.props.route.params
        const reponse = await axios.get('http://localhost/web_site/apiPharm/getMedicament.php')
         this.setState({
            listMedicament: reponse.data.filter(x => x.idPharmacie==idPharmacie),
            listMedicamentBackup: reponse.data.filter(x => x.idPharmacie==idPharmacie),
            isLoading: false
         })

       }catch (error) {
       error(error);
       }
    }


      componentDidMount(){
            this._getMedicament();
        }

        __disponibilite(statut){

          if(statut > 0){
            return "Disponible"
          }else{
              return "Indisponible"
          }    
        }

      _displayMedicament(){
            const listMedicament = this.state.listMedicament
            if(listMedicament != undefined){
                return(

                    <FlatList
                      data={this.state.listMedicament}
                      keyExtractor={(item) =>item.idMedicament}
                      renderItem={({item}) =><ItemPill list={item} dispo={this.__disponibilite} />}
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
      listMedicament: this.state.listMedicamentBackup
    })
  }else{
    var data = this.state.listMedicamentBackup;
    query = query.toLowerCase();
    data = data.filter(l => l.nomMedicament.toLowerCase().match(query));

    this.setState({
        listMedicament: data,
    });
  }
}
render(){
    return(

      <View style={styles.container}>
          <SearchInput
              initialValue= "Entrer un text..."
              valeur = {this.state.query}
              oChange={this.filterItem.bind(this)}

            />
          {this._displayMedicament()}
          {this._displayLoading()}
      </View>
     );
    }
  };

  export default PillScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //justifyContent: 'center',
    },
    scrollViewStyle:{
        marginHorizontal: 5,
        marginTop:5
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
