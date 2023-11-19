import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const Offer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.offer}>Offer</Text>
      <View style={styles.cupon}>
        <Text style={styles.textcupon}>Use “MEGSL” Cupon For Get 90%off</Text>
      </View>
      <ImageBackground
        source={require('../asset/img/Promotion.png')}
        style={styles.backgroundimg}>
        <Text style={styles.textbackgroundimg}>90% Off Super Mega Sale</Text>
      </ImageBackground>
      <ImageBackground
        source={require('../asset/img/Promotion2.png')}
        style={styles.backgroundimg}>
        <Text style={styles.textbackgroundimg}>Super Flash Sale 50% Off</Text>
      </ImageBackground>
    </View>
  )
}

export default Offer
const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: '100%',
    height: '100%'
  },
  offer: {
    color: '#223263',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cupon: {
    marginTop: 40,
    width: '100%',
    height: 80,
    backgroundColor: '#00A9FF',
    borderRadius: 6,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  textcupon: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    width: 200,
  },
  backgroundimg: {
    marginTop: 20,
    width: '100%',
    height: 210,
    borderRadius: 6,
    overflow: 'hidden',
  },
  textbackgroundimg: {
    marginTop: 40,
    marginLeft: 30,
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: '#FFFFFF',
    width: 200,
  },
})