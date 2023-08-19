import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackScreenLogin, configStack } from '../Root/RootStack';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SlideScreen from '../../screens/SlideScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootStack = createStackNavigator();



const LoginNavigation = () => {
    
    return <NavigationContainer>
        <RootStack.Navigator initialRouteName='LoginScreen' screenOptions={({ route }) => configStack(route)}>
            {RootStackScreenLogin().map((item: any) => {
                return <RootStack.Screen key={item.id} name={item.name} component={item.component} options={item.options} />
            })}
        </RootStack.Navigator>
    </NavigationContainer>
}


export default LoginNavigation
