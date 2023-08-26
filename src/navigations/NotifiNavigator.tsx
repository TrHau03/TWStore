import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants';
import Notification from '../screens/Notification';

import Offer from '../screens/Offer';
import Activity from '../screens/Activity';
import Categori_Detail from '../screens/Categori_Detail';
const Stack = createStackNavigator();
const NotifiNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      //initialRouteName={ROUTES.LOGIN}
    >
      <Stack.Screen name={ROUTES.NOTIFICATION} component={Notification} />
      <Stack.Screen name={ROUTES.OFFER} component={Offer} />
      <Stack.Screen name={ROUTES.ACTIVITY} component={Activity} />
    </Stack.Navigator>
  )
}

export default NotifiNavigator

const styles = StyleSheet.create({})