import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ROUTES } from '../../component/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../component/Header/Header';
import { PropsHome } from '../../component/Navigation/Props';

interface Offer {
  id: number;
  img: any;
  title: string;
  content: string;
  date: string;
  time: string;
}

const renderItem = ({ item }: any): React.JSX.Element => {

  const { id, img, title, content, date, time } = item;

  return (
    <View style={styles.containerItemPD}>
      <View style={styles.content}>
        <View style={styles.left}>
          <Image source={require('../../asset/image/Offer.png')} />
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.txtcontent}>{content}</Text>
          <View style={styles.contentRight}>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const OfferNorifiScreen = ({ navigation }: PropsHome) => {
  return (
    <View
      style={styles.container}
    >
      <Header title='Offer' navigation={navigation} />
      <FlatList
        style={{ marginBottom: 45}}
        data={DataOffer}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default OfferNorifiScreen;

const styles = StyleSheet.create({
  time: {
    marginLeft: 15,
    color: 'black'
  },
  date: {
    color: 'black'
  },
  txtcontent: {
    fontSize: 16,
    marginTop: 5
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },
  contentRight: {
    flexDirection: 'row',
    marginTop: 7,

  },
  right: {
    width: '90%'
  },
  left: {

    width: '10%'
  },

  content: {
    flexDirection: 'row'
  },
  containerItemPD: {
    width: '100%',
    height: 'auto',
    marginTop: 20
  },
  container: {
    flex: 1,
    padding: 15,
    height: '100%'
  }
});

const DataOffer: Offer[] = [
  {
    id: 1,
    img: require('../../asset/image/Offer.png'),
    title: 'The Best Title',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 2,
    img: require('../../asset/image/Offer.png'),
    title: 'SUMMER OFFER 98% Cashback',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 3,
    img: require('../../asset/image/Offer.png'),
    title: 'Special Offer 25% OFF',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 4,
    img: require('../../asset/image/Offer.png'),
    title: 'SUMMER OFFER 98% Cashback',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 5,
    img: require('../../asset/image/Offer.png'),
    title: 'The Best Title',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 6,
    img: require('../../asset/image/Offer.png'),
    title: 'SUMMER OFFER 98% Cashback',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 7,
    img: require('../../asset/image/Offer.png'),
    title: 'The Best Title',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    date: '21/07/2002',
    time: '9:00 PM',
  },
];
