
import { uid } from 'uid';
import ExploreScreen from '../../screens/Explore/Explore';
import Category_Detail from '../../screens/Explore/Category_Detail';
import FilterScreen from '../../screens/Explore/Filter';
import ShortByScreen from '../../screens/Explore/ShortBy';




export enum RootStackScreenEnumExplore {
    ExploreScreen = 'ExploreScreen',
    Category_Detail = 'Category_Detail',
}

export type RootStackParamListExplore = {
    ExploreScreen: undefined,
    Category_Detail: undefined,
}


export const RootStackScreenExplore = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumExplore.ExploreScreen, component: ExploreScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumExplore.Category_Detail, component: Category_Detail, options: {} },

    ]
    return Screen;
}
