
import { configStack } from '../Root/RootStack';
import { RootStackScreenOffer } from '../Root/RootStackOffer';
import { RootStack } from './Props';




const OfferNavigation = () => {

    return <RootStack.Navigator initialRouteName='OfferScreen' screenOptions={({ route }) => configStack(route)}>
        {RootStackScreenOffer().map((item: any) => {
            return <RootStack.Screen key={item.id} name={item.name} component={item.component} options={item.options} />
        })}
    </RootStack.Navigator>
}


export default OfferNavigation
