import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails( {navigation} ) {

  const pressHandler = () => {
    navigation.goBack();
    // navigation.push('ReviewDetails')
  }

  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>{ navigation.getParam('title') }</Text>
        <View style={styles.separator}></View>
        <Button
          title='Back to home screen'
          onPress={pressHandler}
        />
    </View>
  );
}

const styles = globalStyles;