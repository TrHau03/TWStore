import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootBottomTab, configTab } from './RootTab/RootTab';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const Tab = createBottomTabNavigator();


const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={({ route }: any) => configTab(route)}>
      {
        RootBottomTab().map((item, index) => <Tab.Screen key={item.id} name={item.name} component={item.component} options={item.option} />)
      }
    </Tab.Navigator>

  );
};

export default BottomTab;


