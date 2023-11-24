import { StyleSheet, Text, View, Pressable, Image, TextInput, } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../../component/Header/Header'
import ButtonBottom from '../../component/Button/Button'
import { HEIGHT, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities/utility'

const ChangeName = () => {
    return (
        <View style={styles.container}>
            <Header hideBack title='Name' />
            <View style={styles.line}></View>

            <View style={styles.content}>
                <View style={styles.Name}>
                    <Text style={styles.txtName}>First Name</Text>
                    <View style={styles.input}>
                        <TextInput style={styles.txtInput} placeholder="Maximus" />
                    </View>
                </View>

                <View style={styles.Name}>
                    <Text style={styles.txtName}>Last Name</Text>
                    <View style={styles.input}>
                        <TextInput style={styles.txtInput} placeholder="Gold" />
                    </View>
                </View>
            </View>
            <View style={{ width: '100%', position: 'absolute', bottom: 15 }}>
                <ButtonBottom title='Save' />
            </View>
        </View>
    )
}

export default ChangeName

const styles = StyleSheet.create({
    content: {},
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
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#9098B1",
        borderRadius: 5,
    },

    txtInput: {
        backgroundColor: "#FFFFFF",
        width: '100%',
        paddingLeft: 10,
        color: '#9098B1',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21.60,
        letterSpacing: 0.50,
    },

    txtName: {
        color: '#223263',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.50,
        paddingBottom: 10,
        alignSelf: "flex-start"

    },

    Name: {
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

    container: {
        height: HEIGHT * 0.8,
        width: WIDTH,
        alignItems: 'center',
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingTop: PADDING_TOP,
    }
})