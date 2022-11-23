import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
  return (
    <View style={styles.container}>
        <Text style={styles.box1}>one</Text>
        <Text style={styles.box2}>two</Text>
        <Text style={styles.box3}>three</Text>
        <Text style={styles.box4}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // paddingTop: 10,
        // paddingBottom: 10,

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end', // flex-start, flex-end

        padding: 10,
        backgroundColor: '#ddd',
    },
    box1: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10,
    },
    box2: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 20,
    },
    box3: {
        flex: 1,
        backgroundColor: 'coral',
        padding: 30,
    },
    box4: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 40,
    }
})