import { StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>

      <View style={styles.Top}>

        <View>
          <Image style={styles.search} source={require('../asset/img/Search.png')}/>
          <TextInput
            style={styles.textinputsecrch}
            placeholder="Search Here" >
          </TextInput>
        </View>

        <Pressable style={styles.pressable}>
          <Image style={styles.favorite} source={require('../asset/img/Favorite.png')}/>
        </Pressable>

        <Pressable style={styles.pressable}>
          <Image style={styles.notification} source={require('../asset/img/Notification.png')}/>
        </Pressable>

      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  Top: {
    margin: 20 ,
    flexDirection: 'row',
    justifyContent: 'space-between' ,
    alignItems : 'center'
  },

  textinputsecrch: {
    width: 263 ,
    height: 46 ,
    borderRadius: 6 ,
    borderWidth: 1 ,
    borderColor: '#D9E2FF',
    paddingLeft: 45 ,
  },

  favorite: {
    width: 24 ,
    height: 24 ,
  },

  notification: {
    width: 24 ,
    height: 24 ,
  },

  pressable: {
    width: 24 ,
    height: 24 ,
  },

  search: {
    width: 24 ,
    height: 24 ,
    position: 'absolute' ,
    top: 11 ,
    left: 10 ,
  },
  
})