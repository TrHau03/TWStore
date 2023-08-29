import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';
import { AirbnbRating } from 'react-native-ratings';
import Header from '../component/Header/Header';
import { ScrollView } from 'react-native-gesture-handler';
interface Product {
  id: number;
  img: any;
  name: string;
  price: number;
}


const renderItem = ({item}: any): React.JSX.Element => {
  function calculateSalePrice(product: Product, discountPercent: number): number {
    const discountAmount = (product.price * discountPercent) / 100;
    const salePrice = product.price - discountAmount;
    return salePrice;
  }
  
  const {id, img, name, price} = item;

  return (
    <TouchableOpacity style={styles.containerItemPD}>
      <View style={styles.content}>
        <View style={styles.ImgContainerPD}>
          <Image style={{width:  '100%', height: '100%'}} source={img} />
        </View>
        <View style={styles.in4PD}>
          <View style={styles.in4Text}>
            <Text style={styles.NamePD}>{name}</Text>
            <View style={styles.star}>
              <AirbnbRating count={5} size={15} showRating={false}/>
            </View>
            <Text style={styles.PricePD}>{price}</Text>
          </View>
          <View style={styles.sale}>
            <Text style={styles.txtOldPrice}>5000</Text>
            <Text style={styles.txtSale}>24% Off</Text>
            <TouchableOpacity style={styles.imgIc}>
              <Icon name="trash-outline" size={25}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Favorite = () => {

  return (
    <ScrollView style={styles.container}>
      <Header/>
      <FlatList
        data={DataProduct}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  imgIc:{
    width:'20%',
    marginLeft: 10,
    justifyContent: 'center',
  },
  txtSale:{
    color: 'red',
    fontSize: 17,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  txtOldPrice:{
    textDecorationLine: 'line-through', // Gạch ngang văn bản
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  sale:{
    width: '80%',
    flexDirection: 'row',
  },
  star:{
    width: '65%',
    marginTop: 5,
  },

  content:{
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
    width: 185,
    height: 300,
    backgroundColor: '#FFFFFF',
    margin: 5,
    borderRadius: 5,
    shadowColor: '#C4C4C4',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

const DataProduct: Product[] = [
  {
    id: 1,
    img: require('../asset/image/imgProduct.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 29999,
  },
  {
    id: 2,
    img: require('../asset/image/imgProduct3.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2999,
  },
  {
    id: 3,
    img: require('../asset/image/imgProduct1.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2998,
  },
  {
    id: 4,
    img: require('../asset/image/imgProduct2.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2997,
  },
  {
    id: 5,
    img: require('../asset/image/imgProduct3.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2995,
  },
  {
    id: 6,
    img: require('../asset/image/imgProduct2.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2996,
  },
  {
    id: 7,
    img: require('../asset/image/imgProduct2.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2996,
  },
  {
    id: 8,
    img: require('../asset/image/imgProduct2.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2996,
  },
];
