import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ROUTES} from '../constants';
import {AirbnbRating} from 'react-native-ratings';
interface Product {
  id: number;
  img: any;
  name: string;
  price: number;
}
const Categori_Detail = ({navigation}: any) => {
  const [click, setClick] = useState<boolean>(false);

  const renderItem = ({item}: any): React.JSX.Element => {

    const {id, img, name, price} = item;

    return (
      <TouchableOpacity style={styles.containerItemPD}>
        <View style={styles.content}>
          <View style={styles.ImgContainerPD}>
            <Image style={{width: '100%', height: '100%'}} source={img} />
          </View>
          <View style={styles.in4PD}>
            <View style={styles.in4Text}>
              <Text style={styles.NamePD}>{name}</Text>
              <View style={styles.star}>
                <AirbnbRating count={5} size={15} showRating={false} />
              </View>
              <Text style={styles.PricePD}>{price}</Text>
            </View>
            <View style={styles.sale}>
              <Text style={styles.txtOldPrice}>5000</Text>
              <Text style={styles.txtSale}>24% Off</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View
          style={!click ? styles.right : [styles.right, {borderColor: 'blue'}]}>
          <Image
            source={require('../asset/image/ic-search.png')}
            style={styles.imageSearch}
          />
          <TextInput
            placeholder="Search"
            style={styles.TextSearch}
            onFocus={() => setClick(true)}
            onBlur={() => setClick(false)}
          />
        </View>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.SHORTBY)}>
            <Image
              source={require('../asset/image/Shorticon.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.FILTER)}>
            <Image
              source={require('../asset/image/Filter.png')}
              style={{width: 25, height: 25, marginLeft: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.product}>
        <View style={styles.product_Item}>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                marginTop: 10,
                marginLeft: 10,
              }}>
              162 result
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                marginTop: 10,
                marginRight: 10,
              }}>
              
              fdshgkj

            </Text>
          </View>
          
        </View>
        <FlatList
          style={{marginTop: 10}}
          data={DataProduct}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Categori_Detail;

const styles = StyleSheet.create({
  product_Item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  product: {
    width: '100%',
    height: '90%',
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
    width: '100%',
    padding: 15,
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
    borderWidth: 1,
    width: 180,
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

  TextSearch: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  imageSearch: {
    width: 20,
    height: 20,
  },
  left: {
    flexDirection: 'row',
    marginLeft: 10,
    width: '20%',
    height: '100%',
    alignItems: 'center',
  },

  right: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    borderColor: '#EBF0FF',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
    height: '100%',
  },
  group: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
  },
  container: {
    height: '100%',
    marginTop: 10,
    padding: 15,
    backgroundColor: '#fff',
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
];
