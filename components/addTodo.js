import React, { useState } from "react";
import { StyleSheet, Text, Button, View, TextInput } from "react-native";

const AddTodo = ({ submitHandler }) => {
    const [text, setText] = useState('');

    const changeHandler = (value) => {
        setText(value)
    };

    return (
        <View>
            <TextInput
                style={styles.input} 
                placeholder={'new todo...'}
                onChangeText={changeHandler}
            />
            <Button 
                onPress={() => submitHandler(text) }
                title={'Add Todo'}
                color={'coral'}
            />
        </View>
    )
}

export default AddTodo;

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});