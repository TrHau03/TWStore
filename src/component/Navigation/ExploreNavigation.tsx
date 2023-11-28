import React from 'react';
import { configStack } from '../Root/RootStack';
import { RootStackScreenExplore } from '../Root/RootStackExplore';
import { RootStack } from './Props';

const ExploreNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='ExploreScreen' screenOptions={({ route }:any) => configStack(route)}>
            {RootStackScreenExplore().map((item: any) => {
                return <Stack.Screen key={item.id} name={item.name} component={item.component} options={item.options} />
            })}
        </Stack.Navigator>
    );
}

export default ExploreNavigation;