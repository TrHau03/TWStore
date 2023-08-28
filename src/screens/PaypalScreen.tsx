import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../component/Header/Header'
import { ScreenProps } from '../component/Navigation/Props'



const PaypalScreen = ({ navigation }: ScreenProps) => {
  return (
    <View style={{ paddingHorizontal: 16, paddingTop: 20 }}>
      <Header title='Paypal' navigation={navigation} />
    </View>
  )
}

export default PaypalScreen

const styles = StyleSheet.create({})