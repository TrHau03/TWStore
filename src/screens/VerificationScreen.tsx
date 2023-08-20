import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { InputItem } from '@ant-design/react-native'
import LinearGradient from 'react-native-linear-gradient'
import {
    CodeField,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const VerificationScreen = () => {
    const [value, setValue] = useState<string>('');
    const [codeFieldProps, getCellOnLayout] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <ScrollView>
            <View style={{ paddingHorizontal: 20, alignItems: 'center' }}>
                <View style={{ marginTop: 100 }}>
                    <Image source={require('../asset/image/Verification.png')} />
                    <Text style={styles.textOTP}>OTP Verification</Text>
                </View>
                {/* <View>
                    <Text style={styles.text}>We will send you a one-time verification password on this gmail</Text>
                    <Text style={styles.textEnterEmail}>Enter Email</Text>
                    <InputItem
                        style={{ borderBottomWidth: 1, borderBottomColor: '#5F98DC', fontSize: 20 }}
                        type='email-address'
                        onChange={(value: any) => {
                        }}
                        placeholder="Email">
                    </InputItem>
                </View> */}
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text>Enter the OTP sent to</Text>
                    <Text>******@gmail.com</Text>
                    <CodeField
                        {...codeFieldProps}
                        value={value}
                        cellCount={6}
                        onChangeText={setValue}
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                style={[styles.cell, isFocused && styles.focusCell]}
                                key={index}
                                // Call getter method on each cell component
                                onLayout={getCellOnLayout(index)}>
                                {symbol}
                            </Text>
                        )}
                    />
                </View>
                <View style={{ width: '100%' }}>
                    <TouchableOpacity >
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#46caf3', '#5cbae3', '#68b1d9']} style={styles.btnLogin} >
                            <Text style={styles.textLogin}>Get OTP</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default VerificationScreen

const styles = StyleSheet.create({
    cell: {
        marginTop: 20,
        marginHorizontal: 10,
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#5F98DC',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
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
    textEnterEmail: {
        textAlign: 'center',
        color: '#818181',
        fontSize: 15,
        fontFamily: 'Poppins',
        fontWeight: '300',
        marginTop: 40,
    },
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '300',
        marginTop: 30
    },
    textOTP: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'Poppins',
        fontWeight: '500',
        marginTop: 50
    },
})