/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CalendarScreen from '../screens/calendar';
import DiaryScreen from '../screens/diary';

const CalendarStack = createStackNavigator();

function CalendarStackNavigator() {

  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen name="Calendar" component={CalendarScreen} />
      <CalendarStack.Screen name="Diary" component={DiaryScreen} />
    </CalendarStack.Navigator>
  );
}

export default CalendarStackNavigator;