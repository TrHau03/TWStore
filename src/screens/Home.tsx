import { StyleSheet, Text, View, TextInput, Image, Pressable, ScrollView } from 'react-native'
import React, {useState} from 'react'

const images = [
  'https://thietke6d.com/wp-content/uploads/2021/03/Mau-banner-quang-cao-dep-1.png',
  'https://intphcm.com/data/upload/banner-thoi-trang-tuoi.jpg',
  'https://dojeannam.com/wp-content/uploads/2017/09/BANNER-KHAI-TRUONG-DOJEANNAM.jpg',
  'https://intphcm.com/data/upload/banner-thoi-trang.jpg'
]

const Home = () => {

  const [imgActive, setimgActive] = useState(0);

  onChange = (nativeEvent) => {
    if(nativeEvent){
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if(slide >= 0){
        setimgActive(slide);
      }
    }
  }

  return (
    <View>

      <View style={styles.top}>

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
      <View style={styles.topslide}>

        <ScrollView 
          onScroll={({nativeEvent}) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.slide}
        >
          {
            images.map((e,index) =>
              <Image
                key={e}
                resizeMode='stretch'
                style={styles.slide}
                source={{uri: e}}
              />
            )
          }
        </ScrollView>

        <View style={styles.warpdot}>
          {
            images.map((e, index) =>
              <Text
                key={e}
                style={imgActive == index ? styles.dotactive : styles.dot }
              >●</Text>
            )
          }
        </View>

      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  top: {
    margin: 20 ,
    flexDirection: 'row',
    justifyContent: 'space-between' ,
    alignItems : 'center' ,
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
  
  topslide:{
    marginLeft: 20 ,
    marginRight: 20
  },

  slide: {
    height: 205 ,
    width: 354 ,
  },

  warpdot: {
    position: 'absolute' ,
    bottom: 0 ,
    flexDirection: 'row' ,
    alignSelf: 'center' ,
  },

  dotactive: {
    margin: 3 ,
    color: 'black'
  },

  dot: {
    margin: 3 ,
    color: 'white'
  },

})