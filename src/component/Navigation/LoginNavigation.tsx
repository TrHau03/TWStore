import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stack } from './Props';
import { RootStackScreenLogin } from '../Root/RootStackLogin';
import { configStack } from '../Root/RootStack';




const LoginNavigation = () => {
    console.log('check');

    return <Stack.Navigator initialRouteName='LoginScreen' screenOptions={({ route }) => configStack(route)}>
        {RootStackScreenLogin().map((item: any) => {
            return <Stack.Screen key={item.id} name={item.name} component={item.component} options={item.options} />
        })}
    </Stack.Navigator>
}


export default LoginNavigation
