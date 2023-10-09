import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { PropsAccount } from '../../component/Navigation/Props'
import { HEIGHT, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities/utility'
import { Avatar, Banner, Button, Card, Checkbox, Chip, Dialog, Divider, Menu, Portal, Searchbar, Surface, useTheme } from 'react-native-paper'


const AccountScreen = ({ navigation }: any) => {
  return (
    <View style={[styles.container,]}>
      <Text style={styles.title}>Account</Text>
      <View style={styles.line}></View>
      {/* <Portal>
        <Dialog visible={visible} onDismiss={hineDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text>This is simple dialog</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hineDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal> */}

      <View>
        {data.map((item) =>
          <TouchableOpacity style={styles.button} key={item.id} onPress={() => navigation?.navigate(item.screen)}>
            <Icon name={item.icon} size={25} color={'#525252'} />
            <Text style={styles.txtbtn}>{item.name}</Text>
          </TouchableOpacity>
        )}
      </View>

    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  txtbtn: {
    color: '#223263',
    fontSize: 16,
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
  },
  line: {
    height: 0.5,
    backgroundColor: '#ADA8A8',
    width: '120%',
    marginTop: 20,
    position: 'relative',
    right: 20
  },
  title: {
    color: '#223263',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.08,
  },
  container: {
    width: WIDTH,
    height: HEIGHT,
    paddingTop: PADDING_TOP,
    paddingHorizontal: PADDING_HORIZONTAL
  }
})

const data = [
  {
    id: 1,
    name: 'Profile',
    icon: 'person-sharp',
    screen: 'ProfileScreen'
  },
  {
    id: 2,
    name: 'Order',
    icon: 'bag-check-sharp',
    screen: 'PaymentScreen'

  },
  {
    id: 3,
    name: 'Address',
    icon: 'location-sharp',
    screen: 'PaymentScreen'

  },
  {
    id: 4,
    name: 'Payment',
    icon: 'wallet',
    screen: 'PaymentScreen'
  }
]