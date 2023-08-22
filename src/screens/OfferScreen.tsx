import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';









const renderItem = () => {
  return (
    <View></View>
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
          <View style={styles.timeCountDown}><Text style={styles.textTimeCountDown}>{(day < 10) ? '0' + day : day}</Text></View>
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
        renderItem={renderItem}
        data={null}
      />
    </View >
  )
}

export default OfferScreen

const styles = StyleSheet.create({
  textUpto: {
    color: '#223263',
    fontSize: 25,
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
  {}
]