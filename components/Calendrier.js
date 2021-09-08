import React from 'react'
import {StyleSheet, Text, View,Button,ListView} from 'react-native'

import {Calendar, CalendarList, Agenda,LocaleConfig} from 'react-native-calendars'

class Calendrier extends React.Component  {



 render() {

   LocaleConfig.locales['fr'] = {
     monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
     monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
     dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
     dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
     today: 'Aujourd\'hui'
   };
   LocaleConfig.defaultLocale = 'fr';


   const {list,generateDate} = this.props;
   const listedata= generateDate.days

   let dates = {};
       listedata.forEach((val) => {
         dates[val] = {color: '#ffcc00', textColor: 'white', marked: true, dotColor: 'white'};
       });
   return (
         <View>
           <Calendar
               markingType={'period'}
               markedDates={dates}
             />
         </View>
   );
 }
}

export default Calendrier;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
