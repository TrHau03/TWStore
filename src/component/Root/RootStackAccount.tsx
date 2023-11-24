
import { uid } from 'uid';


import PaymentScreen from '../../screens/Account/PaymentScreen';
import CreditCardScreen from '../../screens/Account/CreditCardScreen';
import PaypalScreen from '../../screens/Account/PaypalScreen';
import BankTransferScreen from '../../screens/Account/BankTransferScreen';
import ProfileScreen from '../../screens/Account/Profile';
import { FadeAccountScreen } from '../BottomNavigation/AniScreenBottomTab';
import OrderScreen from '../../screens/Account/OrderScreen';
import Order_Detail from '../../screens/Account/Order_Detail';


export enum RootStackScreenEnumAccount {
    AccountScreen = 'AccountScreen',
    ProfileScreen = 'ProfileScreen',
    PaymentScreen = 'PaymentScreen',
    CreditCardScreen = 'CreditCardScreen',
    PaypalScreen = 'PaypalScreen',
    OrderScreen = 'OrderScreen',
    Order_Detail = 'Order_Detail'
}

export type RootStackParamListAccount = {
    AccountScreen: undefined,
    ProfileScreen: undefined,
    PaymentScreen: undefined,
    CreditCardScreen: undefined,
    PaypalScreen: undefined,
    OrderScreen: undefined,
    Order_Detail: undefined
}


export const RootStackScreenAccount = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumAccount.AccountScreen, component: FadeAccountScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.ProfileScreen, component: ProfileScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.PaymentScreen, component: PaymentScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.CreditCardScreen, component: CreditCardScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.PaypalScreen, component: PaypalScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.OrderScreen, component: OrderScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.Order_Detail, component: Order_Detail, options: {} },


    ]
    return Screen;
}
