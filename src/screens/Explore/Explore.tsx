import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { CompositeNavigationProp, NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamListHome, RootStackScreenEnumHome } from '../../component/Root/RootStackHome';
<<<<<<< HEAD
import { StackNavigationProp } from '@react-navigation/stack';
import { RootTabParamList } from '../../component/BottomNavigation/RootTab/RootTab';
import { PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities/utility';
import { COLORS } from '../../utilities';
import AxiosInstance from '../../Axios/Axios';
import { AirbnbRating } from 'react-native-ratings';

=======
import { RootStackParamListExplore, RootStackScreenEnumExplore } from '../../component/Root/RootStackExplore';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList, RootTabScreenENum } from '../../component/BottomNavigation/RootTab/RootTab';
import { SelectList } from 'react-native-dropdown-select-list';
import { useDispatch, useSelector } from 'react-redux';
import { listRecommendeds, todoRemainingProducts } from '../../redux/silces/HomeSelector';
import HomeScreenSlice from '../../redux/silces/HomeScreenSlice';
import { PropsExplore } from '../../component/Navigation/Props';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
>>>>>>> parent of de3849d (23/11)

interface Category {
  id: number;
  img: any;
  name: string;
}
type BottomNavigationProp = CompositeNavigationProp<NavigationProp<RootTabParamList>, StackNavigationProp<RootStackParamListHome, RootStackScreenEnumHome>>;
const ExploreScreen = () => {
  const navigation = useNavigation<BottomNavigationProp>();

  const [textInputStatus, setTextInputStatus] = useState<boolean>(false);

<<<<<<< HEAD
=======
type ProfileScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<RootTabParamList, 'StackHome'>, StackNavigationProp<RootStackParamListHome, RootStackScreenEnumHome>>;
const ExploreScreen = ({ navigation }: NativeStackHeaderProps) => {
  console.log(navigation);

  const navigationProfile = useNavigation<ProfileScreenNavigationProp>();
  const textInputRef = useRef(null);
  const [click, setClick] = useState<boolean>(false);
  //redux
  const todoListProducts = useSelector(todoRemainingProducts);
>>>>>>> parent of de3849d (23/11)
  const [textInputSearch, setTextInputSearch] = useState<string>('');

<<<<<<< HEAD
  const [listProduct, setListProduct] = useState<[]>([]);

  useEffect(() => {
    const fetchListProduct = async () => {
      const response = await AxiosInstance().get('product/getAllProduct');
      setListProduct(response.data);
    }
    fetchListProduct();
  }, [])
=======
  const handleSearch = (e: any) => {
    setTextInputSearch(e);
    dispatch(
      HomeScreenSlice.actions.searchFilterChange(e)
    )
  }
>>>>>>> parent of 01c1d3d (minh dep trai 22/11)

<<<<<<< HEAD
  const renderItem = ({ item }: any): React.JSX.Element => {
=======
  const RenderItem = (props: any): React.JSX.Element => {
    const { data } = props;
    const { item } = data;
    return (
      <TouchableOpacity style={{ paddingVertical: 10, paddingLeft: 10, height: 50, borderWidth: 1 }}
        onPress={() => navigation.navigate(RootStackScreenEnumHome.HomeScreen)}>
        <Text style={styles.TextSearch}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  const renderItem = ({ item }: any): React.JSX.Element => {
    const { id, img, name } = item;
>>>>>>> parent of de3849d (23/11)
    return (
<<<<<<< HEAD
      <TouchableOpacity style={styles.containerItemPD}>
=======
      <TouchableOpacity
        style={styles.containerItemPD}
        onPress={() => navigation.navigate(RootStackScreenEnumExplore.Category_Detail)}
      >
>>>>>>> parent of 01c1d3d (minh dep trai 22/11)
        <View style={styles.content}>
          <View style={styles.ImgContainerPD}>
            <Image style={{ width: '100%', height: '100%' }} source={{ uri: item.image[0] }} />
          </View>
          <View style={styles.in4PD}>
            <View style={styles.in4Text}>
              <Text style={styles.NamePD} >{item.productName}</Text>
              <View style={styles.star}>
                <AirbnbRating count={5} size={15} showRating={false} />
              </View>
              <Text style={styles.PricePD}>{item.price}</Text>
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



  return (
    <View style={styles.container} >
      <View style={styles.top}>
        <View style={(!textInputStatus) ? styles.headerLeft : [styles.headerLeft, { borderColor: COLORS.gray }]}>
          <Icon name='search' size={22} />
          <TextInput
            placeholder="Search here"
            style={[styles.TextSearch]}
            onFocus={() => setTextInputStatus(true)}
            onBlur={() => setTextInputStatus(false)}
            onChangeText={setTextInputSearch}
            value={textInputSearch}
          />
          {(textInputStatus) ?
            <Pressable style={{ position: 'absolute', right: 5, backgroundColor: '#dbd9d9', borderRadius: 5 }}
              onPress={() => setTextInputSearch('')}
            >
              <Icon name='close' size={14} />
            </Pressable>
            : null}
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => navigation.navigate(RootStackScreenEnumHome.NotificationScreen)}>
            <Icon name="notifications-outline" size={25} />
          </TouchableOpacity>
        </View>
      </View>
<<<<<<< HEAD
      <FlatList
        data={listProduct}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item: any) => item?._id.toString()} />
=======
      {(click) ?
        <View>
          <FlatList
            renderItem={(item) => <RenderItem data={item} />}
            data={textInputSearch == "" ? null : todoListProducts}
            style={{ paddingVertical: 15, height: '100%', width: '100%' }}
          />
        </View>
        :
        <View>
          <View style={styles.Name}>
            <Text style={styles.txtName}>Man Shoes</Text>
            <FlatList
              data={DataMan}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              numColumns={4}
              showsVerticalScrollIndicator={false}
            />
          </View>

          <View style={styles.Name}>
            <Text style={styles.txtName}>Woman Shoes</Text>
            <FlatList
              data={DataWoman}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              numColumns={4}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      }

>>>>>>> parent of 01c1d3d (minh dep trai 22/11)

    </View>

  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
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

  TextSearch: {
    width: WIDTH / 2,
    justifyContent: 'center',
    marginLeft: 10,
    paddingVertical: 0,
  },
  imageSearch: {
    width: 20,
    height: 20
  },
  headerRight: {
    position: 'absolute',
    right: 0
  },
  headerLeft: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    borderColor: '#e1dede',
    alignItems: 'center',
    flexDirection: 'row',
    width: '85%',
    height: '85%'
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    paddingTop: PADDING_TOP,
    paddingHorizontal: PADDING_HORIZONTAL,
    backgroundColor: '#FFFFFF'
  }
});

const DataMan: Category[] = [
  {
    id: 1,
    img: require('../../asset/image/iconCategory.png'),
<<<<<<< HEAD
    name: 'Red Apple',
=======
    name: 'All Shoes',
>>>>>>> parent of 01c1d3d (minh dep trai 22/11)
  },
  {
    id: 2,
    img: require('../../asset/image/iconCategory.png'),
    name: 'Orginal',
  },
  {
    id: 3,
    img: require('../../asset/image/iconCategory.png'),
    name: 'Avocado',
  },
  {
    id: 4,
    img: require('../../asset/image/iconCategory.png'),
    name: 'Strawberry',
  },
  {
    id: 5,
    img: require('../../asset/image/iconCategory.png'),
    name: 'Orginal',
  },
  {
    id: 6,
    img: require('../../asset/image/iconCategory.png'),
    name: 'Red Apple',
  },
];

const DataWoman: Category[] = [
  {
    id: 1,
    img: require('../../asset/image/iconCategory.png'),
    name: 'Red Apple',
  },
  {
    id: 2,
    img: require('../../asset/image/iconCategory.png'),
    name: 'Orginal',
  },
  {
    id: 3,
    img: require('../../asset/image/iconCategory.png'),
    name: 'Avocado',
  },
  {
    id: 4,
    img: require('../../asset/image/iconCategory.png'),
    name: 'Strawberry',
  },
  {
    id: 5,
    img: require('../../asset/image/iconCategory.png'),
    name: 'Orginal',
  },
  {
    id: 6,
    img: require('../../asset/image/iconCategory.png'),
    name: 'Red Apple',
  },
];

const DataWoman: Category[] = [
  {
    id: 1,
    img: require('../../asset/image/iconCategory.png'),
    name: 'All Shoes',
  },
  {
    id: 2,
    img: require('../../asset/image/iconCategory.png'),
    name: 'Sneakers',
  },
  {
    id: 3,
    img: require('../../asset/image/iconCategory.png'),
    name: 'Lifestyle',
  },
  {
    id: 4,
    img: require('../../asset/image/iconCategory.png'),
    name: 'Scandels',
  },
  {
    id: 5,
    img: require('../../asset/image/iconCategory.png'),
    name: 'Running',
  },
  {
    id: 6,
    img: require('../../asset/image/iconCategory.png'),
    name: 'Sport',
  },
];

