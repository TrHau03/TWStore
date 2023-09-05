import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../component/Header/Header'
import Icon from 'react-native-vector-icons/Ionicons';

const Order_Detail = () => {
  return (
    <View>
      <Header/>
      <View style={styles.line}></View>
    </View>
  )
}

export default Order_Detail

const styles = StyleSheet.create({
    line: {
        height: 1,
        backgroundColor: '#9098B1',
        width: '100%',
        marginTop: 30,
    },
    container: {
        width: '100%',
        height: '100%',
        paddingTop: 20,
    }
})