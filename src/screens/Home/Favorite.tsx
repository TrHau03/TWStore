import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';
import { AirbnbRating } from 'react-native-ratings';
import Header from '../../component/Header/Header';
import { PropsHome } from '../../component/Navigation/Props';
import { SafeAreaView } from 'react-native-safe-area-context';
import { configTab } from '../../component/BottomNavigation/RootTab/RootTab';
import { BG_COLOR, PADDING_HORIZONTAL, PADDING_TOP } from '../../utilities/utility';
interface Product {
  id: number;
  img: any;
  name: string;
  price: number;
}


const renderItem = ({ item }: any): React.JSX.Element => {
  const { id, img, name, price } = item;

  return (
    <TouchableOpacity style={styles.containerItemPD}>
      <View style={styles.content}>
        <View style={styles.ImgContainerPD}>
          <Image style={{ width: '100%', height: '100%' }} source={img} />
        </View>
        <View style={styles.in4PD}>
          <View style={styles.in4Text}>
            <Text style={styles.NamePD} >{name}</Text>
            <View style={styles.star}>
              <AirbnbRating count={5} size={15} showRating={false} />
            </View>
            <Text style={styles.PricePD}>{price}</Text>
          </View>
          <View style={styles.sale}>
            <Text style={styles.txtOldPrice}>5000</Text>
            <Text style={styles.txtSale}>24% Off</Text>
            <TouchableOpacity style={styles.imgIc}>
              <Icon name="trash-outline" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');
const FavoriteScreen = ({ navigation }: PropsHome) => {
  const animatedHeader = useRef(new Animated.Value(0)).current;
  useEffect(() => {
  }, [animatedHeader])
  const animationHeader = [{
    opacity: animatedHeader.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        translateX: animatedHeader.interpolate({
          inputRange: [0, 50],
          outputRange: [0, -250],
          extrapolate: 'clamp'
        })
      }
    ]
  }]
  const animationSearh = [{
    opacity: animatedHeader.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        translateX: animatedHeader.interpolate({
          inputRange: [0, 50],
          outputRange: [2520, -50],
          extrapolate: 'clamp'
        })
      }
    ]
  }]
  let currentOffset = 0;
  let direction: string;

  return (
    <SafeAreaView>
      <View style={styles.container} >
        <View style={{ flexDirection: 'row' }}>
          <Animated.View style={[animationHeader, styles.header]}>
            <Header title='Favorite' navigation={navigation} />
          </Animated.View>
          <Animated.View
            style={[animationSearh, { borderColor: 'black', borderWidth: 0.5, width: '70%', flexDirection: 'row', alignItems: 'center', paddingVertical: 2, paddingHorizontal: 5, borderRadius: 5 }]}
          >
            <Icon name='search' size={20} />
            <TextInput placeholder='Search' style={{ paddingVertical: 0, width: '70%' }} />
          </Animated.View>
        </View>
        <FlatList
          onScroll={e => {
            animatedHeader.setValue(e.nativeEvent.contentOffset.y);
            direction = e.nativeEvent.contentOffset.y > currentOffset ? 'down' : 'up';
            currentOffset = e.nativeEvent.contentOffset.y;
            if (direction == 'down' && currentOffset > 0) {
              navigation?.getParent()?.setOptions({ tabBarStyle: { display: 'none' } })
            } else {
              navigation?.getParent()?.setOptions({ tabBarStyle: { display: 'flex' } })
            }
          }
          }

          scrollEventThrottle={16}
          nestedScrollEnabled={true}
          style={{ marginTop: 20, marginBottom: 70 }}
          data={DataProduct}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: PADDING_TOP,
    backgroundColor: BG_COLOR
  },
  imgIc: {
    width: '20%',
    marginLeft: 10,
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
    width: '70%',
    marginTop: 5,
  },

  content: {
    padding: 5,
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
  in4Text: {
    marginTop: 5,
    width: '100%',
  },
  ImgContainerPD: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '50%',
    borderRadius: 20,
  },

  in4PD: {
    justifyContent: 'space-between',
    width: '100%',
    height: '50%',
    borderRadius: 5,
  },
  containerItemPD: {
    borderWidth: 0.5,
    width: WIDTH * 0.44,
    height: 280,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#C4C4C4',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: 5,
    marginBottom: 5
  },
});

const DataProduct: Product[] = [
  {
    id: 1,
    img: require('../../asset/image/imgProduct.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 29999,
  },
  {
    id: 2,
    img: require('../../asset/image/imgProduct3.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2999,
  },
  {
    id: 3,
    img: require('../../asset/image/imgProduct1.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2998,
  },
  {
    id: 4,
    img: require('../../asset/image/imgProduct2.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2997,
  },
  {
    id: 5,
    img: require('../../asset/image/imgProduct3.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2995,
  },
  {
    id: 6,
    img: require('../../asset/image/imgProduct2.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2996,
  },
  {
    id: 7,
    img: require('../../asset/image/imgProduct2.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2996,
  },
  {
    id: 8,
    img: require('../../asset/image/imgProduct2.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2996,
  },
];
