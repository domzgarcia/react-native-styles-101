import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
    const [people, setPeople] = useState([
        { name: 'shaun', key: '1' },
        { name: 'yoshi', key: '2' },
        { name: 'mario', key: '3' },
        { name: 'luigi', key: '4' },
        { name: 'toad', key: '5' },
        { name: 'bowser', key: '6' }
    ])
  return (
    <View style={styles.container}> 
        <ScrollView>
        { people.map( (item, idx) => {
            return (
                <View key={item.key}>
                    <Text style={styles.item}>{item.name}</Text>
                </View>
            )
        }) }
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    // paddingTop: 40,
    // paddingHorizontal: 20
    
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  item: {
    marginTop: 30,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 30,
  }
});