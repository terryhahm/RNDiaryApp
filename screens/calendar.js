import React, {useState, useEffect, useLayoutEffect} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Dimensions, Button, Switch } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const numDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


function Calendar({ navigation }) {

    const [date, setDate] = useState( new Date().getDate() )
    const [month, setMonth] = useState( new Date().getMonth() )
    const [year, setYear] = useState( new Date().getFullYear() )
    const [calendar, setCalendar] = useState( [] );
    const swipeConfig = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 50
    };

    // When user click another date, change the date state
    function onDatePress( newDate ) {

        // Regex for positive integer
        var regex = /^\d+$/; 

        // Navigate to diary screen only if clicked text is date
        if( regex.test( newDate ) ){
            navigation.navigate('Diary', {
                passed_date: newDate,
                passed_month: month,
                passed_year: year
            });
        }
        return
    }

    // Generate calendar according to Year, Month
    function generateCalendar() {
        // Matrix for calendar
        var matrix = [];

        // First row of calendar : Day Indicator
        matrix[0] = days;
        
        // Get calendar information for current date (Today OR Selected Date)
        var firstDay = new Date(year, month, 1).getDay();
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

    // When swipe from right to left, go to next month
    function onSwipeLeft(gestureState) {
        // If current month is December, increase year by 1 and set month to January
        if( month == 11 ) {
            setYear( year + 1)
            setMonth( 0 )
        }
        // Else increase month by 1
        else {
            setMonth( month + 1)
        }
    }

    // When swipe from left to right, go to previous month
    function onSwipeRight(gestureState) {
        // If current month is January, decrease year by 1 and set month to December
        if( month == 0 ) {
            setYear( year - 1)
            setMonth( 11 )
        }
        // Else decrease month by 1
        else {
            setMonth( month - 1)
        }
    }
     
    // Re-render when state 'month' changes by clicking with newly generated calendar 
    useEffect( () => {
        // render calendar
        setCalendar( generateCalendar() )
        // Add button for changhing months on header
        navigation.setOptions({
            headerStyle: {
                // Remove bottom line of header
                shadowColor: 'transparent',
                backgroundColor: 'tomato'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            title: months[month] + ' ' + year,
        });
    }, [month])
    
    return (
        <GestureRecognizer
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}
            config={swipeConfig}
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}>
            <View
                style={{ flex: 7, flexDirection: 'column'}}
                >
                { calendar.map((row, rowIndex) => {
                    var rowItems = row.map((item, colIndex) => {
                        return (

                            <TouchableOpacity
                                key={colIndex}
                                style={{
                                    flex: 1,
                                    width: width / 7,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 15,
                                }}
                                onPress={() => onDatePress(item)}>
                                <Text
                                    style={{
                                        color: colIndex == 0 ? '#a00' : '#000',
                                        fontWeight: (item == date && month == new Date().getMonth() && year == new Date().getFullYear()) ? 'bold': 'normal',
                                        fontSize: 18,
                                    }}>
                                    {item != -1 ? item.toString() : ' '}
                                </Text>
                            </TouchableOpacity>
                        );
                    });
                    return (
                        <View
                            key={rowIndex}
                            style={{
                                flex: 7,
                                height: height / 7,
                                flexDirection: 'row',
                                padding: 5,
                                justifyContent: 'space-around',
                                alignItems: 'center',
                            }}>
                            {rowItems}
                        </View>
                    );
                }) }
            </View>
        </GestureRecognizer>
    )
}

export default Calendar;