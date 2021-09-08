import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';



const SupportScreen = ({navigation}) =>{

    return(
  
      <View style={styles.container}>
            <Text>SupportScreen</Text>
            <Button 
               title="Cliquer ici"
               onPress={()=>alert('Button clicked!')}
            />
      </View>
    );
  };
  
  export default SupportScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });