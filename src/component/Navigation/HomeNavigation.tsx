
import { fromLeft } from 'react-navigation-transitions';
import { configStack } from '../Root/RootStack';
import { RootStackScreenHome } from '../Root/RootStackHome';
import { RootStack } from './Props';
import * as React from 'react';


const HomeNavigation = () => {

    return <RootStack.Navigator initialRouteName='HomeScreen'  screenOptions={() => configStack()} >
        {RootStackScreenHome().map((item: any) => {
            return <RootStack.Screen key={item.id} name={item.name} component={item.component} options={item.options} />
        })}
    </RootStack.Navigator>
}


export default HomeNavigation
