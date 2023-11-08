// import { uid } from 'uid';
import { StackNavigationOptions } from '@react-navigation/stack';
import { fromLeft } from 'react-navigation-transitions';
import { AnimationConfig } from '../constants/animationConfig';


// import SlideScreen from '../../screens/Login/SlideScreen';
// import LoginSreen from '../../screens/Login/LoginSreen';
// import RegisterScreen from '../../screens/Login/RegisterScreen';
// import VerificationScreen from '../../screens/Login/VerificationScreen';
// import OfferScreen from '../../screens/Offer/OfferScreen';
// import CartScreen from '../../screens/Cart/CartScreen';
// import HomeScreen from '../../screens/Home/HomeScreen';
// import PaymentScreen from '../../screens/Account/PaymentScreen';
// import CreditCardScreen from '../../screens/Account/CreditCardScreen';
// import PaypalScreen from '../../screens/Account/PaypalScreen';
// import BankTransferScreen from '../../screens/Account/BankTransferScreen';
// export enum RootStackScreenEnum {
//     SlideScreen = 'SlideScreen',
//     LoginSreen = 'LoginSreen',
//     RegisterScreen = 'RegisterScreen',
//     VerificationScreen = 'VerificationScreen',
//     OfferScreen = 'OfferScreen',
//     CartScreen = 'CartScreen',
//     HomeScreen = 'HomeScreen',
//     PaymentScreen = 'PaymentScreen',
//     CreditCardScreen = 'CreditCardScreen',
//     PaypalScreen = 'PaypalScreen',
//     BankTransferScreen = 'BankTransferScreen'
// }
// export type RootStackParamList = {
//     SlideScreen: undefined,
//     LoginSreen: undefined,
//     RegisterScreen: undefined,
//     VerificationScreen: undefined,
//     OfferScreen: undefined,
//     CartScreen: undefined,
//     HomeScreen: undefined,
//     PaymentScreen: undefined,
//     CreditCardScreen: undefined,
//     PaypalScreen: undefined,
//     BankTransferScreen: undefined
// }
// export const RootStackScreenSlide = () => {
//     const Screen: any = [
//         { id: uid(), name: RootStackScreenEnum.SlideScreen, component: SlideScreen, options: {} },
//     ]
//     return Screen;
// }
// export const RootStackScreenLogin = () => {
//     const Screen: any = [
//         { id: uid(), name: RootStackScreenEnum.LoginSreen, component: LoginSreen, options: {} },
//         { id: uid(), name: RootStackScreenEnum.RegisterScreen, component: RegisterScreen, options: {} },
//         { id: uid(), name: RootStackScreenEnum.VerificationScreen, component: VerificationScreen, options: {} },
//         { id: uid(), name: RootStackScreenEnum.OfferScreen, component: OfferScreen, options: {} },
//         { id: uid(), name: RootStackScreenEnum.CartScreen, component: CartScreen, options: {} },
//         { id: uid(), name: RootStackScreenEnum.HomeScreen, component: HomeScreen, options: {} },
//         { id: uid(), name: RootStackScreenEnum.PaymentScreen, component: PaymentScreen, options: {} },
//         { id: uid(), name: RootStackScreenEnum.CreditCardScreen, component: CreditCardScreen, options: {} },
//         { id: uid(), name: RootStackScreenEnum.PaypalScreen, component: PaypalScreen, options: {} },
//         { id: uid(), name: RootStackScreenEnum.BankTransferScreen, component: BankTransferScreen, options: {} },
//     ]
//     return Screen;
// }
const config = {

}
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