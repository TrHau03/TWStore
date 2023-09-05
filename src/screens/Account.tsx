import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

interface Account {
  id: number;
  icon: string;
  name: string;
}

const Account = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>

      <View style={styles.line}></View>

      <View>
        {Data.map((item) =>
        <Pressable key={item.id} style={styles.button}>
          <Icon name={item.icon} size={25} color={'#525252'}/>
          <Text style={styles.txtbtn}>{item.name}</Text>
        </Pressable>
        )}
      </View>
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

const Data: Account[] = [
  {
    id: 1,
    icon: 'person',
    name: 'Profile'
  },
  {
      id: 2,
      icon: 'bag',
      name: 'Order'
    },
    {
      id: 3,
      icon: 'location',
      name: 'Address'
    },
    {
      id: 4,
      icon: 'logo-paypal',
      name: 'Payment'
    },
];