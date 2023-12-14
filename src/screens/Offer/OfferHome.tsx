import { StyleSheet, Text, View, ImageBackground, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import AxiosInstance from '../../Axios/Axios'
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { RootStackScreenEnumOffer } from '../../component/Root/RootStackOffer';
import { useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const OfferHome = ({ navigation }: NativeStackHeaderProps) => {

  const [event, setEvent] = useState<[]>([]);
  const [couponHighest, setCouponHighest] = useState<any>();

  const isFocused = useIsFocused();


  useEffect(() => {
    const fetchEvent = async () => {
      const response = await AxiosInstance().get(`event/getAllEvent`);
      const coupon = await AxiosInstance().get(`promotion/getCouponHighest`);
      setCouponHighest(coupon.data);
      setEvent(response.data.filter((item: any) => {
        return new Date(item.soNgayGiamgia).getTime() > new Date().getTime();
      }));
    }
    if (isFocused) {
      fetchEvent();
    }
  }, [isFocused])


  const renderItem = ({ item }: any) => {
    return (
      <Pressable onPress={() => navigation.navigate(RootStackScreenEnumOffer.OfferScreen, { item })}>
        <ImageBackground
          source={{ uri: item.eventImage }}
          style={styles.backgroundimg}>
          <Text style={styles.textbackgroundimg}>{item.eventName}</Text>
        </ImageBackground>
      </Pressable>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.cupon}>
        <Text style={styles.textcupon}>Use “{couponHighest?.discountCode}” Coupon For Get {couponHighest?.discountLevel}%off</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={event}
        keyExtractor={(item: any) => item._id.toString()}
        renderItem={renderItem} />
    </View>
  )
}

export default OfferHome
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
    marginTop: 15,
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