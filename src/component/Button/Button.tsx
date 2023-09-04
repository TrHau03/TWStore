import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
interface Style {
    style?: StyleProp<TextStyle> | undefined,
    title?: string
}
const ButtonBottom = ({style, title} : Style) => {
    return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#46caf3', '#5cbae3', '#68b1d9']} style={[styles.button, style]} >
                <Text style={styles.textButton}>{title}</Text>
            </LinearGradient>
    )
}

export default ButtonBottom

const styles = StyleSheet.create({
    textButton: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Poppins',
        fontWeight: '700',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: '100%',
        borderRadius: 5,
    },
})