import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import Header from '../../component/Header/Header';
import { PropsHome } from '../../component/Navigation/Props';
import { BG_COLOR, PADDING_HORIZONTAL, PADDING_TOP } from '../../utilities/utility';

interface Product_Notifi {
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
      <View style={styles.contentPD}>
        <View style={styles.left}>
          <Image source={img} style={{ width: 50, height: 50 }} />
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

const ActivityScreen = ({ navigation }: PropsHome) => {
  const [checkProduct, setcheckProduct] = useState<boolean>(false);
  const [checkActivity, setcheckActivity] = useState<boolean>(false);

  const flatListRefProduct = useRef<FlatList>(null);
  const flatListRefActivity = useRef<FlatList>(null);


  //Hàm đưa trỏ chuột lên đầu danh sách
  const scrollToTopProduct = () => {
    flatListRefProduct.current?.scrollToOffset({ offset: 0 });
  };

  //Hàm đưa trỏ chuột lên đầu danh sách
  const scrollToTopActivity = () => {
    flatListRefActivity.current?.scrollToOffset({ offset: 0 });
  };

  return (
    <View style={styles.container}>
      <Header title='Activity' navigation={navigation} />
      <View style={styles.content}>
       {checkActivity ? 
        <View >
        <View style={styles.groupText}>
          <Text style={styles.txtProduct}>Product</Text>
          <TouchableOpacity
            style={styles.btnSeeMore}
            onPress={() => {
              setcheckProduct(!checkProduct), checkProduct ? scrollToTopProduct() : null;
            }}>
            {checkProduct ? (
              <Text style={styles.txtSeeMore}>Ẩn</Text>
            ) : (
              <Text style={styles.txtSeeMore}>See More</Text>
            )}
          </TouchableOpacity>
        </View>
        <View
          style={
            checkProduct
              ? [styles.groupProduct, { height: '40%' }]
              : [styles.groupProduct, { height: '30%' }]
          }>
          <FlatList
            ref={flatListRefProduct}
            scrollEnabled={checkProduct}
            data={DataProduct_Notifi} // Hiển thị chỉ số sản phẩm cần
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={1}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View> : <></>}


        <View style={styles.groupText}>
          <Text style={styles.txtProduct}>Activity</Text>
          <TouchableOpacity
            style={styles.btnSeeMore}
            onPress={() => {
              setcheckActivity(!checkActivity), checkActivity ? scrollToTopActivity() : null;
            }}>
            {checkActivity ? (
              <Text style={styles.txtSeeMore}>Ẩn</Text>
            ) : (
              <Text style={styles.txtSeeMore}>See More</Text>
            )}
          </TouchableOpacity>
        </View>
        <View
          style={
            checkActivity
              ? [styles.groupActivity, { height: '45%' }]
              : [styles.groupActivity, { height: '40%' }]
          }>
          <FlatList
            ref={flatListRefActivity}
            scrollEnabled={checkActivity}
            data={DataActivity_Notifi} // Hiển thị chỉ số sản phẩm cần
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={1}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  groupActivity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

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
    width: '80%',
  },
  left: {
    width: '20%',
  },

  contentPD: {
    flexDirection: 'row',
  },
  containerItemPD: {
    width: '100%',
    height: 'auto',
  },

  groupProduct: {
    width: '100%',
  },
  txtSeeMore: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  btnSeeMore: {
    width: '50%',
    alignItems: 'flex-end',
  },
  txtProduct: {
    width: '50%',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  groupText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  content: {
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    paddingTop: PADDING_TOP,
    paddingHorizontal: PADDING_HORIZONTAL,
    backgroundColor: BG_COLOR
  },
});

const DataProduct_Notifi: Product_Notifi[] = [
  {
    id: 1,
    img: require('../../asset/image/productnotifi_1.png'),
    title: 'New Product',
    content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 2,
    img: require('../../asset/image/productnotifi_2.png'),
    title: 'New Product',
    content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 3,
    img: require('../../asset/image/productnotifi_2.png'),
    title: 'New Product',
    content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 4,
    img: require('../../asset/image/productnotifi_2.png'),
    title: 'New Product',
    content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 5,
    img: require('../../asset/image/productnotifi_1.png'),
    title: 'New Product',
    content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 6,
    img: require('../../asset/image/productnotifi_2.png'),
    title: 'New Product',
    content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 7,
    img: require('../../asset/image/productnotifi_1.png'),
    title: 'New Product',
    content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    date: '21/07/2002',
    time: '9:00 PM',
  },
];

const DataActivity_Notifi: Product_Notifi[] = [
  {
    id: 1,
    img: require('../../asset/image/Transaction.png'),
    title: 'Transaction Nike Air Zoom Product',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 2,
    img: require('../../asset/image/Transaction.png'),
    title: 'Transaction Nike Air Max',
    content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 3,
    img: require('../../asset/image/Transaction.png'),
    title: 'Transaction Nike Air Zoom Product',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 4,
    img: require('../../asset/image/Transaction.png'),
    title: 'Transaction Nike Air Max',
    content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 5,
    img: require('../../asset/image/Transaction.png'),
    title: 'Transaction Nike Air Zoom Product',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 6,
    img: require('../../asset/image/Transaction.png'),
    title: 'Transaction Nike Air Max',
    content: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    date: '21/07/2002',
    time: '9:00 PM',
  },
  {
    id: 7,
    img: require('../../asset/image/Transaction.png'),
    title: 'Transaction Nike Air Zoom Product',
    content:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    date: '21/07/2002',
    time: '9:00 PM',
  },
];

/*
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const ProductList = ({ products }) => {
  const [visibleProducts, setVisibleProducts] = useState(5);
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setVisibleProducts(products.length);
    } else {
      setVisibleProducts(5);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>{item.name}</Text>
      <Text>${item.price}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={products.slice(0, visibleProducts)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {products.length > 5 && (
        <TouchableOpacity onPress={toggleShowAll}>
          <Text>{showAll ? 'See Less' : 'See More'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProductList;



*/
