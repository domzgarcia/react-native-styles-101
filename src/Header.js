import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class Header extends React.Component {

    render() {
        return (
            <View style={styles.header}>
                <Text>Header Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingTop: 25,
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee'
    }
});