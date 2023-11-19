import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React from 'react'

const Forgot = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../asset/img/OTP.png')} />
            <Text style={styles.text1}>Xác minh mật khẩu</Text>
            <Text style={styles.text2}>Chúng tôi sẽ gửi cho bạn một mã xác minh mật khẩu trên gmail hoặc số điện thoại này</Text>
            <TextInput style={styles.textinput} placeholder="Nhập Email hoặc số điện thoại"></TextInput>
            <Pressable style={styles.btn}>
                <Text style={styles.textbtn}>Gửi Mã</Text>
            </Pressable>
        </View>
    )
}

export default Forgot

const styles = StyleSheet.create({
    container: {
        padding: 15,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: 50,
    },
    text1:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 40
    },
    text2:{
        fontSize: 16,
        color: 'black',
        marginTop: 30
    },
    textinput:{
        marginTop: 30,
        width: '100%',
        height: 50,
        borderWidth: 1
    },
    btn:{
        marginTop: 30,
        width: '100%',
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#46C9F3'
    },
    textbtn:{
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 24
    }
})