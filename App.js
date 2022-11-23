import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';

import { useState } from 'react';
import AppLoading from 'expo-app-loading';

import Navigator from './routes/homeStack';

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // if(fontsLoaded){
  //   return (
  //     <Navigator />
  //   );

  // } else {
  //   return (
  //     <AppLoading 
  //       startAsync={getFonts}
  //       onFinish={()=> setFontsLoaded(true)}
  //       onError={(error)=> console.log(error.message)}
  //     />
  //   )
  // }

  return (
    <Navigator />
  );
}
