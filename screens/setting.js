import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, FlatList, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Setting() {
    return (
        <View>
            <FlatList
                data={[
                    {key: 'About'},
                    {key: 'Notices'},
                    {key: 'Version'},
                    {key: 'Privacy'},
                    {key: 'Notifications'},
                    {key: 'Display'},
                    {key: 'Support'},
                ]}
                renderItem={ ({item}) => 
                <TouchableOpacity>
                    <Text style={styles.item}>
                        {item.key}
                    </Text>
                </TouchableOpacity>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
  

export default Setting