import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/Header';
import Boxes from './src/Boxes';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Boxes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

