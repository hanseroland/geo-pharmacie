import React from 'react';
import { StyleSheet, Text, View ,Button,StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';


const HomeScreen = ({navigation}) =>{


    return(

      <View style={styles.container}>
            <Text>Home Screnn</Text>
            <Button
               title="Voir les détails"
               onPress={()=>navigation.navigate("Details")}
            />
      </View>
    );
  };

  export default HomeScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
