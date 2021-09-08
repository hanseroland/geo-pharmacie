import React from 'react';
import { StyleSheet, Text, View ,Button,ActivityIndicator} from 'react-native';
import {useTheme} from '@react-navigation/native';


import axios from 'axios';

import Calendrier from '../components/Calendrier'


class PlanningScreen extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          listPlanning:[],
          dateDeb: null,
          dateEnd: null,
          isLoading: true
        }
     this._getPlanning = this._getPlanning.bind(this);
    }
  //console.log(this._generateDateList('2020-11-23', '2020-11-29'))
  _generateDateList(from, to) {

      var getDate = function(date) { //Mysql Format
          var m = date.getMonth(), d = date.getDate();
          return date.getFullYear() + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
      }
      var fs = from.split('-'), startDate = new Date(fs[0], fs[1], fs[2]), result = [getDate(startDate)], start = startDate.getTime(), ts, end;

      if ( typeof to == 'undefined') {
          end = new Date().getTime();
      } else {
          ts = to.split('-');
          end = new Date(ts[0], ts[1], ts[2]).getTime();
      }
      while (start < end) {
          start += 86400000;
          startDate.setTime(start);
          result.push(getDate(startDate));
      }
      return result;
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
         try {
            const {idCal} = this.props.route.params
            const reponse = await axios.get('http://localhost/web_site/apiPharm/getPlanning.php')
             this.setState({
                listPlanning: reponse.data.filter(x => x.numCal==idCal),
                isLoading: false
             })
             console.log(idCal)
           }catch (error) {
           error(error);
           }
        }

        componentDidMount(){
              this._getPlanning();

          }


    render(){
      return(

        <View style={styles.container}>
              <Calendrier/>
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
