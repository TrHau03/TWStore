import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, ROUTES} from '../constants';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Notification from '../screens/Notification';
import Favorite from '../screens/Favorite';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTabBar from '../component/CustomTabBar';
import CustomTabBarButton from '../component/CustomTabBarButton';
import NotifiNavigator from './NotifiNavigator';
import Categori_Detail from '../screens/Categori_Detail';
import CategoriNavigator from './CategoriNavigator';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({color, focused}) => {
          let iconName: any;

          if (route.name === ROUTES.HOME_BOTTOMTAB) {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === ROUTES.CATEGORINAVIGATOR) {
            iconName = focused ? 'search-sharp' : 'search-outline';
          } else if (route.name === ROUTES.NOTINAVIGATOR) {
            iconName = focused
              ? 'notifications-sharp'
              : 'notifications-outline';
          } else if (route.name === ROUTES.FAVORITE) {
            iconName = focused ? 'heart-sharp' : 'heart-outline';
          }
          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen 
        name={ROUTES.HOME_BOTTOMTAB} 
        component={Home} 
    />
      <Tab.Screen 
        name={ROUTES.CATEGORINAVIGATOR} 
        component={CategoriNavigator} 
        />
      <Tab.Screen 
        name={ROUTES.NOTINAVIGATOR} 
        component={NotifiNavigator} 
        />
      <Tab.Screen 
        name={ROUTES.FAVORITE} 
        component={Favorite} 
        />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle:{
    position:'absolute',
    borderTopWidth:0,
    
    right:10,
    left:10,
    height:55,
    borderRadius: 20
  }
});
