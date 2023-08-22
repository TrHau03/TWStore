import CartScreen from "../../screens/CartScreen";
import LoginSreen from "../../screens/LoginSreen";
import OfferScreen from "../../screens/OfferScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import SlideScreen from "../../screens/SlideScreen";
import VerificationScreen from "../../screens/VerificationScreen";
import { uid } from 'uid';
export enum RootStackScreenEnum {
    SlideScreen = 'SlideScreen',
    LoginSreen = 'LoginSreen',
    RegisterScreen = 'RegisterScreen',
    VerificationScreen = 'VerificationScreen',
    OfferScreen = 'OfferScreen',
    CartScreen='CartScreen'
}
export type RootStackParamList = {
    SlideScreen: undefined,
    LoginSreen: undefined,
    RegisterScreen: undefined,
    VerificationScreen: undefined,
    OfferScreen: undefined,
    CartScreen: undefined
}
export const RootStackScreenLogin = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnum.LoginSreen, component: LoginSreen, options: {} },
        { id: uid(), name: RootStackScreenEnum.RegisterScreen, component: RegisterScreen, options: {} },
        { id: uid(), name: RootStackScreenEnum.VerificationScreen, component: VerificationScreen, options: {} },
        { id: uid(), name: RootStackScreenEnum.OfferScreen, component: OfferScreen, options: {} },
        { id: uid(), name: RootStackScreenEnum.CartScreen, component: CartScreen, options: {} },
    ]
    return Screen;
}
export const RootStackScreenSlide = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnum.SlideScreen, component: SlideScreen, options: {} },
    ]
    return Screen;
}
export const configStack = (route: any) => {
    return {
        headerShown: false,
    }
}