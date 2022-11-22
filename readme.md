React Redux Tutorial

https://www.youtube.com/watch?v=BtJoy4G3N8U&t=551s

npx expo start

The Net Ninja
https://www.youtube.com/watch?v=c9Sg9jDitm8&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=5


```
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});