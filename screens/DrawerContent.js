import React from 'react';
import { StyleSheet, View ,Button} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    useTheme
} from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


import {AuthContext} from '../components/Context';


export function DrawerContent(props){


    const {signOut} = React.useContext(AuthContext);




    return(
          <View style={{flex:1}} >

                    <DrawerContentScrollView {...props}>
                            <View style={styles.DrawerContent}>
                                  <View style={styles.userInfoSection} >
                                        <View style={{flexDirection:'row', marginTop:15}}>
                                                <Avatar.Image
                                                        source={{

                                                            uri:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                                                        }}
                                                    size={50}
                                                />
                                                <View style={{marginLeft:15, flexDirection:'column'}}>
                                                        <Title style={styles.title}>Harry Pierre</Title>
                                                        <Caption style={styles.caption}>@itzpradip</Caption>
                                                </View>
                                        </View>

                                    <View style={styles.row}>

                                       <View style={styles.section}>
                                            <Paragraph style={[styles.paragraph,styles.caption]} ></Paragraph>
                                            <Caption style={styles.caption} ></Caption>
                                       </View>
                                       <View style={styles.section}>
                                            <Paragraph style={[styles.paragraph,styles.caption]} ></Paragraph>
                                            <Caption style={styles.caption} ></Caption>
                                    </View>



                                    </View>


                                  </View>



                                <Drawer.Section style={styles.drawerSection}>

                                            <DrawerItem

                                                    icon={({color,size})=>
                                                    <Icon
                                                        name="map-outline"
                                                        color={color}
                                                        size={size}
                                                    />
                                                }
                                                    label='Géolocalisation'
                                                    onPress={()=>{props.navigation.navigate('Map')}}
                                                />
                                                <DrawerItem

                                                    icon={({color,size})=>
                                                    <Icon
                                                        name="pharmacy"
                                                        color={color}
                                                        size={size}
                                                    />
                                                }
                                                    label="Pharmacies"
                                                    onPress={()=>{props.navigation.navigate("ListPharmScreen")}}
                                                />

                                                <DrawerItem

                                                icon={({color,size})=>
                                                <Icon
                                                    name="hospital-box"
                                                    color={color}
                                                    size={size}
                                                />
                                                 }
                                                label="Garde"
                                                onPress={()=>{props.navigation.navigate("GardeStackScreen")}}
                                            />
                                                <DrawerItem

                                                    icon={({color,size})=>
                                                    <Icon
                                                        name="account-outline"
                                                        color={color}
                                                        size={size}
                                                    />
                                                }
                                                    label="Profil"
                                                    onPress={()=>{props.navigation.navigate("Profil")}}
                                                />
                                                

                                            <DrawerItem

                                            icon={({color,size})=>
                                            <Icon
                                                name="help-circle-outline"
                                                color={color}
                                                size={size}
                                            />
                                             }
                                            label="Aide"
                                            onPress={()=>{}}
                                        />

                                </Drawer.Section>



                            </View>
                    </DrawerContentScrollView>
                    <Drawer.Section style={styles.bottomDrawerSection}>
                        <DrawerItem

                           icon={({color,size})=>
                             <Icon
                                name="exit-to-app"
                                color={color}
                                size={size}
                             />
                        }
                           label="Se déconnecter"
                           onPress={()=>{signOut()}}
                        />
                    </Drawer.Section>


          </View>
    )
}

const styles = StyleSheet.create({

    DrawerContent:{
        flex:1,
    },
    userInfoSection:{
        paddingLeft:20,
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight: 'bold'
    },
    caption:{
        fontSize:14,
        lineHeight:14,

    },
    row: {
        marginTop:20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight:15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight:3,
    },
    drawerSection: {
        marginTop:15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth:1
    },
    preference:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal:16
    },

});
