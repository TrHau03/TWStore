import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { ROUTES } from '../../component/constants';
import { AirbnbRating } from 'react-native-ratings';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import { PropsExplore } from '../../component/Navigation/Props';
import { RootStackParamListExplore, RootStackScreenEnumExplore } from '../../component/Root/RootStackExplore';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, todoRemainingProducts } from '../../Redux/silces/HomeSelector';
import HomeScreenSlice from '../../Redux/silces/HomeScreenSlice';
import ButtonBottom from '../../component/Button/Button';
import * as Animatable from 'react-native-animatable';
import FilterScreen from './Filter';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import Octicons from 'react-native-vector-icons/Octicons';
import { fetchInitialListProductFilter } from '../../redux/silces/Silces';
interface Product {
  id: number;
  img: any;
  name: string;
  price: number;
  category: string;
}
interface ArrayProduct {
  category: string;
}
type NavigationProps = StackNavigationProp<RootStackParamListExplore, RootStackScreenEnumExplore>
const Category_Detail_Screen = (props: NativeStackHeaderProps) => {
  const { categoryID }: any = props.route.params;

  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    if (isFocused) {
      dispatch(fetchInitialListProductFilter(categoryID))
    }
  }, [isFocused])

  const [click, setClick] = useState<boolean>(false);
  const [dataFilter, setdataFilter] = useState<any>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [highLightBrand, setHighLightBrand] = useState<string>('');
  const [unEnableBrand, setUnEnableBrand] = useState<boolean>(false);
  const [highLightColor, setHighLightColor] = useState<string>('');
  const [unEnableColor, setUnEnableColor] = useState<boolean>(false);
  const [highLightSize, setHighLightSize] = useState<string>('');
  const [unEnableSize, setUnEnableSize] = useState<boolean>(false);
  const [sort, setSort] = useState<boolean>(false);
  const [color, setColor] = useState<string>('All');
  const [brand, setBrand] = useState<string>('All');
  const [size, setSize] = useState<string>('All');
  const [priceMin, setpriceMin] = useState<string>('0')
  const [priceMax, setpriceMax] = useState<string>('5000');

  //redux
  const [textInputSearch, setTextInputSearch] = useState<string>('');
  const todoListProducts = useSelector(todoRemainingProducts);
  const handleSearch = (e: any) => {
    setTextInputSearch(e);
    dispatch(
      HomeScreenSlice.actions.searchFilterChange(e)
    )
  }

  useEffect(() => {
    if (sort) {
      const newArray = todoListProducts.sort(function (a: { price: string; }, b: { price: string; }) {
        return parseFloat(a.price) - parseFloat(b.price);
      });
      setdataFilter(newArray);
    } else {
      const newArray = todoListProducts.sort(function (a: { price: string; }, b: { price: string; }) {
        return parseFloat(b.price) - parseFloat(a.price);
      });
      setdataFilter(newArray);
    }
  });

  const renderItem = ({ item }: any): React.JSX.Element => {
    const { image, productName, price, strikeThrough, offer, brand } = item;

    return (
      <TouchableOpacity onPress={() => navigation.navigate(RootStackScreenEnumExplore.Productdetail, { id: item._id })} style={styles.containerItemPD}>
        <View style={styles.content}>
          <View style={styles.ImgContainerPD}>
            <Image style={{ width: '100%', height: '100%' }} source={{ uri: image[0] }} />
          </View>
          <View style={styles.in4PD}>
            <View style={styles.in4Text}>
              <Text style={styles.NamePD}>{productName}</Text>
              <View style={styles.star}>
                <AirbnbRating count={5} size={15} showRating={false} />
              </View>
              {(offer > 0) ? <Text style={styles.PricePD}>{price}</Text> : <></>}
            </View>
            <View style={styles.sale}>
              <Text style={offer > 0 ? styles.txtOldPrice : styles.PricePD}>${price}</Text>
              <Text style={styles.txtSale}>{offer}% Off</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Modal
        transparent={false}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => true} >
        <View style={{ height: '85%' }}>
          <FilterScreen action={{ setModalVisible, setHighLightBrand, setUnEnableBrand, setHighLightColor, setUnEnableColor, setHighLightSize, setUnEnableSize, setBrand, setColor, setSize, setpriceMin, setpriceMax }} state={{ highLightBrand, modalVisible, unEnableBrand, highLightColor, unEnableColor, highLightSize, unEnableSize, brand, color, size, priceMin, priceMax }} />
          <Animatable.View animation={'bounceIn'} style={{ paddingHorizontal: 20, position: 'relative', bottom: 20 }}>
            <Pressable onPress={() => { setModalVisible(false) }}>
              <ButtonBottom title='Cancel' />
            </Pressable>
          </Animatable.View>
        </View>
      </Modal>
      <View style={styles.group}>
        <View
          style={!click ? styles.right : [styles.right, { borderColor: 'blue' }]}>
          <Icon name='search' size={20} />
          <TextInput
            placeholder="Search here"
            style={styles.TextSearch}
            onFocus={() => setClick(!click)}
            onBlur={() => setClick(!click)}
            onChangeText={handleSearch}
            value={textInputSearch}
          />
        </View>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => setSort(!sort)}>
            <Octicons name={!sort ? 'sort-asc' : 'sort-desc'} size={24} />
          </TouchableOpacity >
          <TouchableOpacity onPress={() => { setModalVisible(true) }}>
            <Icon name='filter' size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.product}>
        <View style={styles.product_Item}>
          <View>
            <Text
              style={{
                color: '#223263',
                fontSize: 18,
                fontFamily: 'Poppins',
                fontWeight: '700',
                lineHeight: 21.6,
                letterSpacing: 0.5,
                marginTop: 15,
                marginLeft: 10,
              }}>
              {dataFilter.length} result
            </Text>
          </View>
        </View>
        <FlatList
          style={{ marginTop: 10 }}
          data={dataFilter}
          renderItem={renderItem}
          keyExtractor={item => item._id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View >
  );
};

export default Category_Detail_Screen;

const styles = StyleSheet.create({
  dropdown1BtnStyle: {
    borderColor: '#444',
    width: 100,
    backgroundColor: 'transparent',
  },
  dropdown1BtnTxtStyle: {
    color: '#223263',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 21.6,
    letterSpacing: 0.5,
    textAlign: 'left',
  },
  dropdown1DropdownStyle: { borderRadius: 5, backgroundColor: '#E6E6E6' },
  dropdown1RowStyle: { borderBottomColor: '#C5C5C5' },
  dropdown1RowTxtStyle: {
    color: '#223263',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 21.6,
    letterSpacing: 0.5,
    textAlign: 'left',
  },

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
    width: '47%',
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
    gap: 10,
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
    height: 'auto',
    marginTop: 10,
    padding: 15,
    backgroundColor: '#fff',
    bottom: 10,
  },
});


