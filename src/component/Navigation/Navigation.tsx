
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginNavigation from './LoginNavigation';
import SlideNavigation from './SlideNavigation';
import React, { useEffect, useState } from 'react';
import BottomTab from '../BottomNavigation/BottomTabNavigator';
import { useSelector } from 'react-redux';



const Navigation = () => {
    const [slide, setslide] = useState<boolean>();
    const isLogin = useSelector((state: any) => state.SlicesReducer.isLogin);
    useEffect(() => {
        const temp = async () => {
            const checkSlide = await AsyncStorage.getItem('checkSlide');
            setslide(checkSlide === null ? false : true);
        }
        temp();
    }, [])
    if (!slide) {
        return <SlideNavigation />;
    } else {
        // return isLogin ? <BottomTab /> : <LoginNavigation />
        return true ? <BottomTab /> : <LoginNavigation />
    }
}


export default Navigation
