import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Account = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>

      <View style={styles.line}></View>

      <Pressable style={styles.button}>
        <Image source={require('../asset/image/Profile_Account.png')}></Image>
        <Text style={styles.txtbtn}>Profile</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Image source={require('../asset/image/Oder_Account.png')}></Image>
        <Text style={styles.txtbtn}>Oder</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Image source={require('../asset/image/Address_Account.png')}></Image>
        <Text style={styles.txtbtn}>Address</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Image source={require('../asset/image/Payment_Account.png')}></Image>
        <Text style={styles.txtbtn}>Payment</Text>
      </Pressable>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
    txtbtn: {
        color: '#223263',
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 18,
        letterSpacing: 0.50,
        paddingLeft: 15,
    },

    button: {
        flexDirection: 'row',
        width: '100%',
        height: 60,
        alignItems: 'center',
        paddingLeft: 20,
    },
    line: {
        height: 1, 
        backgroundColor: '#EBF0FF', 
        width: '100%',
        marginTop: 30,
    },
    title: {
        color: '#223263',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 24,
        letterSpacing: 0.08,
        paddingLeft: 20,
    },
    container: {
        width: '100%',
        height: '100%',
        paddingTop: 20,
      }
})