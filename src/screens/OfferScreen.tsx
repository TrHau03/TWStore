import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const OfferScreen = () => {
  const [day, setDay] = useState<number>();
  const [hour, setHour] = useState<number>();
  const [minute, setMinute] = useState<number>();
  const [seconds, setSeconds] = useState<number>();
  let endDate = new Date().getTime() + (1000 * 3600 * 48);
  useEffect(() => {
    let check = setInterval(function () {
      let now = new Date().getTime();
      let distance = endDate - now;
      let day = Math.floor(distance / (24 * 60 * 60 * 1000));
      let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
      let seconds = Math.floor((distance % (60 * 1000)) / 1000);
      setDay(day);
      setHour(hour);
      setMinute(minute);
      setSeconds(seconds);
      if (distance <= 0) {
        clearInterval(check);
      }
    }, 1000);
  }, [])


  return (
    <View style={{ paddingHorizontal: 17, paddingTop: 20 }}>
      <View style={{ flexDirection: 'row' }}>
        <Icon name='chevron-back-outline' size={25} />
        <Text style={styles.textTitlePage}>Super Flash Sale</Text>
        <Icon name='search-outline' size={25} style={{ position: 'absolute', right: 0 }} />
      </View>
      <View>
        <Text>{day}</Text>
        <Text>{hour}</Text>
        <Text>{minute}</Text>
        <Text>{seconds}</Text>
      </View>
    </View>
  )
}

export default OfferScreen

const styles = StyleSheet.create({
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