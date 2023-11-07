import { uid } from 'uid';
import PaymentScreen from '../../screens/Account/PaymentScreen';
import CreditCardScreen from '../../screens/Account/CreditCardScreen';
import PaypalScreen from '../../screens/Account/PaypalScreen';
import BankTransferScreen from '../../screens/Account/BankTransferScreen';
import AccountScreen from '../../screens/Account/Account';
import ProfileScreen from '../../screens/Account/Profile';
import Add_Address from '../../screens/Account/Add_Address';
import Edit_Address from '../../screens/Account/Edit_Address';
import AddressScreen from '../../screens/Account/AddressScreen';
import OrderScreen from '../../screens/Account/OrderScreen';
import Order_Detail from '../../screens/Account/Order_Detail';


export enum RootStackScreenEnumAccount{
    AccountScreen = 'AccountScreen',
    ProfileScreen = 'ProfileScreen',
    PaymentScreen = 'PaymentScreen',
    CreditCardScreen = 'CreditCardScreen',
    PaypalScreen = 'PaypalScreen',
    BankTransferScreen = 'BankTransferScreen',
    Add_Address = 'Add_Address',
    Edit_Address = 'Edit_Address',
    AddressScreen ='AddressScreen',
    OrderScreen = 'OrderScreen',
    Order_Detail = 'Order_Detail',
}

export type RootStackParamListAccount = {
    AccountScreen: undefined,
    ProfileScreen: undefined,
    PaymentScreen: undefined,
    CreditCardScreen: undefined,
    PaypalScreen: undefined,
    BankTransferScreen: undefined,
    Add_Address: undefined,
    Edit_Address : undefined,
    AddressScreen: undefined,
    OrderScreen : undefined,
    Order_Detail : undefined,
}


export const RootStackScreenAccount = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumAccount.AccountScreen, component: AccountScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.ProfileScreen, component: ProfileScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.PaymentScreen, component: PaymentScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.CreditCardScreen, component: CreditCardScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.PaypalScreen, component: PaypalScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.BankTransferScreen, component: BankTransferScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.Add_Address, component: Add_Address, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.Edit_Address, component: Edit_Address, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.AddressScreen, component: AddressScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.OrderScreen, component: OrderScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumAccount.Order_Detail, component: Order_Detail, options: {} },

    ]
    return Screen;
}
