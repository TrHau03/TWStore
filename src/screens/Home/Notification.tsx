import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Header from '../../component/Header/Header';
import { PropsHome } from '../../component/Navigation/Props';
import { RootStackScreenEnumHome } from '../../component/Root/RootStackHome';
import { BG_COLOR, PADDING_HORIZONTAL, PADDING_TOP } from '../../utilities/utility';




const NotificationScreen = ({ navigation }: PropsHome) => {
  return (
    <View style={styles.container}>
      <View>
        <Header title='Notification' navigation={navigation} />
      </View>
      <View >
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation?.navigate(RootStackScreenEnumHome.OfferNorifiScreen)}
        >
          <View
            style={styles.btnOffer}
          >
            <Image source={require('../../asset/image/Offer.png')} />
            <Text style={styles.txtOffer}>Offer</Text>
          </View>
          <View style={styles.tvCount}>
            <Text style={styles.txtCount}>2</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation?.navigate(RootStackScreenEnumHome.ActivityScreen)}
        >
          <View style={styles.btnActivity}>
            <Image source={require('../../asset/image/Activity.png')} />
            <Text style={styles.txtActivity}>Activity</Text>
          </View>

          <View style={styles.tvCount}>
            <Text style={styles.txtCount}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  txtCount: {

    fontSize: 18,

    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tvCount: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 12
  },
  txtActivity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    color: 'black'
  },
  txtOffer: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    color: 'black'
  },
  btnActivity: {
    alignItems: 'center',
    height: 40,
    flexDirection: 'row'
  },
  btnOffer: {
    flexDirection: 'row'
  },
  btn: {
    alignItems: 'center',
    marginLeft: 10,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  container: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: PADDING_TOP,
    backgroundColor: BG_COLOR,
  }
})