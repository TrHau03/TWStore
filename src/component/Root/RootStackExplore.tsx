
import { uid } from 'uid';
import ExploreScreen from '../../screens/Explore/Explore';
import Category_Detail_Screen from '../../screens/Explore/Category_Detail';
import FilterScreen from '../../screens/Explore/Filter';
import FavoriteScreen from '../../screens/Home/Favorite';
import NotificationScreen from '../../screens/Home/Notification';





export enum RootStackScreenEnumExplore {
    ExploreScreen = 'ExploreScreen',
    Category_Detail_Screen = 'Category_Detail_Screen',
    FilterScreen = 'FilterScreen',

    FavoriteScreen = 'FavoriteScreen',
    NotificationScreen = 'NotificationScreen',
}

export type RootStackParamListExplore = {
    ExploreScreen: undefined,
    Category_Detail_Screen: undefined,
    FilterScreen: undefined,

    FavoriteScreen: undefined,
    NotificationScreen: undefined,
}


export const RootStackScreenExplore = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumExplore.ExploreScreen, component: ExploreScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumExplore.Category_Detail_Screen, component: Category_Detail_Screen, options: {} },
        { id: uid(), name: RootStackScreenEnumExplore.FilterScreen, component: FilterScreen, options: {} },

        { id: uid(), name: RootStackScreenEnumExplore.FavoriteScreen, component: FavoriteScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumExplore.NotificationScreen, component: NotificationScreen, options: {} },
    ]
    return Screen;
}
