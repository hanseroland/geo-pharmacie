import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';



const DetailsScreen = ({navigation}) =>{

    return(
  
      <View style={styles.container}>
            <Text>Details Screnn</Text>
            <Button 
               title="Voir details...encore"
               onPress={()=>navigation.push("Details")}
             />
             <Button 
                title="Retour à l'Accueil "
                onPress={()=>navigation.navigate("Home")}
             />
             <Button 
                title="Retour"
                onPress={()=>navigation.goBack()}
             />
             <Button 
                title="Retour au premier écran"
                onPress={()=>navigation.popToTop()}
              />
      </View>
    );
  };

  export default DetailsScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });