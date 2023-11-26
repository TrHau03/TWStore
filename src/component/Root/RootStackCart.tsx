
import { uid } from 'uid';
import CartScreen from '../../screens/Cart/CartScreen';



export enum RootStackScreenEnumCart {
    CartScreen = 'CartScreen',
}

export type RootStackParamListCart = {
    CartScreen: undefined,
}


export const RootStackScreenCart = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumCart.CartScreen, component: CartScreen, options: {} },
        

    ]
    return Screen;
}
