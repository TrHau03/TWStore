import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Header from '../component/Header/Header'
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../component/Button/Button'

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
}

interface Shipping_Detail {
  id: number;
  date: string;
  name: string;
  phone: string;
  address: string;
}

interface Payment_Detail {
  id: number;
  quantity: number;
  price_item: string;
  price_ship: string;
  price_charges: string;
  price: string;
}

const renderItem2 = ({ item }: any): React.JSX.Element => {
  const { id, quantity, price_item, price_ship, price_charges, price } = item;

  return <TouchableOpacity style={styles.boxShipping}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
      <Text style={styles.txtLeft}>Items ({item.quantity})</Text>
      <Text style={styles.txtRight}>${item.price_item}</Text>
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
      <Text style={styles.txtLeft}>Shipping</Text>
      <Text style={styles.txtRight}>${item.price_ship}</Text>
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
      <Text style={styles.txtLeft}>Import charges</Text>
      <Text style={styles.txtRight}>${item.price_charges}</Text>
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
      <Text style={styles.txtPrice_Product}>Total Price</Text>
      <Text style={styles.txtPrice_Product}>${item.price}</Text>
    </View>
  </TouchableOpacity>
};

const renderItem1 = ({ item }: any): React.JSX.Element => {
  const { id, date, name, phone, address } = item;

  return <TouchableOpacity style={styles.boxShipping}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
      <Text style={styles.txtLeft}>Date Shipping</Text>
      <Text style={styles.txtRight}>{item.date}</Text>
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
      <Text style={styles.txtLeft}>Shipping</Text>
      <Text style={styles.txtRight}>{item.name}</Text>
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
      <Text style={styles.txtLeft}>No. Ressi</Text>
      <Text style={styles.txtRight}>{item.phone}</Text>
    </View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
      <Text style={styles.txtLeft}>Address</Text>
      <Text style={styles.txtRight}>{item.address}</Text>
    </View>
  </TouchableOpacity>
};

const renderItem = ({ item }: any): React.JSX.Element => {
  const { id, image, name, price } = item;

  return <TouchableOpacity style={styles.boxProduct}>
    <Image style={styles.product_Image} source={{ uri: item.image }} />

    <View style={{ justifyContent: 'space-between', width: '60%' }}>
      <Text style={styles.txtName_Product}>{item.name}</Text>
      <Text style={styles.txtPrice_Product}>{item.price}</Text>
    </View>

    <TouchableOpacity style={styles.icon_Heart} >
      <Icon name='heart-outline' size={25} color={'#525252'} />
    </TouchableOpacity>
  </TouchableOpacity>
};

const Order_Detail = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.line}></View>
        <View style={{ paddingHorizontal: 20, }}>
          <Text style={styles.txtTitle}>Product</Text>
          <FlatList
            data={Data}
            renderItem={renderItem}
          />

          <Text style={styles.txtTitle}>Shipping Details</Text>

          <FlatList
            data={Data1}
            renderItem={renderItem1}
          />

          <Text style={styles.txtTitle}>Payment Details</Text>
          <FlatList
            data={Data2}
            renderItem={renderItem2}
          />

          <Button />
        </View>
      </ScrollView>
    </View>
  )
}

export default Order_Detail

const styles = StyleSheet.create({
  boxShipping: {
    borderWidth: 0.5,
    padding: 15,
    marginTop: 15,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 5,
  },
  txtRight: {
    color: '#223263',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 21.60,
    letterSpacing: 0.50,
    width: '40%',
  },

  txtLeft: {
    color: '#223263',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 21.60,
    letterSpacing: 0.50,
  },

  txtPrice_Product: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0.50,
  },

  txtName_Product: {
    color: '#223263',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0.50,
  },

  icon_Heart: {
    paddingTop: 10,

  },

  product_Image: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },

  boxProduct: {
    borderWidth: 0.5,
    padding: 15,
    marginTop: 15,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
  },

  txtTitle: {
    color: '#223263',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: 0.50,
    paddingTop: 20,
  },

  line: {
    height: 1,
    backgroundColor: '#9098B1',
    width: '100%',
    marginTop: 30,
  },
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 20,
  }
})

const Data: Product[] = [
  {
    id: 1,
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
    name: 'Nike Air Zoom Pegasus 36 Miami',
    price: '299,43'
  },
  {
    id: 2,
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike2.png",
    name: 'Nike Air Zoom Pegasus 36 Miami',
    price: '299,43'
  },



]

const Data1: Shipping_Detail[] = [
  {
    id: 1,
    date: 'January 16, 2015',
    name: 'POS Reggular',
    phone: '000192848573',
    address: '2727 Lakeshore Rd undefined Nampa, Tennessee 78410',
  },
]

const Data2: Payment_Detail[] = [
  {
    id: 1,
    quantity: 3,
    price_item: '598.86',
    price_ship: '40.00',
    price_charges: '128.00',
    price: '766.86',
  },
]
