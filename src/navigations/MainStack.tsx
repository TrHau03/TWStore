import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabBar } from '@react-navigation/bottom-tabs'
import BottomTabNavigator from './BottomTabNavigator'
import { ROUTES } from '../constants'
import { createStackNavigator } from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import CustomTabBar from '../component/CustomTabBar'
import NotifiNavigator from './NotifiNavigator'
import Notification from '../screens/Notification'
import Explore from '../screens/Explore'


const Stack = createStackNavigator();
const MainStack = (props:any)  => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
    >
     <Stack.Screen 
        name={ROUTES.HOME} 
        component={BottomTabNavigator} 
        options={{
          headerShown: false,
        }}  
      />

      <Stack.Screen 
        name={ROUTES.NOTIFICATION} 
        component={Notification} 
        options={{
          headerShown: false,
        }}  
      /> 
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})