
import { uid } from 'uid';


import PaymentScreen from '../../screens/Account/PaymentScreen';
import CreditCardScreen from '../../screens/Account/CreditCardScreen';
import PaypalScreen from '../../screens/Account/PaypalScreen';
import BankTransferScreen from '../../screens/Account/BankTransferScreen';
import AccountScreen from '../../screens/Account/Account';
import ProfileScreen from '../../screens/Account/Profile';


export enum RootStackScreenEnumAccount{
    AccountScreen = 'AccountScreen',
    ProfileScreen = 'ProfileScreen',
    PaymentScreen = 'PaymentScreen',
    CreditCardScreen = 'CreditCardScreen',
    PaypalScreen = 'PaypalScreen',
    BankTransferScreen = 'BankTransferScreen',
}

export type RootStackParamListAccount = {
    AccountScreen: undefined,
    ProfileScreen: undefined,
    PaymentScreen: undefined,
    CreditCardScreen: undefined,
    PaypalScreen: undefined,
    BankTransferScreen: undefined,
}


export const RootStackScreenAccount = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumAccount.AccountScreen, component: AccountScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.ProfileScreen, component: ProfileScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.PaymentScreen, component: PaymentScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.CreditCardScreen, component: CreditCardScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.PaypalScreen, component: PaypalScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.BankTransferScreen, component: BankTransferScreen, options: {} },
        

    ]
    return Screen;
}
