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
import { PropsExplore } from '../../component/Navigation/Props';
import Item from '@ant-design/react-native/lib/list/ListItem';
import { todoRemainingProducts } from '../../redux/silces/HomeSelector';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { COLORS } from '../../utilities';

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
  const { unEnableBrand, highLightBrand, unEnableColor, highLightColor, unEnableSize, highLightSize } = props.state;
  console.log("brand", unEnableBrand);

  const { setModalVisible, setHighLightBrand, setUnEnableBrand, setHighLightColor, setUnEnableColor, setHighLightSize, setUnEnableSize } = props.action;
  const [visibleBrand, setVisibleBrand] = useState<boolean>(false);
  const [visibleColor, setVisibleColor] = useState<boolean>(false);
  const [visibleSize, setVisibleSize] = useState<boolean>(false);
  const [sliderValues, setSliderValues] = useState<any>([25, 75]);
  const dispatch = useDispatch();


  const handleSliderChange = (values: any) => {
    setSliderValues(values);
  };

  const [sliderValue, setSliderValue] = useState(0);

  const handleTextInputChange = (text: any) => {
    const parsedValue = parseFloat(text);
    if (!isNaN(parsedValue)) {
      setSliderValue(parsedValue);
      console.log(sliderValue);

    }
  };

  const handleBrand = (brand: any) => {
    dispatch(
      HomeScreenSlice.actions.statusFilterChange(brand)
    )
  }
  const handleColor = (color: any) => {
    dispatch(
      HomeScreenSlice.actions.statusFilterChange(color)
    )
  }
  const handleSize = (size: any) => {
    dispatch(
      HomeScreenSlice.actions.statusFilterChange(size)
    )
  }

  const renderItemBrand = ({ item }: any) => {
    const { _id, name } = item;
    return (
      <TouchableOpacity style={{ width: '28%', borderWidth: 1, marginBottom: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, backgroundColor: highLightBrand == _id && unEnableBrand ? COLORS.blue : COLORS.white }}
        onPress={() => { setModalVisible(false); handleBrand(!unEnableBrand ? name : 'All'); setHighLightBrand(_id), setUnEnableBrand(!unEnableBrand) }}>
        <Text style={{ fontSize: 18 }}>{name}</Text>
      </TouchableOpacity>
    )
  }
  const renderItemColor = ({ item }: any) => {
    const { _id, name } = item;
    return (
      <TouchableOpacity style={{ width: '28%', borderWidth: 1, marginBottom: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, backgroundColor: highLightColor == _id && unEnableColor ? COLORS.blue : COLORS.white }}
        onPress={() => { setModalVisible(false); handleColor(!unEnableColor ? name : 'All'); setHighLightColor(_id), setUnEnableColor(!unEnableColor) }}>
        <Text style={{ fontSize: 18 }}>{name}</Text>
      </TouchableOpacity>
    )
  }
  const renderItemSize = ({ item }: any) => {
    const { _id, name } = item;
    return (
      <TouchableOpacity style={{ width: '28%', borderWidth: 1, marginBottom: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, backgroundColor: highLightSize == _id && unEnableSize ? COLORS.blue : COLORS.white }}
        onPress={() => { setModalVisible(false); handleSize(!unEnableSize ? name : 'All'); setHighLightSize(_id), setUnEnableSize(!unEnableSize) }}>
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
            <View style={styles.minPrice}>
              <TextInput />
            </View>
            <View style={styles.maxPrice}>
              <TextInput />
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
            values={sliderValues}
            sliderLength={300}
            onValuesChange={handleSliderChange}
            min={0}
            max={100}
            step={1}
            allowOverlap={false}
            snapped
          />
          <View style={styles.text}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>
              Min
            </Text>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>
              Max
            </Text>
          </View>
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
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({

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
  text: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  maxPrice: {
    borderWidth: 0.3,
    height: 50,
    width: '40%',
    marginRight: 20,
  },
  minPrice: {
    borderWidth: 0.3,
    height: 50,
    width: '40%',
    marginLeft: 20,
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