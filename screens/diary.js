import React, {useState, useEffect} from 'react';
import Slider from '@react-native-community/slider';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  TextInput,
  Button,
  View,

} from 'react-native';

import Modal, {
   ModalTitle,
   ModalContent,
   ModalFooter,
   ModalButton
 } from 'react-native-modals';

 import Color from 'react-native-material-color';

import {
  SlidersColorPicker,
  HueGradient,
  SaturationGradient,
  LightnessGradient,
  HueSlider,
  SaturationSlider,
  LightnessSlider
} from 'react-native-color';


function Diary({ route, navigation }) {

    const [date, setDate] = useState( new Date().getDate() )
    const [month, setMonth] = useState( new Date().getMonth() + 1 )
    const [year, setYear] = useState( new Date().getFullYear() )
    const [value, onChangeText] = React.useState('일기장 쓰는데, 리밋은 ~ 총 300자, 10줄');
    const [modalDisplay, onModalButtonPress] = useState(false)
    const [defaultRGB, OnSliderChange] = useState({
      R: "00",
      G: "00",
      B: "00",
    })
    const [R, OnRChange] = useState(0)
    const [G, OnGChange] = useState(0)
    const [B, OnBChange] = useState(0)
    const First = 'rgb(255,222,255)'
    const Second = 'rgb(255,222,239)'
    const Third = 'rgb(239,222,255)'
    const Forth = 'rgb(239,239,255)'
    const Fifth = 'rgb(255,239,255)'
    const Sixth = 'rgb(255,255,222)'
    const Seventh = 'rgb(242,222,233)'
    const Eighth = 'rgb(233,245,255)'




    useEffect(() => {
        if (route.params?.passed_date) {
            setDate( route.params.passed_date )

          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
        }
    }, [route.params?.passed_date]);

    function UselessTextInput(props) {
      return (
        <TextInput
          {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
          editable
          maxLength={300}
        />
      );
    }

    function NumberToHex(value)
    {
      if(value < 16)
      {
        return "0"+value.toString(16)
      }
      else {
        return value.toString(16)
      }
    }

    function rgbStringParse(strr)
    {
      m = strr.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
      if( m) {
        // OnRChange(parseInt(m[1],10))
        // OnGChange(parseInt(m[2],10))
        // OnBChange(parseInt(m[3],10))

        m[1] = NumberToHex(parseInt(m[1], 10))
        m[2] = NumberToHex(parseInt(m[2], 10))
        m[3] = NumberToHex(parseInt(m[3], 10))

        OnSliderChange({R:m[1], G:m[2], B:m[3]})

      }
    }

    return (
      <View>
        <Button title="Show modal" onPress={() => onModalButtonPress(!modalDisplay)}></Button>





        <UselessTextInput
          multiline
          numberOfLines={10}
          onChangeText={text => onChangeText(text)}
          value={value}
          style={{
            backgroundColor: '#f0f8ff',
            borderBottomWidth: 1,
            height: 80,
          }}
        />
        <Modal
          width={0.95}
          height={0.5}
          visible={modalDisplay}
          footer={
            <ModalFooter>
              <ModalButton
                text="OK"
                onPress={() => {onModalButtonPress(false)}}
              />
            </ModalFooter>}
          rounded={true}
          modalStyle={{
                      backgroundColor: 'rgba(0,0,0,0.5)',
                    }}
          actionsBordered
          onTouchOutside={() => {
              onModalButtonPress(false);
              }}
        >

        <ModalContent style={{flex:1}}>


          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              flex: 1,
            }}
            >
            <View
              onTouchStart={() => {
                rgbStringParse(First);
                }}
              style={[{backgroundColor: First}, styles.myButton]}/>
            <View
              onTouchStart={() => {
                rgbStringParse(Second);
                }}
              style={[{backgroundColor: Second}, styles.myButton]}/>
            <View
              onTouchStart={() => {
                rgbStringParse(Third);
                }}
              style={[{backgroundColor: Third}, styles.myButton]}/>
            <View
              onTouchStart={() => {
                rgbStringParse(Forth);
                }}
              style={[{backgroundColor: Forth}, styles.myButton]}/>
          </View>

          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              flex: 1,
            }}
            >
            <View
              onTouchStart={() => {
                rgbStringParse(Fifth);
                }}
              style={[{backgroundColor: Fifth}, styles.myButton]}/>
            <View
              onTouchStart={() => {
                rgbStringParse(Sixth);
                }}
              style={[{backgroundColor: Sixth}, styles.myButton]}/>
            <View
              onTouchStart={() => {
                rgbStringParse(Seventh);
                }}
              style={[{backgroundColor: Seventh}, styles.myButton]}/>
            <View
              onTouchStart={() => {
                rgbStringParse(Eighth);
                }}
              style={[{backgroundColor: Eighth}, styles.myButton]}/>
          </View>



          <View
            style={{
              alignItems: 'center',
              }}>
            <View
              style={{
                backgroundColor: '#' + defaultRGB.R + defaultRGB.G + defaultRGB.B,
                height: 80,
                width: "80%"

            }}/>

            <Slider
              style={{
                width: '70%',
                height: 40,
              }}
              value={parseInt(defaultRGB.R, 16)}
              step={1}
              minimumValue={0}
              maximumValue={255}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange={value => OnSliderChange({R: NumberToHex(value), G:defaultRGB.G, B: defaultRGB.B})}

            />

            <Slider
              style={{
                width: '70%',
                height: 40,
              }}
              value={parseInt(defaultRGB.G, 16)}
              step={1}
              minimumValue={0}
              maximumValue={255}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange={value => OnSliderChange({R: defaultRGB.R, G:NumberToHex(value), B:defaultRGB.B})}

            />
            <Slider
              style={{
                width: '70%',
                height: 40,
              }}
              value={parseInt(defaultRGB.B, 16)}
              step={1}
              minimumValue={0}
              maximumValue={255}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange={value => OnSliderChange({R:defaultRGB.R, G:defaultRGB.G, B:NumberToHex(value)})}

            />

          <Text>
            { '#' + defaultRGB.R + defaultRGB.G + defaultRGB.B }
          </Text>


          </View>
        </ModalContent>
        </Modal>
      </View>

    );
}

const styles = StyleSheet.create({
  myButton:{
    padding: 5,
    height: 30,
    width: 30,  //The Width must be the same as the height
    borderRadius:100, //Then Make the Border Radius twice the size of width or Height
    margin: '4%',
  },

  First:{
    backgroundColor: '#ffffff',
  },
  Bcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',

  },
  BbuttonContainer: {
    flex: 1,
  }
});

export default Diary
