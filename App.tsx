/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import SlideScreen from './src/screens/Login/SlideScreen';
import SplashSreen from './src/screens/Login/SplashSreen';
import LoginNavigation from './src/component/Navigation/LoginNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from './src/component/Navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, PaperProvider } from 'react-native-paper';




function App(): JSX.Element {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      secondaryContainer: 'transparent',
      // Use transparent to disable the little highlighting oval
    },
  };
  const [isLoadding, setIsLoadding] = useState<boolean>(true);
  setTimeout(() => {
    setIsLoadding(false);
  }, 1000);
  return (
    (isLoadding) ?
      <SplashSreen />
      :
      <NavigationContainer >
        <PaperProvider theme={theme}>
          <Navigation />
        </PaperProvider>
      </NavigationContainer>
  );
}


export default App;
