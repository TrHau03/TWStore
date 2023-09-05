import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../component/Header/Header'
import { PropsAccount } from '../../component/Navigation/Props'

const BankTransferScreen = ({ navigation }: PropsAccount) => {
  return (
    <View style={{paddingHorizontal: 16, paddingTop: 20}}>
      <Header title='Bank Transfer' navigation={navigation} />
    </View>
  )
}

export default BankTransferScreen

const styles = StyleSheet.create({})