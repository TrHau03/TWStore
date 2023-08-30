
import { configStack } from '../Root/RootStack';
import { RootStackScreenExplore } from '../Root/RootStackExplore';
import { RootStack } from './Props';




const ExploreNavigation = () => {

    return <RootStack.Navigator initialRouteName='ExploreScreen' screenOptions={({ route }) => configStack(route)}>
        {RootStackScreenExplore().map((item: any) => {
            return <RootStack.Screen key={item.id} name={item.name} component={item.component} options={item.options} />
        })}
    </RootStack.Navigator>
}


export default ExploreNavigation
