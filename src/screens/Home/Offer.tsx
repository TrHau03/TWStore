import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ROUTES } from '../../component/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../component/Header/Header';
import { PropsHome } from '../../component/Navigation/Props';
import { useSelector } from 'react-redux';
import { listOffer } from '../../redux/silces/HomeSelector';

  //redux
  const offer = useSelector(listOffer);

const renderItem = ({item}: any): React.JSX.Element => {

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
        data={offer}
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
