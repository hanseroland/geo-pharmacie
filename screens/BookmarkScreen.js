import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';



const BookmarkScreen = ({navigation}) =>{

    return(
  
      <View style={styles.container}>
            <Text>BookmarkScreen</Text>
            <Button 
               title="Cliquer ici"
               onPress={()=>alert('Button clicked!')}
            />
      </View>
    );
  };
  
  export default BookmarkScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });