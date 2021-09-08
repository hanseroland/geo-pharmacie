import React from 'react';
import { StyleSheet,SafeAreaView, Text, View ,Button} from 'react-native';

import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = ({navigation}) =>{

    return(

      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                  <Avatar.Image
                    source={{
                      uri: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    }}
                    size={80}
                  />
                  <View style={{marginLeft: 20}}>
                    <Title style={[styles.title, {
                      marginTop:15,
                      marginBottom: 5,
                    }]}>Harry Pierre</Title>
                  <Caption style={styles.caption}>@h_pierre</Caption>
                  </View>
                </View>
              </View>

              <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                       <Icon name="map-marker-radius" color="#777777" size={20}/>
                       <Text style={{color:"#777777", marginLeft: 20}}>Dakar, Sénégal</Text>
                    </View>
                    <View style={styles.row}>
                       <Icon name="phone" color="#777777" size={20}/>
                       <Text style={{color:"#777777", marginLeft: 20}}>+221-900000009</Text>
                    </View>
                    <View style={styles.row}>
                       <Icon name="email" color="#777777" size={20}/>
                       <Text style={{color:"#777777", marginLeft: 20}}>harrypierre@email.com</Text>
                    </View>
              </View>

              <View style={styles.infoBoxWrapper}>
                  <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                  }]}>
                  </View>
                  <View style={styles.infoBox}>


                  </View>
              </View>

              <View style={styles.menuWrapper}>
                      <TouchableRipple onPress={() => {}}>
                        <View style={styles.menuItem}>
                          <Icon name="information-outline" color="#ffcc00" size={25}/>
                          <Text style={styles.menuItemText}>À propos</Text>
                        </View>
                      </TouchableRipple>
                      <TouchableRipple onPress={()=>{}}>
                        <View style={styles.menuItem}>
                          <Icon name="share-outline" color="#ffcc00" size={25}/>
                          <Text style={styles.menuItemText}>Partager</Text>
                        </View>
                      </TouchableRipple>
                      <TouchableRipple onPress={() => {}}>
                        <View style={styles.menuItem}>
                          <Icon name="help-circle-outline" color="#ffcc00" size={25}/>
                          <Text style={styles.menuItemText}>Aide</Text>
                        </View>
                      </TouchableRipple>
                </View>

      </SafeAreaView>
    );
  };

  export default ProfileScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoSection:{
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize:24,
      fontWeight: 'bold'
    },
    caption :{
      fontSize: 14,
      lineHeight:14,
      fontWeight: '500',
    },
    row:{
      flexDirection: 'row',
      marginBottom: 10
    },
    infoBoxWrapper:{

      borderTopColor: '#dddddd',
      borderTopWidth: 2,
      flexDirection: 'row',
      height: 20,
    },
    infoBox:{
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    menuWrapper:{
      marginTop: 10,
    },
    menuItem:{
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30
    },
    menuItemText:{
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26
    },
  });
