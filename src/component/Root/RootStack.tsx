// import { uid } from 'uid';
import { StackNavigationOptions } from '@react-navigation/stack';
import { AnimationConfig } from '../constants/animationConfig';


export const configStack: any = () => {
    return {
        headerShown: false,
        transitionSpec: {
            open: AnimationConfig,
            close: AnimationConfig,
        },
        animation: 'slide_from_right'
    }
}