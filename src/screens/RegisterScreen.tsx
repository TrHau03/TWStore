import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, Button, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Checkbox, InputItem } from '@ant-design/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';


import { RootStackParamList, RootStackScreenEnum } from '../component/Root/RootStack';




type navigationProps = NativeStackNavigationProp<RootStackParamList, RootStackScreenEnum>
const RegisterScreen = (props: any) => {
    const navigation = useNavigation<navigationProps>();
    useEffect(() => {
        const setData = async () => {
            await AsyncStorage.setItem('checkSlide', 'true');
        }
        setData();
    }, [])
    const [name, setNMame] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordAgain, setPasswordAgain] = useState<string>('');
    return (
        <KeyboardAwareScrollView enableOnAndroid={true}>
            <View style={{ paddingHorizontal: 16, marginTop: 20 }}>
                <View style={styles.header}>
                    <Image style={{ width: 130, height: 130 }} source={require('../asset/image/logoTW.png')} />
                    <Text style={styles.textHeader}>The Wonder</Text>
                </View>
                <View>
                    <Text style={styles.textWelcome}>Welcome to Register</Text>
                </View>
                <View style={styles.input}>
                    <View style={styles.textinput}>
                        <InputItem
                            style={{ fontSize: 16 }}
                            value={name}
                            onChange={(value: any) => {
                                setNMame(value)
                            }}
                            labelNumber={2}
                            placeholder="Full Name">
                            <Icon name="person-outline" size={25} color="#9098B1" />
                        </InputItem>
                    </View>
                    <View style={styles.textinput}>
                        <InputItem
                            type='password'
                            style={{ fontSize: 16 }}
                            value={email}
                            onChange={(value: any) => {
                                setEmail(value)
                            }}
                            labelNumber={2}
                            placeholder="Your Email">
                            <Icon name="mail-outline" size={25} color="#9098B1" />
                        </InputItem>
                    </View>
                    <View style={styles.textinput}>
                        <InputItem
                            type='password'
                            style={{ fontSize: 16 }}
                            value={password}
                            onChange={(value: any) => {
                                setPassword(value)
                            }}
                            labelNumber={2}
                            placeholder="Password">
                            <Icon name="lock-closed-outline" size={25} color="#9098B1" />
                        </InputItem>
                    </View>
                    <View style={styles.textinput}>
                        <InputItem
                            type='password'
                            style={{ fontSize: 16 }}
                            value={passwordAgain}
                            onChange={(value: any) => {
                                setPasswordAgain(value)
                            }}
                            labelNumber={2}
                            placeholder="Password Again">
                            <Icon name="lock-closed-outline" size={25} color="#9098B1" />
                        </InputItem>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate(RootStackScreenEnum.VerificationScreen)}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#46caf3', '#5cbae3', '#68b1d9']} style={styles.btnLogin} >
                            <Text style={styles.textLogin}>Register</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                    <Text style={styles.textDontAcc}>Already a member? </Text>
                    <Pressable onPress={() => navigation.navigate(RootStackScreenEnum.LoginSreen)}>
                        <Text style={styles.textRegister}>Log In</Text>
                    </Pressable>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    textRegister: {
        color: '#1C1C1C',
        fontSize: 15,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 18,
        letterSpacing: 0.50,
    },
    textDontAcc: {
        color: '#9098B1',
        fontSize: 15,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 18,
        letterSpacing: 0.50,
    },
    textLoginWith: {
        color: '#9098B1',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 25.20,
        letterSpacing: 0.50,
    },
    btnLoginWith: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        borderWidth: 0.5,
        borderColor: '#B1B7CA',
        borderRadius: 5,
    },
    textOR: {
        color: '#9098B1',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.07,
    },
    btnLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        borderRadius: 5,
        marginTop: 34
    },
    textLogin: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Poppins',
        fontWeight: '700',
    },
    textForgot: {
        alignItems: 'flex-end'
    },
    checkBox: {
        color: '#1C1C1C',
        fontSize: 15,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 18,
        letterSpacing: 0.50,
    },

    textinput: {
        borderColor: '#E3E8F8',
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 5,
        height: 50,
        marginTop: 20
    },
    input: {
        marginTop: 60
    },
    textWelcome: {
        color: '#223263',
        fontSize: 24,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 36,
        letterSpacing: 0.50,
    },
    textHeader: {
        color: '#223263',
        fontSize: 30,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 36,
        letterSpacing: 0.50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})