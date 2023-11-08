import { createStackNavigator } from '@react-navigation/stack';
import { RootStack } from './Props';
import { RootStackScreenSlide } from '../Root/RootStackLogin';
import { configStack } from '../Root/RootStack';
import * as React from 'react';




const SlideNavigation = () => {
    return <RootStack.Navigator initialRouteName='SlideScreen' screenOptions={({ route }) => configStack(route)}>
        {RootStackScreenSlide().map((item: any) => {
            return <RootStack.Screen key={item.id} name={item.name} component={item.component} options={item.options} />
        })}
    </RootStack.Navigator>
}


export default SlideNavigation
