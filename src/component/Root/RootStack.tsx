import LoginSreen from "../../screens/LoginSreen";
import SlideScreen from "../../screens/SlideScreen";

export enum RootStackScreenEnum {
    SlideScreen = 'SlideScreen',
    LoginSreen = 'LoginSreen',
}
export type RootStackParamList = {
    SlideScreen: undefined,
    LoginSreen: undefined,
}
export const RootStackScreenLogin = () => {
    const Screen: any = [
        { id: 2, name: RootStackScreenEnum.LoginSreen, component: LoginSreen, options: {} },
    ]
    return Screen;
}
export const RootStackScreenSlide = () => {
    const Screen: any = [
        { id: 1, name: RootStackScreenEnum.SlideScreen, component: SlideScreen, options: {} },
        { id: 2, name: RootStackScreenEnum.LoginSreen, component: LoginSreen, options: {} },
    ]
    return Screen;
}
export const configStack = (route: any) => {
    return {
        headerShown: false,
    }
}