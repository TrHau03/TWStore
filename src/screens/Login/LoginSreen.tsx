import { Image, StyleSheet, Text, View, Button, Pressable, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { useEffect, useState } from 'react'
import { Checkbox, InputItem } from '@ant-design/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamListLogin, RootStackScreenEnumLogin } from '../../component/Root/RootStackLogin';
import AxiosInstance from '../../Axios/Axios';

interface Login {
  email: string;
  password: string;
}


const LoginScreen = (props: any) => {
  const {navigation} = props
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    const setData = async () => {
      await AsyncStorage.setItem('checkSlide', 'true');
    }
    setData();
  }, [])


  const login = async (user: Login) => {
    try {
      const result = await AxiosInstance().post('/users/LoginUser', { email: user.email, password: user.password });
      console.log(result.data);
      
      return result;
    } catch (error) {
      console.log('getNews Error: ', error);
    }
    return [];
  }
  return (
    <KeyboardAwareScrollView>
      <View style={{ paddingHorizontal: 16, marginTop: 20 }}>
        <View style={styles.header}>
          <Image style={{ width: 130, height: 130 }} source={require('../../asset/image/logoTW.png')} />
          <Text style={styles.textHeader}>The Wonder</Text>
        </View>
        <View>
          <Text style={styles.textWelcome}>Welcome to Login</Text>
        </View>
        <View style={styles.input}>
          <View style={styles.email}>
            <InputItem
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
          <View style={styles.password}>
            <InputItem
              type='password'
              style={{ fontSize: 16 }}
              value={password}
              onChange={(value: any) => {
                setPassword(value)
              }}
              labelNumber={2}
              placeholder="Your Password">
              <Icon name="lock-closed-outline" size={25} color="#9098B1" />
            </InputItem>
          </View>
        </View>
        <View style={{ flexDirection: 'row', gap: 80, marginTop: 17 }}>
          <Checkbox style={{ width: 150 }}><Text style={styles.checkBox}>Remember me</Text></Checkbox>
          <Text style={styles.checkBox}>Forgot Password?</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => login({ email, password })}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#46caf3', '#5cbae3', '#68b1d9']} style={styles.btnLogin} >
              <Text style={styles.textLogin}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 23, marginTop: 17 }}>
          <View style={{ width: '40%', backgroundColor: '#9098B1', height: 0.5 }} />
          <Text style={styles.textOR}>OR</Text>
          <View style={{ width: '40%', backgroundColor: '#9098B1', height: 0.5 }} />
        </View>
        <View style={{ marginTop: 17 }}>
          <TouchableOpacity style={styles.btnLoginWith}>
            <Icon name='logo-google' size={20} style={{ position: 'absolute', left: 20 }} />
            <Text style={styles.textLoginWith}>Log in with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnLoginWith, { marginTop: 17 }]}>
            <Icon name='logo-facebook' size={20} style={{ position: 'absolute', left: 20 }} />
            <Text style={styles.textLoginWith}>Log in with FaceBook</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 17 }}>
          <Text style={styles.textDontAcc}>Don’t have a account? </Text>
          <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.textRegister}>Register</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default LoginScreen

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
  password: {
    borderColor: '#E3E8F8',
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 5,
    height: 50,
    marginTop: 10
  },
  email: {
    borderColor: '#E3E8F8',
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 5,
    height: 50,
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