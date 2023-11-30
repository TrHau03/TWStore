import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import * as React from 'react';
import Header from '../../component/Header/Header';
import { PropsHome } from '../../component/Navigation/Props';
import { BG_COLOR, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities/utility';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import AxiosInstance from '../../Axios/Axios';

const Notification = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);



const renderItem = ({ item }: { item: { title: string, content: string, discountCode: string, discountLevel: string, startDay: string, endDay: string } }) => {
  return (
    <View style={{ margin: 10 }}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.textbottom}>Giảm lên đến {item.discountLevel}%</Text>
        <Text style={styles.textbottom}>Mã giảm giá : {item.discountCode}</Text>
      </View>
    </View>
  );
};




const Voucher = () => {
  const [voucher, setVoucher] = useState<[]>([]);

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await AxiosInstance().get(`promotion/getAllPromotion`);
      setVoucher(response.data);
    };
    fetchEvent();

  }, []);
  return (
    <View>
      <FlatList
        style={{ marginTop: 20 }}
        data={voucher}
        renderItem={renderItem}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />


    </View>
  );

};

const renderScene = SceneMap({
  first: Notification,
  second: Voucher,
});

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'black' }}
    style={{ backgroundColor: 'white' }}
    labelStyle={{ color: '#223263' }}
  />
);

const NotificationScreen = ({ navigation }: PropsHome) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Notification' },
    { key: 'second', title: 'Voucher' },
  ]);

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: PADDING_HORIZONTAL, }}>
        <Header title='Notification' navigation={navigation} />
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: WIDTH }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default NotificationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: PADDING_TOP,
    backgroundColor: BG_COLOR,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: 5,
    paddingBottom: 5,
  },
  content: {
    margin:5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#686361',
  },
  textbottom:{
    margin:5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3E3C3B',

  }


})