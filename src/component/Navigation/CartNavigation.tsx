
import { configStack } from '../Root/RootStack';
import { RootStackScreenCart } from '../Root/RootStackCart';
import { RootStack } from './Props';
import * as React from 'react';




const CartNavigation = () => {

    return <RootStack.Navigator initialRouteName='CartScreen' screenOptions={({ route }) => configStack(route)}>
        {RootStackScreenCart().map((item: any) => {
            return <RootStack.Screen key={item.id} name={item.name} component={item.component} options={item.options} />
        })}
    </RootStack.Navigator>
}


export default CartNavigation
