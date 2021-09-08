import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import ListPharmScreen from './ListPharmScreen';
import GardeScreen from './GardeScreen';
import PillScreen from './PillScreen';
import PlanningScreen from './PlanningScreen';
import EditeProfileScreen from './EditeProfileScreen';
import MapScreen from './MapScreen'



const MapStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ListPharmStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const GardeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
//const PillStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ()=> (

    <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#fff"
            style={{ backgroundColor: 'tomato' }}
        >
    <Tab.Screen
      name="Map"
      component={ExploreStackScreen}
      options={{
        tabBarLabel: 'Géolocalisation',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-map" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="ListPharmScreen"
      component={ListPharmStackScreen}
      options={{
        tabBarLabel: 'pharmacies',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons color={color}  name="pharmacy" size={26}/>

        ),
      }}
    />
    <Tab.Screen
      name="GardeScreen"
      component={GardeStackScreen}
      options={{
        tabBarLabel: 'Garde',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons color={color}  name="hospital-box" size={26}/>
        ),
      }}
    />
    <Tab.Screen
      name="Profil"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profil',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>

);

export default MainTabScreen;

function NewListPharmStackScreen({navigation}) {
  return (
     <ListPharmScreen   navigation={navigation} />
  );
}

function PillStackScreen({route}) {
  return (
     <PillScreen   route={route} />
  );
}



function NewGardeStackScreen({navigation}) {
  return (
     <GardeScreen   navigation={navigation} />
  );
}

function PlanningStackScreen({route}) {
  return (
     <PlanningScreen   route={route} />
  );
}

  const ExploreStackScreen = ({navigation})=>(
      <ExploreStack.Navigator screenOptions={{

        headerStyle:{
          backgroundColor:'#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
          fontWeight: 'bold'
        }

      }}
      >
        <ExploreStack.Screen name="Explore" component={ExploreScreen} options={{
                   title:'Géolocalisation',
                   headerLeft: ()=>(
                     <Icon.Button name="ios-menu" size={25}
                     backgroundColor="#009387" onPress={()=>{
                      navigation.openDrawer();
                     }}></Icon.Button>
                   )

            }
         }
         />
      </ExploreStack.Navigator>
    );


  const ListPharmStackScreen = ({navigation})=>(
      <ListPharmStack.Navigator screenOptions={{

        headerStyle:{
          backgroundColor:'#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
          fontWeight: 'bold'
        }

      }}
      >
        <ListPharmStack.Screen name="ListPharmScreen" component={NewListPharmStackScreen} options={{
                   title:'Liste des Pharmacies',
                   headerLeft: ()=>(
                     <Icon.Button name="ios-menu" size={25}
                     backgroundColor="#009387" onPress={()=>{
                      navigation.openDrawer();
                     }}></Icon.Button>
                   )

            }
         }
         />

       <ListPharmStack.Screen name="PillScreen" component={PillStackScreen} options={{
                    title:'Médicaments',


             }
          }
          />

      </ListPharmStack.Navigator>
    );


    const GardeStackScreen = ({navigation})=>(
        <GardeStack.Navigator screenOptions={{

          headerStyle:{
            backgroundColor:'#009387'
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold'
          }

        }}
        >
          <GardeStack.Screen name="GardeScreen" component={NewGardeStackScreen} options={{
                     title:'Pharmacies de garde',
                     headerLeft: ()=>(
                       <Icon.Button name="ios-menu" size={25}
                       backgroundColor="#009387" onPress={()=>{
                        navigation.openDrawer();
                       }}></Icon.Button>
                     )

              }
           }
           />
         <GardeStack.Screen name="PlanningScreen" component={PlanningStackScreen} options={{
                        title:'Planning de garde',


                 }
              }
              />
       </GardeStack.Navigator>
      );


    const ProfileStackScreen = ({navigation})=>(
        <ProfileStack.Navigator screenOptions={{

          headerStyle:{
            backgroundColor:'#009387'
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight: 'bold'
          }

        }}
        >
          <ProfileStack.Screen name="Home" component={ProfileScreen} options={{
                     title:'Profil',
                     headerLeft: ()=>(
                       <Icon.Button name="ios-menu" size={25}
                       backgroundColor="#009387" onPress={()=>{
                        navigation.openDrawer();
                       }}></Icon.Button>
                   ),
                   headerRight: () => (

                          <MaterialCommunityIcons.Button
                            name="account-edit"
                            size={25}
                            backgroundColor="#009387"
                            color="#fff"
                            onPress={() => navigation.navigate('EditProfile')}
                          />
                      ),
                     }
                 }
           />
         <ProfileStack.Screen
           name="EditProfile"
           options={{
             title: 'Editer le Profil',
           }}
           component={EditeProfileScreen}
         />
        </ProfileStack.Navigator>
      );


  const MapStackScreen = ({navigation})=>(

    <MapStack.Navigator screenOptions={{

      headerStyle:{
        backgroundColor:'#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight: 'bold'
      }


    }}
    >
      <MapStack.Screen name="MapScreen" component={MapScreen} options={{

        headerLeft: ()=>(
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#009387" onPress={()=>{
            navigation.openDrawer();
            }}></Icon.Button>
        )

          }
       }
       />
    </MapStack.Navigator>
  );
