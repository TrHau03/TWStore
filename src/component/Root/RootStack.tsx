import BankTransferScreen from "../../screens/BankTransferScreen";
import CartScreen from "../../screens/CartScreen";
import CreditCardScreen from "../../screens/CreditCardScreen";
import HomeScreen from "../../screens/HomeScreen";
import LoginSreen from "../../screens/LoginSreen";
import OfferScreen from "../../screens/OfferScreen";
import PaymentScreen from "../../screens/PaymentScreen";
import PaypalScreen from "../../screens/PaypalScreen";
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
    CartScreen='CartScreen',
    HomeScreen = 'HomeScreen',
    PaymentScreen = 'PaymentScreen',
    CreditCardScreen = 'CreditCardScreen',
    PaypalScreen = 'PaypalScreen',
    BankTransferScreen = 'BankTransferScreen'
}
export type RootStackParamList = {
    SlideScreen: undefined,
    LoginSreen: undefined,
    RegisterScreen: undefined,
    VerificationScreen: undefined,
    OfferScreen: undefined,
    CartScreen: undefined,
    HomeScreen: undefined,
    PaymentScreen: undefined,
    CreditCardScreen: undefined,
    PaypalScreen: undefined,
    BankTransferScreen: undefined
}
export const RootStackScreenLogin = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnum.LoginSreen, component: LoginSreen, options: {} },
        { id: uid(), name: RootStackScreenEnum.RegisterScreen, component: RegisterScreen, options: {} },
        { id: uid(), name: RootStackScreenEnum.VerificationScreen, component: VerificationScreen, options: {} },
        { id: uid(), name: RootStackScreenEnum.OfferScreen, component: OfferScreen, options: {} },
        { id: uid(), name: RootStackScreenEnum.CartScreen, component: CartScreen, options: {} },
        { id: uid(), name: RootStackScreenEnum.HomeScreen, component: HomeScreen, options: {} },
        { id: uid(), name: RootStackScreenEnum.PaymentScreen, component: PaymentScreen, options: {} },
        { id: uid(), name: RootStackScreenEnum.CreditCardScreen, component: CreditCardScreen, options: {} },
        { id: uid(), name: RootStackScreenEnum.PaypalScreen, component: PaypalScreen, options: {} },
        { id: uid(), name: RootStackScreenEnum.BankTransferScreen, component: BankTransferScreen, options: {} },
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