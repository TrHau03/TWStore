import { configStack } from '../Root/RootStack';
import { RootStackScreenAccount } from '../Root/RootStackAccount';
import { RootStack } from './Props';
import * as React from 'react';
import { useIsFocused } from '@react-navigation/native'; // Import useIsFocused

const AccountNavigation = () => {
  const isFocused = useIsFocused(); 

  return (
    <RootStack.Navigator initialRouteName='LoginScreen' screenOptions={({ route }) => configStack(route)}>
      {RootStackScreenAccount().map((item: any) => {
        return (
          <RootStack.Screen
            key={item.id}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        );
      })}
    </RootStack.Navigator>
  );
};

export default AccountNavigation;
