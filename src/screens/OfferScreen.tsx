import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { AirbnbRating } from 'react-native-ratings';





interface Product {
  id: number;
  img: any;
  name: string;
  price: number;
}



const RenderItem = ({ item }: { item: Product }) => {
  return (
    <View style={styles.containerItemPD}>
      {/* <View style={styles.content}>
        <View style={styles.ImgContainerPD}>
          <Image style={{ width: '100%', height: '100%' }} source={{ uri: item.img }} />
        </View>
        <View style={styles.in4PD}>
          <View style={styles.in4Text}>
            <Text style={styles.NamePD}>{item.name}</Text>
            <View style={styles.star}>
              <AirbnbRating count={5} size={15} showRating={false} />
            </View>
            <Text style={styles.PricePD}>{item.price}</Text>
          </View>
          <View style={styles.sale}>
            <Text style={styles.txtOldPrice}>5000</Text>
            <Text style={styles.txtSale}>24% Off</Text>
            <TouchableOpacity style={styles.imgIc}>
              <Icon name="trash-outline" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
    </View>
  )
}

const OfferScreen = () => {
  const deadlineDay = 2;
  const deadlineHour = 5
  const [hideCountDown, sethideCountDown] = useState<boolean>(false);
  const [day, setDay] = useState<number>(21);
  const [hour, setHour] = useState<number>(12);
  const [minute, setMinute] = useState<number>(21);
  const [seconds, setSeconds] = useState<number>(21);
  let endDate = new Date().getTime() + (1000 * 3600 * (24 * deadlineDay));
  useEffect(() => {
    console.log('render');
    let setTimeCountDown = setInterval(function () {
      let now = new Date().getTime();
      let distance = endDate - now;
      let day = Math.floor(distance / (24 * 60 * 60 * 1000));
      let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
      let seconds = Math.floor((distance % (60 * 1000)) / 1000);
      setDay(day);
      setHour(hour)
      setMinute(minute);
      setSeconds(seconds);
      if (distance <= 0) {
        clearInterval(setTimeCountDown);
        sethideCountDown(true);
      }
    }, 1000);
  }, []);
  return (
    <View style={{ paddingHorizontal: 17, paddingTop: 20 }}>
      <View style={{ flexDirection: 'row' }}>
        <Icon name='chevron-back-outline' size={25} />
        <Text style={styles.textTitlePage}>Super Flash Sale</Text>
        <Icon name='search-outline' size={25} style={{ position: 'absolute', right: 0 }} />
      </View>
      {!hideCountDown ?
        <View style={{ flexDirection: 'row', gap: 5, marginTop: 20 }}>
          <View style={styles.timeCountDown}>
            <Text style={styles.textTimeCountDown}>{(day < 10) ? '0' + day : day}</Text>
          </View>
          <Text style={styles.spaceViewTimeCountDown}>:</Text>
          <View style={styles.timeCountDown}><Text style={styles.textTimeCountDown}>{(hour < 10) ? '0' + hour : hour}</Text></View>
          <Text style={styles.spaceViewTimeCountDown}>:</Text>
          <View style={styles.timeCountDown}><Text style={styles.textTimeCountDown}>{(minute < 10) ? '0' + minute : minute}</Text></View>
          <Text style={styles.spaceViewTimeCountDown}>:</Text>
          <View style={styles.timeCountDown}><Text style={styles.textTimeCountDown}>{(seconds < 10) ? '0' + seconds : seconds}</Text></View>
          <Text style={styles.textUpto}>Sale 50% Off</Text>
        </View> : <></>}
      <View>
        <Image source={require('../asset/image/PromotionImage.png')} style={{ width: '100%', borderRadius: 5, marginTop: 10 }} />
      </View>
      <FlatList
        style={{ height: '50%', width: '100%', marginTop: 10 }}
        renderItem={(object) => <RenderItem item={object.item} />}
        data={data}
        keyExtractor={(item: Product) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{
        }}
      />
    </View >

  )
}

export default OfferScreen

const styles = StyleSheet.create({
  imgIc: {
    width: '20%',
    marginLeft: 10,
    justifyContent: 'center',
  },
  txtSale: {
    color: 'red',
    fontSize: 17,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  txtOldPrice: {
    textDecorationLine: 'line-through', // Gạch ngang văn bản
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  sale: {
    width: '80%',
    flexDirection: 'row',
  },
  star: {
    width: '65%',
    marginTop: 5,
  },

  content: {
    padding: 15
  },
  NamePD: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'Helvetica Neue',
    color: 'black',
    margin: 1,
  },
  PricePD: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'Helvetica Neue',
    lineHeight: 24,
    color: '#4464C4',
  },
  ImgContainerPD: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '50%',
    borderRadius: 20,
  },
  in4Text: {
    marginTop: 5,
    width: '100%',
  },
  in4PD: {
    justifyContent: 'space-between',
    width: '100%',
    height: '50%',
    borderRadius: 5,
  },
  containerItemPD: {
    marginRight: 5,
    marginBottom: 5,
    height: 200,
    backgroundColor: 'green',
    width: '50%',
  },
  textUpto: {
    color: '#223263',
    fontSize: 22,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.50,
    alignSelf: 'center',
    marginLeft: 10
  },
  spaceViewTimeCountDown: {
    alignSelf: 'center',
    color: '#223263',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: 0.07
  },
  textTimeCountDown: {
    color: '#223263',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.50,
  },
  timeCountDown: {
    width: 40,
    height: 40,
    backgroundColor: '#4464C4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textTitlePage: {
    color: '#223263',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.50,
    marginLeft: 12
  }
})

const data = [
  {
    id: 1,
    img: 'http://dummyimage.com/72x72.png/dddddd/000000',
    name: 'Nike Air Max 270 React ENG',
    price: 29999,
  },
  {
    id: 2,
    img: 'http://dummyimage.com/72x72.png/dddddd/000000',
    name: 'Nike Air Max 270 React ENG',
    price: 2999,
  },
  {
    id: 3,
    img: 'http://dummyimage.com/72x72.png/dddddd/000000',
    name: 'Nike Air Max 270 React ENG',
    price: 2998,
  },
  {
    id: 4,
    img: 'http://dummyimage.com/72x72.png/dddddd/000000',
    name: 'Nike Air Max 270 React ENG',
    price: 2997,
  },
  {
    id: 5,
    img: 'http://dummyimage.com/72x72.png/dddddd/000000',
    name: 'Nike Air Max 270 React ENG',
    price: 2995,
  },
  {
    id: 6,
    img: 'http://dummyimage.com/72x72.png/dddddd/000000',
    name: 'Nike Air Max 270 React ENG',
    price: 2996,
  },
];