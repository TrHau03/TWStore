import {
  BackHandler,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  View,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Header from '../../component/Header/Header'
import { useDispatch, useSelector } from 'react-redux';
import HomeScreenSlice from '../../redux/silces/HomeScreenSlice';
import { COLORS } from '../../utilities';
import Button from '../../component/Button/Button';

interface Brand {
  _id: number;
  name: string;
}
interface Color {
  _id: number;
  name: string;
}
interface Size {
  _id: number;
  name: string;
}

const FilterScreen = (props: any) => {
  const { visibleSize, visibleColor, visibleBrand, unEnableBrand, highLightBrand, unEnableColor, highLightColor, unEnableSize, highLightSize, brand, color, size, priceMin, priceMax } = props.state;
  const { dispatch, setVisibleBrand, setVisibleColor, setVisibleSize, setModalVisible, setHighLightBrand, setUnEnableBrand, setHighLightColor, setUnEnableColor, setHighLightSize, setUnEnableSize, setBrand, setColor, setSize, setpriceMin, setpriceMax } = props.action;






  const handleFilter = (brand: string, color: string, size: string, minPrice: string, maxPrice: string) => {
    dispatch(HomeScreenSlice.actions.filterBrand(brand));
    dispatch(HomeScreenSlice.actions.filterColor(color));
    dispatch(HomeScreenSlice.actions.filterSize(size));
    dispatch(HomeScreenSlice.actions.filterPrice({ minPrice, maxPrice }))
    console.log(brand, color, size, minPrice, maxPrice);

  }


  const renderItemBrand = ({ item }: any) => {
    const { _id, name } = item;
    return (
      <TouchableOpacity style={{ width: '28%', borderWidth: 1, marginBottom: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, backgroundColor: highLightBrand == _id && unEnableBrand ? COLORS.blue : COLORS.white }}
        onPress={() => { !unEnableBrand ? setBrand(name) : setBrand('All'); setHighLightBrand(_id), setUnEnableBrand(!unEnableBrand) }}>
        <Text style={{ fontSize: 18 }}>{name}</Text>
      </TouchableOpacity>
    )
  }
  const renderItemColor = ({ item }: any) => {
    const { _id, name } = item;
    return (
      <TouchableOpacity style={{ width: '28%', borderWidth: 1, marginBottom: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, backgroundColor: highLightColor == _id && unEnableColor ? COLORS.blue : COLORS.white }}
        onPress={() => { !unEnableColor ? setColor(name) : setColor('All'); setHighLightColor(_id), setUnEnableColor(!unEnableColor) }}>
        <Text style={{ fontSize: 18 }}>{name}</Text>
      </TouchableOpacity>
    )
  }
  const renderItemSize = ({ item }: any) => {
    const { _id, name } = item;
    return (
      <TouchableOpacity style={{ width: '28%', borderWidth: 1, marginBottom: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, backgroundColor: highLightSize == _id && unEnableSize ? COLORS.blue : COLORS.white }}
        onPress={() => { !unEnableSize ? setSize(name) : setSize('All'); setHighLightSize(_id), setUnEnableSize(!unEnableSize) }}>
        <Text style={{ fontSize: 18 }}>{name}</Text>
      </TouchableOpacity>
    )
  }


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.filterPrice}>
          <Text
            style={{
              width: '100%',
              fontSize: 20,
              marginBottom: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Price Range
          </Text>
          <View style={styles.input}>
            <View style={styles.Price}>
              <Text style={styles.textPrice}>{priceMin}$</Text>
            </View>
            <View style={styles.Price}>
              <Text style={styles.textPrice}>{priceMax}$</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',

          }}>
          <MultiSlider
            values={[0, 5000]}
            sliderLength={300}
            min={0}
            max={5000}
            step={100}
            allowOverlap={false}
            snapped
            onValuesChangeFinish={(e) => { setpriceMin(e[0].toString()); setpriceMax(e[1].toString()) }}
          />
        </View>

        <View style={styles.BuyingFormat}>
          {/*brand */}
          <View style={styles.Format}>
            <Text style={styles.txtBuyingFormat}>Brand</Text>
            <Pressable onPress={() => setVisibleBrand(!visibleBrand)}>
              <Icon name={!visibleBrand ? 'chevron-down-outline' : 'chevron-up-outline'} size={25} color={'#9098B1'} />
            </Pressable>
          </View>
          {visibleBrand &&
            <FlatList
              data={DataBrand}
              columnWrapperStyle={{ justifyContent: 'center', gap: 15 }}
              numColumns={3}
              renderItem={renderItemBrand}
              keyExtractor={(item) => item._id.toString()}
              style={{ top: 10 }}
            />}

          {/*Color */}
          <View style={styles.Format}>
            <Text style={styles.txtBuyingFormat}>Color</Text>
            <Pressable onPress={() => setVisibleColor(!visibleColor)}>
              <Icon name={!visibleColor ? 'chevron-down-outline' : 'chevron-up-outline'} size={25} color={'#9098B1'} />
            </Pressable>
          </View>
          {visibleColor &&
            <FlatList
              data={DataColor}
              columnWrapperStyle={{ justifyContent: 'center', gap: 15 }}
              numColumns={3}
              renderItem={renderItemColor}
              keyExtractor={(item) => item._id.toString()}
              style={{ top: 10 }}
            />}

          {/*Size */}
          <View style={styles.Format}>
            <Text style={styles.txtBuyingFormat}>Size</Text>
            <Pressable onPress={() => setVisibleSize(!visibleSize)}>
              <Icon name={!visibleSize ? 'chevron-down-outline' : 'chevron-up-outline'} size={25} color={'#9098B1'} />
            </Pressable>
          </View>
          {visibleSize &&
            <FlatList
              data={DataSize}
              columnWrapperStyle={{ justifyContent: 'center', gap: 15 }}
              numColumns={3}
              renderItem={renderItemSize}
              keyExtractor={(item) => item._id.toString()}
              style={{ top: 10 }}
            />}
        </View>
      </View>

      <Pressable style={{ bottom: 80, paddingHorizontal: 5 }} onPress={() => { handleFilter(brand, color, size, priceMin, priceMax); setModalVisible(false),setVisibleBrand(false), setVisibleColor(false),setVisibleSize(false) }}>
        <Button title='Apply' />
      </Pressable>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  Price: {
    borderWidth: 0.7,
    width: 90,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  btnApply: {
    width: '100%',
    height: 50
  },

  Format: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  txtBuyingFormat: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  BuyingFormat: {
    width: '100%',
    marginTop: 25,
    height: "auto",
    gap: 10
  },
  btnNew: {
    padding: 15,
    borderWidth: 0.3,
    borderColor: '#EBF0FF',
    marginLeft: 15,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10
  },

  txtCondition: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  Condition: {
    marginTop: 10,
    width: '100%',
  },
  textPrice: {
    marginHorizontal: 14,
    color: '#9098B1',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 21.60,
    letterSpacing: 0.50,
  },
  input: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  filterPrice: {
    width: '100%',
  },
  content: {
    width: '100%',
    marginTop: 10,
    height: '100%'
  },
  iconBack: {
    width: '100%',
    height: '5%',
  },
  container: {
    padding: 15,
    width: '100%',
  },
});

const DataBrand: Brand[] =
  [
    { _id: 1, name: 'Nike' },
    { _id: 2, name: 'Adidas' },
    { _id: 3, name: 'Puma' },
    { _id: 4, name: 'Gucci' },
    { _id: 5, name: 'LV' },
    { _id: 6, name: 'Bargana' },
  ];
const DataColor: Color[] =
  [
    { _id: 1, name: 'Black' },
    { _id: 2, name: 'White' },
    { _id: 3, name: 'Red' },
    { _id: 4, name: 'Yellow' },
    { _id: 5, name: 'Blue' },
    { _id: 6, name: 'Purple' },
  ];
const DataSize: Size[] =
  [
    { _id: 1, name: '36' },
    { _id: 2, name: '37' },
    { _id: 3, name: '38' },
    { _id: 4, name: '39' },
    { _id: 5, name: '40' },
    { _id: 6, name: '41' },
    { _id: 7, name: '42' },
    { _id: 8, name: '43' },
    { _id: 9, name: '44' },
    { _id: 10, name: '45' },
    { _id: 10, name: '46' },
  ];