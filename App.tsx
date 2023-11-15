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
import { Provider } from 'react-redux';
import store from './src/redux/store';
import SearchResult from './src/screens/Explore/SearchResult';




function App(): JSX.Element {
  // const [isLoadding, setIsLoadding] = useState<boolean>(true);
  // setTimeout(() => {
  //   setIsLoadding(false);
  // }, 1000);
  // return (
  //   <Provider store={store}>
  //     {(isLoadding) ? <SplashSreen /> : <NavigationContainer><Navigation/></NavigationContainer>}
  //   </Provider>
  // );
  return(
    <SearchResult/>
  )
}


export default App;
