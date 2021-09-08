import React from 'react';
import { StyleSheet, Text, View ,Button,ActivityIndicator,FlatList} from 'react-native';
import {useTheme} from '@react-navigation/native';


import axios from 'axios';

import Calendrier from '../components/Calendrier'

class PlanningScreen extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          listPlanning:undefined,
          dateDeb: null,
          dateEnd: null,
          isLoading: true,
        }
     this._getPlanning = this._getPlanning.bind(this);
    }

  _getDates(startDate, endDate) {
    const days = [],
              months = new Set(),
              years = new Set()

        const dateMove = new Date(startDate)
        let date = startDate

        while (date < endDate){
          date = dateMove.toISOString().slice(0,10)
          months.add(date.slice(0, 7))
          years.add(date.slice(0, 4))
          days.push(date)
          dateMove.setDate(dateMove.getDate()+1) // increment day
        }
        return {days} // return arrays
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

    async _getPlanning(){
            const idCal = this.props.route.params.numCalendrier
            const reponse = await axios.get('http://localhost/web_site/apiPharm/getPlanning.php')
             this.setState({
                listPlanning: reponse.data.filter(x => x.numCal==idCal),
                isLoading: false,

             })
             //console.log(this.state.listPlanning)

             //console.log(this._generateDateList('2020-11-23', '2020-11-29'))
        }

        componentDidMount(){
              this._getPlanning();

          }


    _displayPlannig(){

      const planning = this.state.listPlanning
      if(planning != undefined){
        return(
          <FlatList
            data={this.state.listPlanning}
            keyExtractor={(item) =>item.numCal}
            renderItem={({item}) => <Calendrier  list={item} generateDate={this._getDates(item.dateDebut, item.dateFin)}  />  }
            />
        )
      }
   }


    render(){
      return(

        <View style={styles.container}>
              {this._displayPlannig()}
              {this._displayLoading()}
        </View>
      )
     }
  };

  export default PlanningScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
  });
