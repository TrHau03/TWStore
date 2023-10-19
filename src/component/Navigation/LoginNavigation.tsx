import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStack } from './Props';
import { RootStackScreenLogin } from '../Root/RootStackLogin';
import { configStack } from '../Root/RootStack';
import * as React from 'react';




const LoginNavigation = () => {
    console.log('check');

    return <RootStack.Navigator initialRouteName='LoginScreen' screenOptions={({ route }) => configStack(route)}>
        {RootStackScreenLogin().map((item: any) => {
            return <RootStack.Screen key={item.id} name={item.name} component={item.component} options={item.options} />
        })}
    </RootStack.Navigator>
}


export default LoginNavigation
