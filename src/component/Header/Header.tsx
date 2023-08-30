import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList, RootStackScreenEnum } from '../Root/RootStack'


interface Header {
    title?: string,
    navigation?: StackNavigationProp<RootStackParamList, RootStackScreenEnum>
}


const Header = ({ title, navigation }: Header) => {
    return (
        <View style={{ flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity onPress={() => navigation?.goBack()}><Icon name='chevron-back-outline' size={25} color={'#9098B1'} /></TouchableOpacity>
            <Text style={styles.textTitlePage}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    textTitlePage: {
        color: '#223263',
        fontSize: 19,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 24,
        letterSpacing: 0.50,
    },
})