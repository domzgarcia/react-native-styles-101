
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
    const [people, setPeople] = useState([
        { name: 'Domz',   id: '0' },
        { name: 'shaun',  id: '1' },
        { name: 'yoshi',  id: '2' },
        { name: 'mario',  id: '3' },
        { name: 'luigi',  id: '4' },
        { name: 'toad',   id: '5' },
        { name: 'bowser', id: '6' },
        { name: 'peach',  id: '7' }
    ])
  return (
    <View style={styles.container}> 
    {/* FlatList only renders within the viewport - optimized */}
    <FlatList 
        keyExtractor={(item) => item.id }
        numColumns={2}
        data={people}
        renderItem={({item}) => (
            <Text style={styles.item}>{item.name}</Text>
        )}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  item: {
    marginTop: 30,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 30,

    marginHorizontal: 10,
    marginTop: 24,
  }
});