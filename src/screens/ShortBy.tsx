import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
interface ShortBy {
  id: number;
  name: string;
}



const ShortBy = ({navigation}: any) => {

  
  const renderItem = ({item}: any): React.JSX.Element => {
    const {id, name} = item;
  
    return <TouchableOpacity 
      style={styles.containerItemPD}

    >
        <Text style={styles.namePD}>
        {name}
        </Text>
    </TouchableOpacity>;
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.iconBack}
       onPress={() => navigation.goBack()}
       >
        <Icon name="chevron-back" size={25} />
      </TouchableOpacity>
      <View style={styles.content}>
        <FlatList 
          data={DataShortBy} 
          renderItem={renderItem} 
        />
      </View>
    </View>
  );
};

export default ShortBy;

const styles = StyleSheet.create({
  namePD:{
    fontWeight: 'bold',
    fontSize: 20
  },
  containerItemPD:{
    width: '100%',
    height: 50
  },
  content: {
    width: '100%',
    height: '90%',
    marginTop: 10,
  },
  iconBack:{
    width:'100%',
    height: '5%'
  },
  container: {
    padding: 15,
    flex: 1,
  },
});

const DataShortBy: ShortBy[] = [
  {
    id: 1,
    name: 'Best Match',
  },
  {
    id: 2,
    name: 'Time: ending soonest',
  },
  {
    id: 3,
    name: 'Time: newly listed',
  },
  {
    id: 4,
    name: 'Price + Shipping: lowest first',
  },
  {
    id: 5,
    name: 'Price + Shipping: highest first',
  },
  {
    id: 6,
    name: 'Distance: nearest first',
  },
];
