import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



function Diary({ route, navigation }) {

    const [date, setDate] = useState( new Date().getDate() )
    const [month, setMonth] = useState( new Date().getMonth() + 1 )
    const [year, setYear] = useState( new Date().getFullYear() )

    useEffect(() => {
        if (route.params?.passed_date) {
            setDate( route.params.passed_date )

          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
        }
    }, [route.params?.passed_date]);



    return (
        <View>
            <Text>
                Today is {date}-{month}-{year}
            </Text>
        </View>
    )
}

export default Diary