import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {

const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play game on switch', key: '3' },
]);

const pressHandler = (key) => {
    console.log(key);
    setTodos( prevTodos => {
        return prevTodos.filter( todo => todo.key != key )
    });
}

const submitHandler = (text) => {

    if( text.length > 3 ){
        setTodos( prevTodos => {
            return [
                ...prevTodos,
                { text: text, key: Math.random().toString() }
            ]
        });

    } else {
        // Only runs in Expo, UI is not showing in web view.
        Alert.alert('Oops!', 'Todos must be over 3 characters long', 
        [
            { text: 'Understood' , onPress: () => console.log('confirm') }
        ])
    }
}

  return (
    <>
    {/* <Sandbox /> */}
    
    <TouchableWithoutFeedback onPress={() => {
        console.log('Keyboard has been dismissed');
        Keyboard.dismiss();
    }}>
        
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <AddTodo submitHandler={submitHandler} />
                <View style={styles.list}>
                    <FlatList 
                        data={todos}
                        renderItem={ ( {item} ) => (
                            <TodoItem item={item}  pressHandler={pressHandler} /> 
                        )}
                    />
                </View>
            </View>
        </View>

    </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});