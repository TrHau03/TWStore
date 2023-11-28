
import { uid } from 'uid';
import ExploreScreen from '../../screens/Explore/Explore';
import Category_Detail_Screen from '../../screens/Explore/Category_Detail';
import FilterScreen from '../../screens/Explore/Filter';
import { FadeExploreScreen } from '../BottomNavigation/AniScreenBottomTab';
import Productdetail from '../../screens/Explore/Productdetail';






export enum RootStackScreenEnumExplore {
    ExploreScreen = 'ExploreScreen',
    Category_Detail_Screen = 'Category_Detail_Screen',
    FilterScreen = 'FilterScreen',
    Productdetail = 'Productdetail'
}

export type RootStackParamListExplore = {
    ExploreScreen: undefined,
    Category_Detail_Screen: undefined,
    FilterScreen: undefined,
    Productdetail: any,
}


export const RootStackScreenExplore = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumExplore.ExploreScreen, component: ExploreScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumExplore.Category_Detail_Screen, component: Category_Detail_Screen, options: {} },
        { id: uid(), name: RootStackScreenEnumExplore.FilterScreen, component: FilterScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumExplore.Productdetail, component: Productdetail, options: {} },

    ]
    return Screen;
}
