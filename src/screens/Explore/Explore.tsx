import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler';
import { Layout } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../component/constants';
import { PropsExplore } from '../../component/Navigation/Props';
import { RootStackParamListExplore, RootStackScreenEnumExplore } from '../../component/Root/RootStackExplore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


interface Category {
  id: number;
  img: any;
  name: string;
}






type navigationProps = NativeStackNavigationProp<RootStackParamListExplore, RootStackScreenEnumExplore>

const ExploreScreen = (props: any) => {
  const navigation = useNavigation<navigationProps>();
  const [click, setClick] = useState<boolean>(false);


  const renderItem = ({ item }: any): React.JSX.Element => {

    const { id, img, name } = item;

    return (
      <TouchableOpacity
        style={styles.containerItemPD}
        onPress={() => navigation.navigate(RootStackScreenEnumExplore.Category_Detail_Screen)}
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
        <View style={(!click) ? styles.headerLeft : [styles.headerLeft, { borderColor: 'blue' }]}
        >
          <Icon name='search' size={22} />
          <TextInput
            placeholder="Search here"
            style={styles.TextSearch}
            onFocus={() => setClick(true)}
            onBlur={() => setClick(false)}

          />
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity  onPress={() => navigation.navigate(RootStackScreenEnumExplore.FavoriteScreen)}>{/*onPress={() => navigation.navigate('Home', { screen: 'FavoriteScreen' })} > */} 
            <Icon name="heart-outline" size={25} />
          </TouchableOpacity>
          <TouchableOpacity   onPress={() => navigation.navigate(RootStackScreenEnumExplore.NotificationScreen)}>{/*onPress={() => navigation.navigate('Home', { screen: 'ActivityScreen' })} >*/}
            <Icon name="notifications-outline" size={25} />
          </TouchableOpacity>
        </View>
      </View>
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
    justifyContent: 'center',
    marginLeft: 20
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
    height: '100%'
  },
  group: {
    flexDirection: 'row',
    width: '100%',
    height: 50,

  },
  container: {
    paddingTop: 10,
    flex: 1,
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
