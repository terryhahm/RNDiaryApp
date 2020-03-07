import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

function Diary() {

    const [date, setDate] = useState({ date : new Date().getDate(), month : new Date().getMonth() + 1, year : new Date().getFullYear() }); 

    return (
        <View>
            <Text>
                Today is {date.year}-{date.month}-{date.date}
            </Text>
        </View>
    )
}

export default Diary