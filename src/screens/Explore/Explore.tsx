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
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList, RootTabScreenENum } from '../../component/BottomNavigation/RootTab/RootTab';
import { SelectList } from 'react-native-dropdown-select-list';
import { useDispatch, useSelector } from 'react-redux';
import { listRecommendeds, todoRemainingRecomendeds } from '../../redux/silces/HomeSelector';
import HomeScreenSlice from '../../redux/silces/HomeScreenSlice';

interface Category {
  id: number;
  img: any;
  name: string;
}
type ProfileScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<RootTabParamList, 'StackHome'>, StackNavigationProp<RootStackParamListHome, RootStackScreenEnumHome>>;
const ExploreScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const textInputRef = useRef(null);


  const [click, setClick] = useState<boolean>(false);
  console.log(click);
  //redux
  const todoList = useSelector(todoRemainingRecomendeds);
  const [textInputSearch, setTextInputSearch] = useState<string>('');
  const dispatch = useDispatch();

  const handleSearch = (e: any) => {
    setTextInputSearch(e);
    dispatch(
      HomeScreenSlice.actions.searchFilterChange(e)
    )
  }

  const renderItem = ({ item }: any): React.JSX.Element => {
    const { id, img, name } = item;


    return (
      <TouchableOpacity
        style={styles.containerItemPD}

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

  const renderItemSearch = ({ item }: any): React.JSX.Element => {
    return (
      <View style={{ padding: 10 }}>
        <Text style={styles.TextSearch}>{item.name}</Text>
      </View>
    )
  }



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
            ref={textInputRef}
          />

          <TouchableOpacity style={{ width: '10%' }} onPress={() => {setClick(false); setTextInputSearch('')}}>
            <Icon name='close-outline' size={22} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => navigation.navigate(RootStackScreenEnumHome.FavoriteScreen)}>
            <Icon name="heart-outline" size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="notifications-outline" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      {(click) ?
        <View>
          <FlatList
            renderItem={renderItemSearch}
            data={textInputSearch == "" ? null : todoList}
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

