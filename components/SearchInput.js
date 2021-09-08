import React from 'react'
import {StyleSheet, Text,Image, View,TextInput} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';




class SearchInput extends React.Component  {

 render (){
    const {initialValue,valeur,oChange} = this.props;
    return(

      <View style={styles.searchBox}>
          <TextInput
              placeholder={initialValue}
              value={valeur}
              onChange={oChange}
              placeholderTextColor="#000"
              autoCapitalize="none"
              style={{flex:1,padding:0}}
          />
          <Ionicons name="ios-search" size={20}/>
      </View>

   )
  }
}

export default SearchInput;


const styles = StyleSheet.create({
  searchBox:{
    marginTop: Platform.OS === 'ios' ? 37:20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf:'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: {width:0, height:3},
    shadowOpacity: 1.5,
    shadowRadius:5,
    elevation:10,
  }
});
