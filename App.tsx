/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import { StyleSheet, View } from 'react-native'; // Import necessary components
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Import Stack Navigator
import Productreviews from './src/screens/Productreviews'; // Import Productreview component
import Productdetail from './src/screens/Productdetail';
import Addcomment from './src/screens/Addcomment';


const Stack = createNativeStackNavigator(); // Create a Stack Navigator

function App(): JSX.Element {
  return (

    <NavigationContainer>
      {/* <Productdetail /> */}
      {/* <Productreviews/> */}
      <Addcomment/>
    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({});

export default App;
