import React from 'react'
import { StyleSheet, Text, View,Image} from 'react-native';
;
import Ionicons from 'react-native-vector-icons/Ionicons';

const StarRating = (props) => {
   
    //Ce tableau contiendra les tags, il inclura ce tableau entre la vue du tag
    let stars = [];

    for(var i=1; i <= 6; i++){

        let name = 'ios-star';

        if(i>props.ratings){
            name= 'ios-star-outline'
        }

        stars.push((<Ionicons name={name} size={15} style={styles.star}  key={i} />));
    }

     return(

        <View style={styles.container}>
                {stars}
                <Text style={styles.text}>({props.reviews})</Text>
        </View>
     );
}

export default StarRating;

const styles = StyleSheet.create({
    star:{
      
        backgroundColor: 'yellow',
    },
})