import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {ROUTES} from '../../component/constants';
import {AirbnbRating} from 'react-native-ratings';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';

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
const dataArray: ArrayProduct[] = [
  {category: 'All'},
  {category: 'Man Shoes'},
  {category: 'Women Shoes'},
];

const Category_Detail_Screen = ({navigation}: any) => {
  const [click, setClick] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('All');
  const [dataFilter, setdataFilter] = useState<any>([]);

  useEffect(() => {
    console.log('render');
    if (filter == 'All') {
      setdataFilter(DataProduct)
    } else {
      setdataFilter(
        DataProduct.filter(product => {
          return product.category == filter;
        }),
      );
    }
    console.log(dataFilter);
  }, [filter]);

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
          <Icon name='search' size={20}/>
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
              source={require('../../asset/image/Shorticon.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.FILTER)}>
          <Icon name='filter' size={20}/>
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

          <View>
            <Text style={{}}>
              <SelectDropdown
                data={dataArray}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);

                  setFilter(selectedItem.category);
                }}
                defaultButtonText={filter}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.category;
                }}
                rowTextForSelection={(item, index) => {
                  return item.category;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return (
                    <Icon
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
            </Text>
          </View>
        </View>
        <FlatList
          style={{marginTop: 10}}
          data={dataFilter}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
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
  dropdown1DropdownStyle: {borderRadius: 5, backgroundColor: '#E6E6E6'},
  dropdown1RowStyle: {borderBottomColor: '#C5C5C5'},
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
    img: require('../../asset/image/imgProduct.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 29999,
    category: 'Man Shoes',
  },
  {
    id: 2,
    img: require('../../asset/image/imgProduct3.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2999,
    category: 'Women Shoes',
  },
  {
    id: 3,
    img: require('../../asset/image/imgProduct1.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2998,
    category: 'Man Shoes',
  },
  {
    id: 4,
    img: require('../../asset/image/imgProduct2.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2997,
    category: 'Women Shoes',
  },
  {
    id: 5,
    img: require('../../asset/image/imgProduct3.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2995,
    category: 'Man Shoes',
  },
  {
    id: 6,
    img: require('../../asset/image/imgProduct2.png'),
    name: 'Nike Air Max 270 React ENG',
    price: 2996,
    category: 'Women Shoes',
  },
];
