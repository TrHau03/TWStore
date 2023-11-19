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
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { CompositeNavigationProp, NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamListHome, RootStackScreenEnumHome } from '../../component/Root/RootStackHome';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootTabParamList } from '../../component/BottomNavigation/RootTab/RootTab';
import { PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities/utility';
import { COLORS } from '../../utilities';


interface Category {
  id: number;
  img: any;
  name: string;
}
type BottomNavigationProp = CompositeNavigationProp<NavigationProp<RootTabParamList>, StackNavigationProp<RootStackParamListHome, RootStackScreenEnumHome>>;
const ExploreScreen = () => {
  const navigation = useNavigation<BottomNavigationProp>();

  const [textInputStatus, setTextInputStatus] = useState<boolean>(false);

  const [textInputSearch, setTextInputSearch] = useState<string>('');
  const [click, setClick] = useState<boolean>(false);


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
