/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import SlideScreen from './src/screens/SlideScreen';
import SplashSreen from './src/screens/SplashSreen';
import LoginNavigation from './src/component/Navigation/LoginNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from './src/component/Navigation/Navigation';




function App(): JSX.Element {
  const [isLoadding, setIsLoadding] = useState<boolean>(true);
  setTimeout(() => {
    setIsLoadding(false);
  }, 1000);
  return (
    (isLoadding) ? <SplashSreen /> : <Navigation />
  );
}


export default App;
