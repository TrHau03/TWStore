import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { PropsAccount } from '../../component/Navigation/Props'
<<<<<<< Updated upstream
=======
import { HEIGHT, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities/utility'
import ButtonBottom from '../../component/Button/Button'
import { useDispatch } from 'react-redux'
import { isLogin } from '../../Redux/silces/Silces'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { LoginManager } from 'react-native-fbsdk-next'

>>>>>>> Stashed changes

const AccountScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>

      <View style={styles.line}></View>

      {/* <Pressable style={styles.button}>
        <Image source={require('../../asset/image/Profile_Account.png')}></Image>
        <Text style={styles.txtbtn}>Profile</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Image source={require('../../asset/image/Oder_Account.png')}></Image>
        <Text style={styles.txtbtn}>Oder</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Image source={require('../../asset/image/Address_Account.png')}></Image>
        <Text style={styles.txtbtn}>Address</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Image source={require('../../asset/image/Payment_Account.png')}></Image>
        <Text style={styles.txtbtn}>Payment</Text>
      </Pressable> */}
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
    width: '100%',
    height: '100%',
    paddingTop: 20,
    paddingHorizontal: 20
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