
import { uid } from 'uid';
import ExploreScreen from '../../screens/Explore/Explore';
import Category_Detail_Screen from '../../screens/Explore/Category_Detail';
import FilterScreen from '../../screens/Explore/Filter';
import { FadeExploreScreen } from '../BottomNavigation/AniScreenBottomTab';





export enum RootStackScreenEnumExplore {
    ExploreScreen = 'ExploreScreen',
<<<<<<< HEAD
    Category_Detail_Screen = 'Category_Detail_Screen',
    FilterScreen = 'FilterScreen',
=======
    Category_Detail = 'Category_Detail',
    FilterScreen = 'FilterScreen',
    ShortByScreen = 'ShortByScreen'
>>>>>>> parent of de3849d (23/11)
}

export type RootStackParamListExplore = {
    ExploreScreen: undefined,
<<<<<<< HEAD
    Category_Detail_Screen: undefined,
    FilterScreen: undefined,
=======
    Category_Detail: undefined,
    FilterScreen: undefined,
    ShortByScreen: undefined,
>>>>>>> parent of de3849d (23/11)
}


export const RootStackScreenExplore = () => {
    const Screen: any = [
<<<<<<< HEAD
        { id: uid(), name: RootStackScreenEnumExplore.ExploreScreen, component: FadeExploreScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumExplore.Category_Detail_Screen, component: Category_Detail_Screen, options: {} },
        { id: uid(), name: RootStackScreenEnumExplore.FilterScreen, component: FilterScreen, options: {} },
=======
        { id: uid(), name: RootStackScreenEnumExplore.ExploreScreen, component: ExploreScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumExplore.Category_Detail, component: Category_Detail, options: {} },
        { id: uid(), name: RootStackScreenEnumExplore.FilterScreen, component: FilterScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumExplore.ShortByScreen, component: ShortByScreen, options: {} },
>>>>>>> parent of de3849d (23/11)

    ]
    return Screen;
}
