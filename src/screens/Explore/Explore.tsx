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
import { StackNavigationProp } from '@react-navigation/stack';
import { RootTabParamList } from '../../component/BottomNavigation/RootTab/RootTab';
import { PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities/utility';
import { COLORS } from '../../utilities';
import AxiosInstance from '../../Axios/Axios';
import { AirbnbRating } from 'react-native-ratings';
import { RootStackScreenEnumExplore } from '../../component/Root/RootStackExplore';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';



type BottomNavigationProp = CompositeNavigationProp<NavigationProp<RootTabParamList>, StackNavigationProp<RootStackParamListHome, RootStackScreenEnumHome>>;
const ExploreScreen = ({ navigation }: NativeStackHeaderProps) => {
  const navigationBottom = useNavigation<BottomNavigationProp>();

  const [textInputStatus, setTextInputStatus] = useState<boolean>(false);

  const [textInputSearch, setTextInputSearch] = useState<string>('');

  const [listProduct, setListProduct] = useState<[]>([]);

  useEffect(() => {
    const fetchListProduct = async () => {
      const response = await AxiosInstance().get('category/getAllCategory');
      setListProduct(response.data);
    }
    fetchListProduct();
  }, [])

  const renderItem = ({ item }: any): React.JSX.Element => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(RootStackScreenEnumExplore.Category_Detail_Screen)} >
        <View>
          <View >
            <View style={styles.imgContainer}>
              {item.linkIcon && <Image source={{ uri: item.linkIcon }} style={styles.imgStyle} />}
            </View>
            <View>
              <Text style={styles.textUnderImage}>{item.name}</Text>
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
          <TouchableOpacity onPress={() => navigationBottom.navigate(RootStackScreenEnumHome.NotificationScreen)}>
            <Icon name="notifications-outline" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={styles.containeritem}
        data={listProduct}
        renderItem={renderItem}
        numColumns={4}
        keyExtractor={(item: any) => item?._id.toString()} />

    </View>

  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  textUnderImage: {
    fontSize: 16, 
    color: COLORS.black, 
    textAlign: 'center',
  },
  containeritem: {
    width: WIDTH * 0.9,
    alignSelf: 'center',
  },
  imgContainer: {
    alignItems: 'center',
    padding: 15,
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  imgIc: {
    width: '20%',
    marginLeft: 10,
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

