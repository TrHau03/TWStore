import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenProps } from '../component/Navigation/Props'
import Header from '../component/Header/Header'

const BankTransferScreen = ({ navigation }: ScreenProps) => {
  return (
    <View style={{paddingHorizontal: 16, paddingTop: 20}}>
      <Header title='Bank Transfer' navigation={navigation} />
    </View>
  )
}

export default BankTransferScreen

const styles = StyleSheet.create({})