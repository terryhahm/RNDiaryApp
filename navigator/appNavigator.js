/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from '../navigator/homeStackNavigator';
import CalendarStackScreen from '../navigator/calendarStackNavigator';
import SettingStackScreen from '../navigator/settingStackNavigator';
import LoadingScreen from '../screens/loading';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function wait(ms) {
  return new Promise(function(resolve, reject){
    setTimeout( function(){
      resolve();
    }, ms);
  });
}

function AppNavigator() {
  const [Loaded, setLoaded] = useState( false ); 

  useEffect(() => {

    async function temp() {
      await wait( 1000 )
      setLoaded( true )
    }

    temp()

  })

  return (
    <>
        { Loaded ? (
          <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'ios-book';
                    } else if (route.name === 'Setting') {
                        iconName = 'ios-settings';
                    } else if (route.name == 'Calendar') {
                        iconName = 'ios-calendar';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />

                    // https://stackoverflow.com/questions/38713240/unrecognized-font-family-ionicons?noredirect=1&lq=1
                    // Refer above if getting error 'Unrecognized font family Ionicons'
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }} 
          >
            <Tab.Screen name="Calendar" component={CalendarStackScreen} />
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Setting" component={SettingStackScreen} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Loading" component={LoadingScreen} />
          </Stack.Navigator>
        )}
    </>
  );
}

export default AppNavigator;