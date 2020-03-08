import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const numDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function Calendar({ navigation }) {

    // By Default, highlight Today
    const [date, setDate] = useState( new Date().getDate() )
    const [month, setMonth] = useState( new Date().getMonth() + 1 )
    const [year, setYear] = useState( new Date().getFullYear() )
    const [calendar, setCalendar] = useState( [] );

    // When user click another date, change the date state
    function onDatePress( newDate ) {
        navigation.navigate('Diary', {
            passed_date: newDate,
            passed_month: month,
            passed_year: year
        });
    }

    function onNextMonthPress() {

    }

    function onPrevMonthPress() {

    }

    function generateCalendar() {

        // Matrix for calendar
        var matrix = [];

        // First row of calendar : Day Indicator
        matrix[0] = days;
        
        // Get calendar information for current date (Today OR Selected Date)
        var firstDay = new Date(year, month - 1, 1);
        var maxDays = numDays[month];
        // Change February's number of days according to leap year
        if (month == 1) { 
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                maxDays += 1;
            }
        }

        // Set up calendar
        var counter = 1;
        for (var row = 1; row < 7; row++) {
            matrix[row] = [];
            for (var col = 0; col < 7; col++) {
                matrix[row][col] = -1;
                if (row == 1 && col >= firstDay) {
                    // Fill in rows only after the first day of the month
                    matrix[row][col] = counter++;
                } 
                else if (row > 1 && counter <= maxDays) {
                    // Fill in rows only if the counter's not greater than
                    // the number of days in the month
                    matrix[row][col] = counter++;
                }
            }
        }
        
        return matrix;
       
    }

    // Re-render when state 'date' changes by clicking with newly generated calendar 
    useEffect( () => {
        setCalendar( generateCalendar() )
    }, [date])

    return (
        <View>
            { calendar.map((row, rowIndex) => {
                var rowItems = row.map((item, colIndex) => {
                    return (
                        <Text
                            key={colIndex}
                            style={{
                                flex: 1,
                                height: 24,
                                textAlign: 'center',
                                // Highlight header
                                backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
                                // Highlight Sundays
                                color: colIndex == 0 ? '#a00' : '#000',
                                // Highlight current date
                                fontWeight: item == date
                                                    ? 'bold': 'normal'
                            }}
                            onPress={() => onDatePress(item)} >
                            {item != -1 ? item : ''}
                        </Text>
                    );
                });
                return (
                    <View
                        key={rowIndex}
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            padding: 15,
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}>
                        {rowItems}
                    </View>
                );
            }) }
        </View>
    )
}

export default Calendar;