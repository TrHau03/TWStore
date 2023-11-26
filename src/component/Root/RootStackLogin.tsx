
import { uid } from 'uid';
import LoginSreen from '../../screens/Login/LoginSreen';
import RegisterScreen from '../../screens/Login/RegisterScreen';
import VerificationScreen from '../../screens/Login/VerificationScreen';
import SlideScreen from '../../screens/Login/SlideScreen';

export enum RootStackScreenEnumLogin {
    SlideScreen = 'SlideScreen',
    LoginSreen = 'LoginSreen',
    RegisterScreen = 'RegisterScreen',
    VerificationScreen = 'VerificationScreen',
}
export type RootStackParamListLogin = {
    SlideScreen: undefined,
    LoginSreen: undefined,
    RegisterScreen: undefined,
    VerificationScreen: undefined,
}


export const RootStackScreenLogin = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumLogin.LoginSreen, component: LoginSreen, options: {} },
        { id: uid(), name: RootStackScreenEnumLogin.RegisterScreen, component: RegisterScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumLogin.VerificationScreen, component: VerificationScreen, options: {} },

    ]
    return Screen;
}
export const RootStackScreenSlide = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumLogin.SlideScreen, component: SlideScreen, options: {} },
    ]
    return Screen;
}