import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DiaryScreen from '../screens/diary';

const HomeStack = createStackNavigator();

function HomeStackNavigator() {

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Diary" component={DiaryScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;