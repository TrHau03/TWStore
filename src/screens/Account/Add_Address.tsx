import { StyleSheet, Text, View, TextInput, FlatList, ScrollView, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropsAccount } from '../../component/Navigation/Props';
import { setProvinces, setDistricts, setWard, setPhone, setDetailWard } from '../../redux/silces/App_AppdressSilces';
import Header from '../../component/Header/Header'
import { SelectList } from 'react-native-dropdown-select-list';
import ButtonBottom from '../../component/Button/Button';




const Add_Address = ({ navigation }: PropsAccount) => {

  //redux
  const dispatch = useDispatch();

  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');
  const [DetailWard, setSelectedDetailWard] = useState('');
  const [phone, setSelectedPhone] = useState('');

  const handleAddressSelection = () => {
    // Check if the selectedProvince, selectedDistrict, selectedWard, and DetailWard are not empty
    if (!selectedProvince || !selectedDistrict || !selectedWard || !DetailWard) {
      // Show an error message because one or more fields are empty
      Alert.alert('Please fill in all fields');
    } else {
      // The fields are not empty, so you can dispatch actions
      dispatch(setProvinces(selectedProvince));
      dispatch(setDistricts(selectedDistrict));
      dispatch(setWard(selectedWard));
      dispatch(setDetailWard(DetailWard));
      dispatch(setPhone(phone));

      // Additional code to handle a valid form
    }
  };

  // Dữ liệu mẫu cho tỉnh/thành phố, quận/huyện và phường/xã
  const provine = [
    { key: '1', value: 'Tp.HCM' },
    { key: '2', value: 'tỉnh Đăk Nông' },
    { key: '3', value: 'tỉnh Đăk lăk' },
  ]
  const districts = [
    { key: '1', value: 'Quận 1' },
    { key: '2', value: 'Quận 2' },
    { key: '3', value: 'Quận 3' },
  ]
  const ward = [
    { key: '1', value: 'ward-1' },
    { key: '2', value: 'ward-2' },
    { key: '3', value: 'ward-3' },
  ]

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ width: '100%' }}>
          <Header title='Add Address' navigation={navigation} />
          <View style={styles.line}></View>
          <Text style={styles.txtTitle}>Choose Provine:</Text>
          <SelectList
            data={provine}
            setSelected={setSelectedProvince}
            placeholder={selectedProvince}
            save='value'
          />

          <Text style={styles.txtTitle}>Choose District:</Text>
          <SelectList
            data={districts}
            setSelected={setSelectedDistrict}
            placeholder={selectedDistrict}
          /><>
            <Text style={styles.txtTitle}>Choose Ward:</Text>
            <SelectList
              data={ward}
              setSelected={setSelectedWard}
              placeholder={selectedWard}
            />
          </>

          <Text style={styles.txtTitle}>Detail Ward:</Text>
          <View>
            <TextInput
              value={DetailWard}
              onChangeText={(text) => setSelectedDetailWard(text)}
              style={styles.input}
            />
          </View>

          <Text style={styles.txtTitle}>Phone Number:</Text>
          <View>
            <TextInput
              value={phone}
              onChangeText={(text) => setSelectedPhone(text)}
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.btnsave}>
          <Pressable onPress={() => handleAddressSelection()}>
            <ButtonBottom title='Save' />
          </Pressable>
        </View>

      </View>
    </ScrollView>

  );
};

export default Add_Address;
const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: "#9098B1",
    borderRadius: 5,
  },

  txtInput: {
    color: '#9098B1',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 21.60,
    letterSpacing: 0.50,
    marginLeft: 15,
    width: '100%',
  },

  txtTitle: {
    color: '#223263',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: 0.50,
    paddingVertical: 10,
    width: '100%',
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
    height: 710,
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  btnsave: {
    width: '100%',
    position: 'absolute',
    bottom: 10,
  },

})



