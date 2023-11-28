import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../component/Header/Header';
import {PropsHome} from '../../component/Navigation/Props';
import {
  BG_COLOR,
  HEIGHT,
  PADDING_HORIZONTAL,
  PADDING_TOP,
} from '../../utilities/utility';
import {useDispatch, useSelector} from 'react-redux';
import {listRecommended} from '../../Redux/silces/HomeSelector';
import {fetchInitialListEvents} from '../../Redux/silces/Silces';
import AxiosInstance from '../../Axios/Axios';
import { ObjectId } from 'mongoose';

interface Offer {
  id: number;
  img: any;
  title: string;
  content: string;
  date: string;
  time: string;
}

const renderItem = ({ item }: { item: { _id: ObjectId, eventImage: string, eventName: string } }) => {
  return (
    <View style={styles.containerItemPD}>
      <View style={styles.content}>
        <View style={styles.left}>
          <Image source={{ uri: item.eventImage }} />
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>{item.eventName}</Text>
        </View>
      </View>
    </View>
  );
};


const OfferNorifiScreen = ({navigation}: PropsHome) => {
  const [event, setEvent] = useState<[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitialListEvents());
    const fetchEvent = async () => {
      const response = await AxiosInstance().get(`event/getAllEvent`);
      setEvent(response.data);
    };
    fetchEvent();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Offer" navigation={navigation} />
      <FlatList
        style={{marginTop: 20}}
        data={[...event].reverse()}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()}
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
    color: 'black',
  },
  date: {
    color: 'black',
  },
  txtcontent: {
    fontSize: 16,
    marginTop: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  contentRight: {
    flexDirection: 'row',
    marginTop: 7,
  },
  right: {
    width: '90%',
  },
  left: {
    width: '10%',
  },

  content: {
    flexDirection: 'row',
  },
  containerItemPD: {
    width: '100%',
    height: 'auto',
    marginTop: 20,
  },
  container: {
    flex: 1,
    paddingTop: PADDING_TOP,
    paddingHorizontal: PADDING_HORIZONTAL,
    height: HEIGHT,
    backgroundColor: BG_COLOR,
  },
});

// const DataOffer: Offer[] = [
//   {
//     id: 1,
//     img: require('../../asset/image/Offer.png'),
//     title: 'The Best Title',
//     content:
//       'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
//     date: '21/07/2002',
//     time: '9:00 PM',
//   },
//   {
//     id: 2,
//     img: require('../../asset/image/Offer.png'),
//     title: 'SUMMER OFFER 98% Cashback',
//     content:
//       'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
//     date: '21/07/2002',
//     time: '9:00 PM',
//   },
//   {
//     id: 3,
//     img: require('../../asset/image/Offer.png'),
//     title: 'Special Offer 25% OFF',
//     content:
//       'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
//     date: '21/07/2002',
//     time: '9:00 PM',
//   },
//   {
//     id: 4,
//     img: require('../../asset/image/Offer.png'),
//     title: 'SUMMER OFFER 98% Cashback',
//     content:
//       'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
//     date: '21/07/2002',
//     time: '9:00 PM',
//   },
//   {
//     id: 5,
//     img: require('../../asset/image/Offer.png'),
//     title: 'The Best Title',
//     content:
//       'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
//     date: '21/07/2002',
//     time: '9:00 PM',
//   },
//   {
//     id: 6,
//     img: require('../../asset/image/Offer.png'),
//     title: 'SUMMER OFFER 98% Cashback',
//     content:
//       'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
//     date: '21/07/2002',
//     time: '9:00 PM',
//   },
//   {
//     id: 7,
//     img: require('../../asset/image/Offer.png'),
//     title: 'The Best Title',
//     content:
//       'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
//     date: '21/07/2002',
//     time: '9:00 PM',
//   },
// ];
