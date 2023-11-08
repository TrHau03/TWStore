import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../component/Header/Header'
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../component/Button/Button'
import Item from '@ant-design/react-native/lib/list/ListItem';
import { useSelector } from 'react-redux';
import { RouteProp, useRoute } from '@react-navigation/native';

type StackParamList = {
  OrderDetail: { idorder: string, orderData: any }; 
};



const Order_Detail = ({ navigation }: any) => {

  const route = useRoute<RouteProp<StackParamList, 'OrderDetail'>>();
  const selectedOrder = route.params.orderData;
  
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginLeft: 10 }}>
          <Header title="Order detail" navigation={navigation} />
        </View>
        <View style={styles.line} />

        <View style={{ paddingHorizontal: 20 }}>
              <Text style={styles.txtTitle}>Products</Text>

              {selectedOrder.orderDetails.items.map((item: any) => (
                <View key={item.id} style={styles.boxProduct}>
                  <Image style={styles.product_Image} source={{ uri: item.image }} />
                  <View style={{ justifyContent: 'space-between', width: '60%' }}>
                    <Text style={styles.txtName_Product}>{item.name}</Text>
                    <Text style={styles.txtPrice_Product}>${item.price}</Text>
                  </View>
                  <Icon name="heart-outline" size={25} style={styles.icon_Heart} color={'#525252'} />
                </View>
              ))}

              <Text style={styles.txtTitle}>Shipping Details</Text>
              <View style={styles.boxShipping}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                  <Text style={styles.txtLeft}>Date Shipping</Text>
                  <Text style={styles.txtRight}>{selectedOrder.orderDetails.dateship}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                  <Text style={styles.txtLeft}>Shipping</Text>
                  <Text style={styles.txtRight}>{selectedOrder.orderDetails.shipping}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                  <Text style={styles.txtLeft}>No. Ressi</Text>
                  <Text style={styles.txtRight}>{selectedOrder.orderDetails.idship}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                  <Text style={styles.txtLeft}>Address</Text>
                  <Text style={styles.txtRight}>{selectedOrder.orderDetails.address}</Text>
                </View>
              </View>

              <Text style={styles.txtTitle}>Payment Details</Text>
              <View style={styles.boxShipping}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                  <Text style={styles.txtLeft}>Items ({selectedOrder.orderDetails.items.length})</Text>
                  <Text style={styles.txtRight}>${selectedOrder.orderDetails.totalitemsprice}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                  <Text style={styles.txtLeft}>Shipping</Text>
                  <Text style={styles.txtRight}>${selectedOrder.orderDetails.Transportfee}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                  <Text style={styles.txtPrice_Product}>Total Price</Text>
                  <Text style={styles.txtPrice_Product}>${selectedOrder.orderDetails.totalprice}</Text>
                </View>
              </View>

              <Button style={{ marginVertical: 20 }} title="Notify Me" />

        </View>

      </ScrollView>
    </View>
  );
};
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
    height: 0.5,
    backgroundColor: '#ADA8A8',
    width: '120%',
    marginTop: 20,
    position: 'relative',
    right: 20
  },
  container: {
    width: '100%',
    height: '93%',
    paddingTop: 20,
  }
})


