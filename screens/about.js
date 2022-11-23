import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
  return (
    <View style={styles.container}>
        <Text>About Screen</Text>
    </View>
  );
}

const styles = globalStyles;