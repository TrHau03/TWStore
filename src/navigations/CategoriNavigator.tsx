import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants';
import Notification from '../screens/Notification';

import Offer from '../screens/Offer';
import Activity from '../screens/Activity';
import Categori_Detail from '../screens/Categori_Detail';
import Explore from '../screens/Explore';
import ShortBy from '../screens/ShortBy';
import Filter from '../screens/Filter';
const Stack = createStackNavigator();
const CategoriNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      //initialRouteName={ROUTES.LOGIN}
    >
      <Stack.Screen name={ROUTES.EXPLORENAVIGATOR} component={Explore} />
      <Stack.Screen name={ROUTES.CATEGORINAVIGATOR} component={Categori_Detail} />
      <Stack.Screen name={ROUTES.SHORTBY} component={ShortBy} />
      <Stack.Screen name={ROUTES.FILTER} component={Filter} />
    
    </Stack.Navigator>
  )
}

export default CategoriNavigator

const styles = StyleSheet.create({})