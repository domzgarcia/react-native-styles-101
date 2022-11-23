import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not so "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' }
  ]);


  const pressHandler = () => {
    navigation.navigate('ReviewDetails')
    // navigation.push('ReviewDetails')
  }

  return (
    <View style={styles.container}>
        <FlatList 
          data={reviews}
          renderItem={( {item} ) => (
            <TouchableOpacity onPress={ () => navigation.navigate('ReviewDetails', item) }>
              <Text style={styles.titleText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        /> 

        <View style={styles.separator}></View>
        
        <Button 
          title='Go to review dets'
          onPress={pressHandler}
        />
    </View>
  );
}
const styles = globalStyles;