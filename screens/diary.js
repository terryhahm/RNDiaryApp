import React, {useState, useEffect} from 'react';

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
          height={0.4}
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
          <View style={styles.Btop}>
            <View style={styles.Bcontainer}>
               <View backgroundColor="#FFEBEE" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFCDD2" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#EF9A9A" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#E57373" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#EF5350" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#F44336" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#E53935" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#D32F2F" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#C62828" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#B71C1C" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FF8A80" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FF5252" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FF1744" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#D50000" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>
            <View style={styles.Bcontainer}>
               <View backgroundColor="#FCE4EC" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#F8BBD0" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#F48FB1" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#F06292" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#EC407A" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#E91E63" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#D81B60" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#C2185B" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#AD1457" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#880E4F" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FF80AB" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FF4081" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#F50057" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#C51162" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>

            <View style={styles.Bcontainer}>
               <View backgroundColor="#F3E5F5" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#E1BEE7" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#CE93D8" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#BA68C8" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#AB47BC" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#9C27B0" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#8E24AA" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#7B1FA2" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#6A1B9A" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#4A148C" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#EA80FC" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#E040FB" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#D500F9" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#AA00FF" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>
            <View style={styles.Bcontainer}>
               <View backgroundColor="#EDE7F6" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#D1C4E9" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#B39DDB" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#9575CD" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#7E57C2" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#673AB7" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#5E35B1" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#512DA8" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#4527A0" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#311B92" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#B388FF" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#7C4DFF" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#651FFF" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#6200EA" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>
            <View style={styles.Bcontainer}>
               <View backgroundColor="#E8EAF6" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#C5CAE9" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#9FA8DA" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#7986CB" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#5C6BC0" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#3F51B5" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#3949AB" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#303F9F" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#283593" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#1A237E" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#8C9EFF" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#536DFE" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#3D5AFE" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#304FFE" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>
            <View style={styles.Bcontainer}>
               <View backgroundColor="#E3F2FD" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#BBDEFB" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#90CAF9" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#64B5F6" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#42A5F5" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#2196F3" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#1E88E5" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#1976D2" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#1565C0" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#0D47A1" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#82B1FF" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#448AFF" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#2979FF" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#2962FF" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>
            <View style={styles.Bcontainer}>
               <View backgroundColor="#E1F5FE" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#B3E5FC" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#81D4FA" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#4FC3F7" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#29B6F6" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#03A9F4" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#039BE5" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#0288D1" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#0277BD" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#01579B" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#80D8FF" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#40C4FF" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#00B0FF" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#0091EA" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>
            <View style={styles.Bcontainer}>
               <View backgroundColor="#E0F7FA" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#B2EBF2" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#80DEEA" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#4DD0E1" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#26C6DA" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#00BCD4" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#00ACC1" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#0097A7" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#00838F" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#006064" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#84FFFF" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#18FFFF" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#00E5FF" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#00B8D4" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>
            <View style={styles.Bcontainer}>
               <View backgroundColor="#E0F2F1" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#B2DFDB" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#80CBC4" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#4DB6AC" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#26A69A" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#009688" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#00897B" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#00796B" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#00695C" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#004D40" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#A7FFEB" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#64FFDA" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#1DE9B6" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#00BFA5" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>
            <View style={styles.Bcontainer}>
               <View backgroundColor="#E8F5E9" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#C8E6C9" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#A5D6A7" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#81C784" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#66BB6A" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#4CAF50" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#43A047" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#388E3C" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#2E7D32" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#1B5E20" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#B9F6CA" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#69F0AE" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#00E676" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#00C853" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>
            <View style={styles.Bcontainer}>
               <View backgroundColor="#F1F8E9" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#DCEDC8" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#C5E1A5" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#AED581" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#9CCC65" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#8BC34A" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#7CB342" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#689F38" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#558B2F" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#33691E" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#CCFF90" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#B2FF59" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#76FF03" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#64DD17" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>
            <View style={styles.Bcontainer}>
               <View backgroundColor="#F9FBE7" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#F0F4C3" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#E6EE9C" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#DCE775" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#D4E157" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#CDDC39" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#C0CA33" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#AFB42B" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#9E9D24" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#827717" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#F4FF81" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#EEFF41" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#C6FF00" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#AEEA00" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>
            <View style={styles.Bcontainer}>
               <View backgroundColor="#FFFDE7" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFF9C4" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#FFF59D" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFF176" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFEE58" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFEB3B" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FDD835" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FBC02D" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#F9A825" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#F57F17" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFFF8D" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFFF00" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFEA00" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFD600" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>
            <View style={styles.Bcontainer}>
               <View backgroundColor="#FFF8E1" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFECB3" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#FFE082" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFD54F" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFCA28" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFC107" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFB300" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFA000" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FF8F00" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FF6F00" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFE57F" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFD740" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFC400" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFAB00" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>
            <View style={styles.Bcontainer}>
               <View backgroundColor="#FFF3E0" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFE0B2" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#FFCC80" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFB74D" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFA726" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FF9800" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FB8C00" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#F57C00" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#EF6C00" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#E65100" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFD180" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFAB40" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FF9100" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FF6D00" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>
            <View style={styles.Bcontainer}>
               <View backgroundColor="#FBE9E7" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FFCCBC" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#FFAB91" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FF8A65" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FF7043" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FF5722" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#F4511E" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#E64A19" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#D84315" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#BF360C" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FF9E80" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FF6E40" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#FF3D00" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#DD2C00" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>
            <View style={styles.Bcontainer}>
               <View backgroundColor="#EFEBE9" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#D7CCC8" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#BCAAA4" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#A1887F" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#8D6E63" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#795548" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#6D4C41" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#5D4037" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#4E342E" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#3E2723" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#38231F" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#301D1A" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#281715" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#1B0E0C" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>
            <View style={styles.Bcontainer}>
               <View backgroundColor="#FAFAFA" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#F5F5F5" style={styles.BbuttonContainer}>
               <Button title=" "/>
              </View>
              <View backgroundColor="#EEEEEE" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#E0E0E0" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#BDBDBD" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#9E9E9E" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#757575" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#616161" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#424242" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#212121" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#1D1D1D" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#181818" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#141414" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
              <View backgroundColor="#0B0B0B" style={styles.BbuttonContainer}>
                <Button title=" "/>
              </View>
            </View>
          </View>


        </ModalContent>
        </Modal>
      </View>

    );
}

const styles = StyleSheet.create({
  Btop: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
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
