import { Animated, FlatList, Image, TextInput, ScrollView, StyleSheet, Text, Keyboard, View, Pressable, NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import TimeCountDown from './TimeCountDown';
import { BG_COLOR, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities/utility';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';





interface Product {
  _id: string;
  image: any;
  productName: string;
  price: number;
}



const RenderItem = ({ item, offer }: { item: Product; offer: any }) => {
  return (
    // <View style={styles.containerItemPD}>
    //   {/* <View style={styles.content}>
    //     <View style={styles.ImgContainerPD}>
    //       <Image style={{ width: '100%', height: '100%' }} source={{ uri: item.img }} />
    //     </View>
    //     <View style={styles.in4PD}>
    //       <View style={styles.in4Text}>
    //         <Text style={styles.NamePD}>{item.name}</Text>
    //         <View style={styles.star}>
    //           <AirbnbRating count={5} size={15} showRating={false} />
    //         </View>
    //         <Text style={styles.PricePD}>{item.price}</Text>
    //       </View>
    //       <View style={styles.sale}>
    //         <Text style={styles.txtOldPrice}>5000</Text>
    //         <Text style={styles.txtSale}>24% Off</Text>
    //         <TouchableOpacity style={styles.imgIc}>
    //           <Icon name="trash-outline" size={25} />
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //   </View> */}

    // </View>
    <View style={styles.containerItemPD} >
      <View>
        <Image style={{ width: '100%', height: 120, borderRadius: 5 }} source={{ uri: item.image[0] }} />
      </View>
      <View style={{ width: '100%', height: 50, marginTop: 5 }}>
        <Text style={styles.NamePD}>{item.productName}</Text>
      </View>
      <View>
        <Text style={styles.PricePD}>${item.price * (1 - (offer / 100))}</Text>
        <View style={styles.sale}>
          <Text style={styles.txtOldPrice}>${item.price}</Text>
          <Text style={styles.txtSale}>{offer}% Off</Text>
        </View>
      </View>
    </View >
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
  // useEffect(() => {
  //   console.log('render');
  //   let setTimeCountDown = setInterval(function () {
  //     let now = new Date().getTime();
  //     let distance = endDate - now;
  //     let day = Math.floor(distance / (24 * 60 * 60 * 1000));
  //     let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  //     let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
  //     let seconds = Math.floor((distance % (60 * 1000)) / 1000);
  //     setDay(day);
  //     setHour(hour)
  //     setMinute(minute);
  //     setSeconds(seconds);
  //     if (distance <= 0) {
  //       clearInterval(setTimeCountDown);
  //       sethideCountDown(true);
  //     }
  //   }, 1000);
  // }, []);
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
        <Image source={require('../../asset/image/PromotionImage.png')} style={{ width: '100%', borderRadius: 5, marginTop: 10 }} />
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
const OfferScreen = (props: NativeStackHeaderProps) => {
  const { item }: any = props.route.params;
  const { navigation } = props
  const [search, setSearch] = useState<string>('');
  const [listProductSale, setListProductSale] = useState<[]>([])
  useEffect(() => {
    const listProduct = item.product.filter((item: any) => {
      return item.productName.toLowerCase().includes(search.toLowerCase());
    });
    setListProductSale(listProduct);
  }, [search])

  const translateAnimHeader = useRef(new Animated.Value(0)).current;
  const translateAnimSearch = useRef(new Animated.Value(0)).current;
  const animTextInput = useRef(new Animated.Value(0)).current;
  const PressableAnimated = Animated.createAnimatedComponent(Pressable);
  const TextInputAnimated = Animated.createAnimatedComponent(TextInput);
  const refInput = useRef<TextInput>(null);

  const animationFlex = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.parallel([
      Animated.timing(translateAnimHeader, {
        toValue: -200,
        duration: 200,
        useNativeDriver: true,
      }),
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(translateAnimSearch, {
        toValue: -295,
        duration: 500,
        useNativeDriver: true,
      }),
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(animTextInput, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      })
    ]).start();
  }

  const animationNone = () => {
    Animated.parallel([
      Animated.timing(translateAnimHeader, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(translateAnimSearch, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(animTextInput, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      })
    ]).start();
  }
  const setTextSearch = (e: string) => {
    setTimeout(() => {
      setSearch(e);
    }, 1000);
  }

  return (
    <View style={{ paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_TOP, backgroundColor: BG_COLOR }}>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Animated.View style={[styles.header, { transform: [{ translateX: translateAnimHeader }] }]}>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name='chevron-back-outline' size={25} />
          </Pressable>
          <Text style={styles.textTitlePage}>Super Flash Sale</Text>
        </Animated.View>
        <TextInputAnimated onSubmitEditing={(e) => {
          animationNone();
          setTextSearch(e.nativeEvent.text);
        }}
          ref={refInput}
          style={{ alignSelf: 'center', fontSize: 17, borderBottomWidth: 0.5, paddingVertical: 0, position: 'absolute', width: '80%', height: 35, marginLeft: 40, transform: [{ scaleX: animTextInput }], opacity: animTextInput }}
          placeholder='Search'
        />
        <PressableAnimated style={{ position: 'absolute', right: 0, transform: [{ translateX: translateAnimSearch }] }} onPress={() => { animationFlex(); refInput?.current?.focus(); }} >
          <Icon name='search-outline' size={25} />
        </PressableAnimated>
      </View>

      <ScrollView style={{ marginBottom: 35, marginTop: 10 }} showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
        <TimeCountDown item={item} />
        <View>
          <Image source={{ uri: item.eventImage }} style={{ width: '100%', height: 180, borderRadius: 5, marginBottom: 5, opacity: 1 }} />
        </View>
        <FlatList
          scrollEnabled={false}
          renderItem={(object) => <RenderItem item={object.item} offer={item.levelGiamgia} />}
          data={listProductSale}
          keyExtractor={(item: Product) => item._id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{
          }}
        />
      </ScrollView>
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
    alignItems: 'center'
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
    height: 250,
    width: '47%',
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#c2c2c2',
    borderRadius: 5,
    marginLeft: 5
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