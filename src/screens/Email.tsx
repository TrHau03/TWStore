import { StyleSheet, Text, View, Pressable, Image, TextInput, } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Email = () => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Pressable>
                    <Image source={require('../asset/image/icon_back.png')} />
                </Pressable>
                <Text style={styles.txtTitle}>Email</Text>
            </View>

            <View style={styles.line}></View>

            <View style={styles.Email}>
                <Text style={styles.txtEmail}>Change Email</Text>
                <View style={styles.input}>
                    <Image source={require('../asset/image/icon_email.png')} style={{alignSelf:'center'}}/>
                    <TextInput style={styles.txtInput} keyboardType='email-address' placeholder="leducminh@gmail.com" />
                </View>
                <Text style={styles.verifi}>We Will Send verification to your New Email</Text>
            </View>

            <LinearGradient colors={['#46CAF3', '#46CAF3', '#68B1D9']} style={styles.btnSave}>
                <Pressable>
                    <Text style={styles.txtSave}>Change Email</Text>
                </Pressable>
            </LinearGradient>
        </View>
    )
}

export default Email

const styles = StyleSheet.create({
    verifi:{
        color: '#40BFFF',
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 21.60,
        letterSpacing: 0.50,
        paddingLeft: 10,
        paddingTop: 10,
    },

    txtSave: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 25.20,
        letterSpacing: 0.50,
    },

    btnSave: {
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#FFFFFF",
        backgroundColor: "#46CAF3",
        height: 50,
        width: "90%",
        alignSelf: 'center',
        position: 'absolute',
        bottom: 30,
    },

    input: {
        width: '100%',
        height: 50,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#9098B1",
        borderRadius: 5,
        flexDirection: 'row',
        paddingLeft: 10,
    },

    txtInput: {
        color: '#9098B1',
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21.60,
        letterSpacing: 0.50,
        marginLeft: 10,
    },

    txtEmail: {
        color: '#223263',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.50,
        paddingBottom: 10,
    },

    Email: {
        padding: 10,
    },

    line: {
        height: 1,
        backgroundColor: '#EBF0FF',
        width: '100%',
        marginTop: 30,
    },

    txtTitle: {
        color: '#223263',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 24,
        letterSpacing: 0.08,
        paddingLeft: 10,
    },
    title: {
        flexDirection: 'row',
        paddingLeft: 20,
    },

    container: {
        width: '100%',
        height: '100%',
        paddingTop: 20,
    }
})