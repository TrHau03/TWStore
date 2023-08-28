import { RootStackScreenLogin, RootStackScreenSlide, configStack } from '../Root/RootStack';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();



const SlideNavigation = () => {
    return <RootStack.Navigator initialRouteName='SlideScreen' screenOptions={({ route }) => configStack(route)}>
        {RootStackScreenSlide().map((item: any) => {
            return <RootStack.Screen key={item.id} name={item.name} component={item.component} options={item.options} />
        })}
    </RootStack.Navigator>
}


export default SlideNavigation
