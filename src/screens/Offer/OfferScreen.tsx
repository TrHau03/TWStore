import { Animated, FlatList, Image, TextInput, ScrollView, StyleSheet, Text, Keyboard, View, Pressable } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import TimeCountDown from './TimeCountDown';





interface Product {
  id: number;
  img: any;
  name: string;
  price: number;
}



const RenderItem = ({ item }: { item: Product }) => {
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
        <Image style={{ width: '100%', height: 120, borderRadius: 5 }} source={{ uri: item.img }} />
      </View>
      <View style={{ width: '100%', height: 50, marginTop: 5 }}>
        <Text style={styles.NamePD}>{item.name}</Text>
      </View>
      <View>
        <Text style={styles.PricePD}>$299,43</Text>
        <View style={styles.sale}>
          <Text style={styles.txtOldPrice}>$534,33</Text>
          <Text style={styles.txtSale}>24% Off</Text>
        </View>
      </View>
    </View >
  )
}

const OfferScreen = () => {



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
        toValue: -320,
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
        duration: 300,
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

  return (
    <View style={{ paddingHorizontal: 17, paddingTop: 20 }}>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Animated.View style={[styles.header, { transform: [{ translateX: translateAnimHeader }] }]}>
          <Icon name='chevron-back-outline' size={25} />
          <Text style={styles.textTitlePage}>Super Flash Sale</Text>
        </Animated.View>
        <TextInputAnimated onSubmitEditing={() => {
          animationNone();
        }}
          ref={refInput}
          style={{ backgroundColor: 'red', alignSelf: 'center', paddingVertical: 0, position: 'absolute', width: '70%', height: 35, marginLeft: 40, transform: [{ scaleX: animTextInput }], opacity: animTextInput }}
          placeholder='Search' />
        <PressableAnimated style={{ position: 'absolute', right: 0, transform: [{ translateX: translateAnimSearch }] }} onPress={() => { animationFlex(); refInput?.current?.focus(); }} >
          <Icon name='search-outline' size={25} />
        </PressableAnimated>
      </View>

      <ScrollView style={{ marginBottom: 92 }} showsVerticalScrollIndicator={false} stickyHeaderIndices={[1]}>
        <TimeCountDown />
        <View>
          <Image source={require('../../asset/image/PromotionImage.png')} style={{ width: '100%', borderRadius: 5, marginBottom: 5, opacity: 1 }} />
        </View>
        <FlatList
          scrollEnabled={false}
          renderItem={(object) => <RenderItem item={object.item} />}
          data={data}
          keyExtractor={(item: Product) => item.id.toString()}
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
  header: {
    flexDirection: 'row',
  },
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