
import { uid } from 'uid';


import HomeScreen from '../../screens/Home/HomeScreen';
import FavoriteScreen from '../../screens/Home/Favorite';
import NotificationScreen from '../../screens/Home/Notification';
import ActivityScreen from '../../screens/Home/Activity';
import OfferNorifiScreen from '../../screens/Home/Offer';

export enum RootStackScreenEnumHome {
    HomeScreen = 'HomeScreen',
    FavoriteScreen = 'FavoriteScreen',
    NotificationScreen = 'NotificationScreen',
    ActivityScreen = 'ActivityScreen',
    OfferNorifiScreen = 'OfferNorifiScreen',
}

export type RootStackParamListHome = {
    HomeScreen: undefined,
    FavoriteScreen: undefined,
    NotificationScreen: undefined,
    ActivityScreen: undefined,
    OfferNorifiScreen: undefined,
}


export const RootStackScreenHome = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumHome.FavoriteScreen, component: FavoriteScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumHome.HomeScreen, component: HomeScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumHome.NotificationScreen, component: NotificationScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumHome.ActivityScreen, component: ActivityScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumHome.OfferNorifiScreen, component: OfferNorifiScreen, options: {} },
    ]
    return Screen;
}
