import { StyleSheet, Text, View, Pressable, Image, TextInput, } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import ButtonBottom from '../../component/Button/Button'
import Header from '../../component/Header/Header'
import Icon from 'react-native-vector-icons/Ionicons'
import { HEIGHT, WIDTH } from '../../utilities/utility'

const Email = () => {
    return (
        <View style={styles.container}>
            <Header hideBack title='Email' />

            <View style={styles.line}></View>

            <View style={styles.Email}>
                <Text style={styles.txtEmail}>Change Email</Text>
                <View style={styles.input}>
                    <Icon name='mail' size={30} />
                    <TextInput style={styles.txtInput} keyboardType='email-address' placeholder="leducminh@gmail.com" />
                </View>
                <Text style={styles.verifi}>We Will Send verification to your New Email</Text>
            </View>

            <View style={{ width: '100%', position: 'absolute', bottom: 15 }}>
                <ButtonBottom title='Change Email' />
            </View>
        </View>
    )
}

export default Email

const styles = StyleSheet.create({
    verifi: {
        color: '#40BFFF',
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 21.60,
        letterSpacing: 0.50,
        paddingLeft: 10,
        paddingTop: 10,
        alignSelf: 'flex-start'
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
        alignItems: 'center'
    },

    txtInput: {
        color: '#9098B1',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21.60,
        letterSpacing: 0.50,
        marginLeft: 10,
        width: '100%'
    },

    txtEmail: {
        color: '#223263',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.50,
        paddingBottom: 10,
        alignSelf: 'flex-start'
    },

    Email: {
        alignItems: 'center',
        marginTop: 20,
        width: '90%',
    },

    line: {
        height: 0.5,
        backgroundColor: '#ADA8A8',
        width: '120%',
        marginTop: 20,
        position: 'relative',
        right: 20
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
        height: HEIGHT * 0.8,
        width: WIDTH,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    }
})