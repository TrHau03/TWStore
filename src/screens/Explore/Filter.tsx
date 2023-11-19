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

const FilterScreen = (props: any) => {
  const { unEnableBrand, highLightBrand } = props.state;
  console.log("brand", unEnableBrand);

  const { setModalVisible, setHighLightBrand, setUnEnableBrand } = props.action;
  const [visibleBrand, setVisibleBrand] = useState<boolean>(false);
  const [sliderValues, setSliderValues] = useState<any>([25, 75]);
  const dispatch = useDispatch();
  const [filterStatus, setFilterStatus] = useState('All');
  const todoListProducts = useSelector(todoRemainingProducts);


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
    setFilterStatus(brand);
    dispatch(
      HomeScreenSlice.actions.statusFilterChange(brand)
    )
  }

  const renderItemBrand = ({ item }: any) => {
    const { _id, name } = item;
    return (
      <TouchableOpacity style={{ width: '28%', borderWidth: 1, marginBottom: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, backgroundColor: highLightBrand == _id && unEnableBrand ? COLORS.blue : COLORS.white }} onPress={() => { setModalVisible(false); handleBrand(!unEnableBrand ? name : 'All'); setHighLightBrand(_id), setUnEnableBrand(!unEnableBrand) }}>
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
          <View style={styles.Format}>
            <Text style={styles.txtBuyingFormat}>Brand</Text>
            <Pressable style={{ position: 'absolute', right: 10 }} onPress={() => setVisibleBrand(!visibleBrand)}>
              <Icon name={!visibleBrand ? 'chevron-forward-outline' : 'chevron-back-outline'} size={25} color={'#9098B1'} />
            </Pressable>
          </View>
          {visibleBrand &&
            <FlatList
              data={DataBrand}
              columnWrapperStyle={{ justifyContent: 'center', gap: 15 }}
              numColumns={3}
              renderItem={renderItemBrand}
              keyExtractor={(item) => item._id.toString()}
            />}
        </View>
        <TouchableOpacity style={styles.btnApply}>
          <Text>Apply</Text>
        </TouchableOpacity>
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
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    marginBottom: 10
  },
  txtBuyingFormat: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  BuyingFormat: {
    width: '100%',
    marginTop: 25,
    height: "auto"
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