
import { uid } from 'uid';
import OfferScreen from '../../screens/Offer/OfferScreen';
import { FadeOfferScreen } from '../BottomNavigation/AniScreenBottomTab';



export enum RootStackScreenEnumOffer {
    OfferScreen = 'OfferScreen',
}

export type RootStackParamListOffer = {
    OfferScreen: undefined,
}


export const RootStackScreenOffer = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumOffer.OfferScreen, component: FadeOfferScreen, options: {} },


    ]
    return Screen;
}
