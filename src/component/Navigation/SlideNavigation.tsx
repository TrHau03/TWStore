import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackScreenLogin, RootStackScreenSlide, configStack } from '../Root/RootStack';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SlideScreen from '../../screens/SlideScreen';

const RootStack = createStackNavigator();



const SlideNavigation = () => {
    return <RootStack.Navigator initialRouteName='SlideScreen' screenOptions={({ route }) => configStack(route)}>
        {RootStackScreenSlide().map((item: any) => {
            return <RootStack.Screen key={item.id} name={item.name} component={item.component} options={item.options} />
        })}
    </RootStack.Navigator>
}


export default SlideNavigation
