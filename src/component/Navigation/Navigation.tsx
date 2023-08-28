
import { RootStackScreenLogin, RootStackScreenSlide, configStack } from '../Root/RootStack';
import SlideScreen from '../../screens/SlideScreen';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginNavigation from './LoginNavigation';
import SlideNavigation from './SlideNavigation';
import React, { useEffect, useState } from 'react';



const Navigation = () => {
    const [slide, setslide] = useState<boolean>();
    useEffect(() => {
        const temp = async () => {
            const checkSlide = await AsyncStorage.getItem('checkSlide');
            setslide(checkSlide === null ? false : true);
        }
        temp();
    }, [])
    if (!slide) {
        return <SlideNavigation/>;
    } else {
        return <LoginNavigation/>
    }
}


export default Navigation