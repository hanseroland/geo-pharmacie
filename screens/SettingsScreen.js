import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';



const SettingsScreen = ({navigation}) =>{

    return(
  
      <View style={styles.container}>
            <Text>SettingsScreen</Text>
            <Button 
               title="Cliquer ici"
               onPress={()=>alert('Button clicked!')}
            />
      </View>
    );
  };
  
  export default SettingsScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });