import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import MyCalendar from '../component/myCalendar';


function Calendar() {
    return (
        <View>
            <MyCalendar />
        </View>
    )
}

export default Calendar;