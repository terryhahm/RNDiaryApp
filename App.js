/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DiaryScreen from './screens/diary';
import CalendarScreen from './screens/calendar';
import LoadingScreen from './screens/loading';

const Stack = createStackNavigator();

function App() {
  const [Loaded, setLoaded] = useState( false ); 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { {Loaded} ? (
          <>
            <Stack.Screen name="Diary" component={DiaryScreen} />
            <Stack.Screen name="Calendar" component={CalendarScreen} />
          </>
        ) : (
          <Stack.Screen name="Loading" component={LoadingScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;