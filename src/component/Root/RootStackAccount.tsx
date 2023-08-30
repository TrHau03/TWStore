
import { uid } from 'uid';


import PaymentScreen from '../../screens/Account/PaymentScreen';
import CreditCardScreen from '../../screens/Account/CreditCardScreen';
import PaypalScreen from '../../screens/Account/PaypalScreen';
import BankTransferScreen from '../../screens/Account/BankTransferScreen';



export enum RootStackScreenEnumAccount{
    CartScreen = 'CartScreen',
    CreditCardScreen = 'CreditCardScreen',
    PaypalScreen = 'PaypalScreen',
    BankTransferScreen = 'BankTransferScreen',
}

export type RootStackParamListAccount = {
    CartScreen: undefined,
    CreditCardScreen: undefined,
    PaypalScreen: undefined,
    BankTransferScreen: undefined,
}


export const RootStackScreenAccount = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumAccount.CartScreen, component: PaymentScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.CreditCardScreen, component: CreditCardScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.PaypalScreen, component: PaypalScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.BankTransferScreen, component: BankTransferScreen, options: {} },
        

    ]
    return Screen;
}
