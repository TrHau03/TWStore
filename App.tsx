import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import MainStack from './src/navigations/MainStack';
import { NavigationContainer } from '@react-navigation/native'

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({});

export default App;
