import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { CompositeNavigationProp, CompositeScreenProps, useNavigation } from '@react-navigation/native';
import { RootStackParamListHome, RootStackScreenEnumHome } from '../../component/Root/RootStackHome';
import { RootStackParamListExplore, RootStackScreenEnumExplore } from '../../component/Root/RootStackExplore';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList, RootTabScreenENum } from '../../component/BottomNavigation/RootTab/RootTab';
import { SelectList } from 'react-native-dropdown-select-list';
import { useDispatch, useSelector } from 'react-redux';
import { listRecommendeds, todoRemainingProducts, todoRemainingRecomendeds } from '../../redux/silces/HomeSelector';
import HomeScreenSlice from '../../redux/silces/HomeScreenSlice';
import { PropsExplore } from '../../component/Navigation/Props';

interface Category {
  id: number;
  img: any;
  name: string;
}


type NavigationProps = StackNavigationProp<RootStackParamListExplore, RootStackScreenEnumExplore>
type ProfileScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<RootTabParamList, 'StackHome'>, StackNavigationProp<RootStackParamListHome, RootStackScreenEnumHome>>;
const ExploreScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const navigationProfile = useNavigation<ProfileScreenNavigationProp>();
  const textInputRef = useRef(null);
  const [click, setClick] = useState<boolean>(false);
  console.log(click);
  //redux
  const todoList = useSelector(todoRemainingRecomendeds);
  const todoListProducts = useSelector(todoRemainingProducts);
  const [textInputSearch, setTextInputSearch] = useState<string>('');
  const dispatch = useDispatch();

  const handleSearch = (e: any) => {
    setTextInputSearch(e);
    dispatch(
      HomeScreenSlice.actions.searchFilterChange(e)
    )
  }

  const RenderItem = (props: any): React.JSX.Element => { 
    const {data, navigation} = props;
    const {item} = data;
    return (
      <TouchableOpacity style={{ paddingVertical: 10, paddingLeft: 10, height: 50}}
        onPress={() => navigation?.navigate('Category_Detail')}>
        <Text style={styles.TextSearch}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  const renderItem = ({ item }: any): React.JSX.Element => {
    const { id, img, name } = item;
    return (
      <TouchableOpacity
        style={styles.containerItemPD}
        onPress={() => navigation.navigate(RootStackScreenEnumExplore.Category_Detail)}
      >
        <View style={styles.content}>
          <View style={styles.ImgContainerPD}>
            <Image style={styles.img} source={img} />
          </View>
          <View style={styles.in4PD}>
            <Text style={styles.NamePD}>{name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };



  return (
    <View style={styles.container} >
      <View style={styles.group}>

        <View style={(!click) ? styles.headerLeft : [styles.headerLeft, { borderColor: 'blue' }]}>
          <View style={{ width: '10%' }} >
            <Icon name='search' size={22} />
          </View>
          <TextInput
            placeholder="Search here"
            style={styles.TextSearch}
            onFocus={() => setClick(!click)}
            onBlur={() => setClick(!click)}
            onChangeText={handleSearch}
            value={textInputSearch}
          />

          <TouchableOpacity style={{ width: '10%' }} onPress={() => { setClick(false); setTextInputSearch('') }}>
            <Icon name='close-outline' size={22} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => navigationProfile.navigate(RootStackScreenEnumHome.FavoriteScreen)}>
            <Icon name="heart-outline" size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigationProfile.navigate(RootStackScreenEnumHome.NotificationScreen)}>
            <Icon name="notifications-outline" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      {(click) ?
        <View>
          <FlatList
            renderItem={(item) => <RenderItem navigation={navigation} data={item}></RenderItem>}
            data={textInputSearch == "" ? null : todoListProducts}
            style={{ paddingVertical: 15, height: '100%', width: '100%' }}
          />
        </View>
        :
        <View>
          <View style={styles.Name}>
            <Text style={styles.txtName}>Man Fashion</Text>
            <FlatList
              data={DataMan}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              numColumns={4}
              showsVerticalScrollIndicator={false}
            />
          </View>

          <View style={styles.Name}>
            <Text style={styles.txtName}>Woman Fashion</Text>
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


    </View>

  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  Name: {
    marginTop: 20
  },

  txtName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#223263'
  },
  img: {
    width: 60,
    height: 60,
  },
  NamePD: {
    color: 'black',
  },
  in4PD: {
    height: '30%'
  },
  ImgContainerPD: {
    height: '70%'
  },
  content: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerItemPD: {
    width: '25%',
    padding: 8
  },


  TextSearch: {
    width: '80%',
  },
  imageSearch: {
    width: 20,
    height: 20
  },
  headerRight: {
    paddingLeft: 10,
    gap: 15,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },

  headerLeft: {
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
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  }
});

const DataMan: Category[] = [
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

function dispatch(arg0: { payload: any; type: "HomeScreenSlice/searchFilterChange"; }) {
  throw new Error('Function not implemented.');
}

