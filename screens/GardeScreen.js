import React from 'react';
import { StyleSheet, Text, View ,Button,StatusBar,FlatList,ActivityIndicator} from 'react-native';
import {useTheme} from '@react-navigation/native';


import axios from 'axios';

import ItemGarde from '../components/ItemGarde'
import SearchInput from '../components/SearchInput'

class GardeScreen extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          listGarde:[],
          listGardeBackup:[],
          query: null,
          isLoading: true,
        }
     this._getGarde = this._getGarde.bind(this);
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


  async _getGarde(){
           try {

              const reponse = await axios.get('http://localhost/web_site/apiPharm/getGarde.php')
               this.setState({
                  listGarde: reponse.data,
                  listGardeBackup: reponse.data,
                  isLoading: false
               })

             }catch (error) {
             error(error);
             }
      }

      componentDidMount(){
            this._getGarde();

        }

        _displayPlannig = (numCalendrier) => {
                 this.props.navigation.navigate("PlanningScreen", {numCalendrier:numCalendrier});
       }

       _displayGarde(){
                 const listGarde = this.state.listGarde
                 if(listGarde != undefined){
                     return(

                         <FlatList
                           data={this.state.listGarde}
                           keyExtractor={(item) =>item.numCalendrier}
                           renderItem={({item}) =><ItemGarde list={item}  displayPlanning={this._displayPlannig} />}
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
                 listGarde: this.state.listGardeBackup
               })
             }else{
               var data = this.state.listGardeBackup;
               query = query.toLowerCase();
               data = data.filter(l => l.nom.toLowerCase().match(query));

               this.setState({
                   listGarde: data,
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
            {this._displayGarde()}
              {this._displayLoading()}
        </View>
      );
     }
  };

  export default GardeScreen;


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
