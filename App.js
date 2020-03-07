/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import DiaryScreen from './screens/diary';
// import CalendarScreen from './screens/calendar';
// import LoadingScreen from './screens/loading';
// import SettingScreen from './screens/setting';

import AppNavigator from './navigator/appNavigator';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function wait(ms) {
//   return new Promise(function(resolve, reject){
//     setTimeout( function(){
//       resolve();
//     }, ms);
//   });
// }

function App() {
//   const [Loaded, setLoaded] = useState( false ); 

//   useEffect(() => {

//     async function temp() {
//       await wait( 5000 )
//       setLoaded( true )
//     }

//     temp()

//   })

  // useEffect(() => {
  //   const asyncFunctionData = async () => {
  //     try {
  //       const storageData = await AsyncStorage.getItem('key_data');
  //       setData(JSON.parse(storageData));
  //     } catch (e) {}
  //   }
  //   asyncFunctionData();
  //  }, [setData]);

  // useEffect(() => {
  //   async function getStorage() {
  //     // useEffect에서 async를 하면 sideEffect가 발생하는걸 해결함
  //     if (await AsyncStorage.getItem("email")) {
  //       let LocalEmail = await AsyncStorage.getItem("email");
  //       // console.log(LocalEmail);
  //       setEmail(LocalEmail);
  //     }
  //     if (await AsyncStorage.getItem("password")) {
  //       let LocalPassword = await AsyncStorage.getItem("password");
  //       // console.log(LocalPassword);
  //       setPassword(LocalPassword);
  //     }
  //   }
  //   getStorage();
  // }, []);

  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}

export default App;