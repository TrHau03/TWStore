import { StyleSheet, Text, View, Pressable, Image, TextInput, Alert, } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import ButtonBottom from '../../component/Button/Button'
import Header from '../../component/Header/Header'
import Icon from 'react-native-vector-icons/Ionicons'




const Phone = () => {

    //redux
    const [selected, setSelected] = useState('');
    const handlePhoneNumber = (value: string) => {
    };

    return (
        <View style={styles.container}>
            <Header hideBack title='PhoneNumber' />

            <View style={styles.line}></View>

            <View style={styles.Email}>
                <Text style={styles.txtEmail}>Phone Number</Text>
                <View style={styles.input}>
                    <Icon name='phone-portrait-outline' size={30} />
                    <TextInput style={styles.txtInput} 
                    value={selected} 
                    onChangeText={(text) => setSelected(text)} 
                    keyboardType='numeric' 
                    placeholder="0372711935" maxLength={11} />
                </View>
            </View>

            <View style={{ width: '100%', position: 'absolute', bottom: 10 }}>
                <Pressable onPress={() => handlePhoneNumber(selected)}>
                    <ButtonBottom title='Save' />
                </Pressable>
            </View>
        </View>
    )
}

export default Phone

const styles = StyleSheet.create({
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
        width: '50%',
        color: '#9098B1',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21.60,
        letterSpacing: 0.50,
        marginLeft: 10,
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
        height: '80%',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    }
})

