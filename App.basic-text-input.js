import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('doms')
  const [age, setAge] = useState(31)

  return (
    <View style={styles.container}>
        <Text style={styles.boldText}>My name is {name}, age of {age}</Text>
        <View style={styles.separator}></View>
        <Text>Enter name:</Text>
        <TextInput style={styles.input} 
            multiline
            placeholder={'e.g. John Doe'}
            onChangeText={ (val) => setName(val) }
        />
        <View style={styles.separator}></View>
        <Text>Enter age:</Text>
        <TextInput style={styles.input}
            keyboardType='numeric'
            onChangeText={ (val) => setAge(val) }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boldText: {
    fontWeight: 'bold',
  },
  separator: {
    height: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8
  }
});


// See TextInput in React Native Documentation

