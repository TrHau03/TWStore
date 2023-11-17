
import {
  BackHandler,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const FilterScreen = ({navigation}: any) => {
  const [sliderValues, setSliderValues] = useState([25, 75]);

  const handleSliderChange = (values: any) => {
    setSliderValues(values);
  };
 
  const [sliderValue, setSliderValue] = useState(0);

  const handleTextInputChange = (text:any) => {
    const parsedValue = parseFloat(text); 
    if (!isNaN(parsedValue)) {
      setSliderValue(parsedValue);
      console.log(sliderValue);
      
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.iconBack}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={25} />
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.filterPrice}>
          <Text
            style={{
              width: '100%',

              fontSize: 20,
              marginBottom: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Price Range
          </Text>
          <View style={styles.input}>
            <View style={styles.minPrice}>
              <TextInput 
           
                />
            </View>

            <View style={styles.maxPrice}>
              <TextInput/>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        
          }}>
          <MultiSlider
            values={sliderValues}
            sliderLength={300}
            onValuesChange={handleSliderChange}
            min={0}
            max={100}
            step={1}
            allowOverlap={false}
            snapped
          />
          <View style={styles.text}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
              Min
            </Text>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
              Max
            </Text>
          </View>
        </View>

        <View style={styles.BuyingFormat}>
          <View style={styles.Format}>
            <Text  style={styles.txtBuyingFormat}>Condition</Text>
          </View>
          <View style={styles.groupBtn}>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>News</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Used</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Not Specified</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.BuyingFormat}>
          <View style={styles.Format}>
            <Text  style={styles.txtBuyingFormat}>Buying Format</Text>
          </View>
          <View style={styles.groupBtn}>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>All Listings</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Accepts Offers</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Auction</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Buy It Now</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Classified Ads</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


        <View style={styles.BuyingFormat}>
          <View style={styles.Format}>
            <Text  style={styles.txtBuyingFormat}>Item Location</Text>
          </View>
          <View style={styles.groupBtn}>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>US Only</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>North America</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Europe</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Asia</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
        <View style={styles.BuyingFormat}>
          <View style={styles.Format}>
            <Text  style={styles.txtBuyingFormat}>Show Only</Text>
          </View>
          <View style={styles.groupBtn}>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Free Returns</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Returns Accepted</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Authorized Selle</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Completed Items</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Sold Items</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Deals & Savings</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Sale Items</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Listed as Lots</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Search in Description</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Benefits charity</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnAll}>
              <TouchableOpacity>
                <Text>Authenticity Verified</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

          <TouchableOpacity  style={styles.btnApply}>
            <Text>Apply</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  btnApply:{
    width: '100%',
    height: 50
  },

  btnAll: {
    width: 'auto',
    marginTop: 10,
    padding: 15,
    marginLeft: 15,
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 0.3

  },
  groupBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Cho phép các mục tự động xuống dòng
    width: '100%',
    padding: 5,
  },
  Format: {
    width: '100%',
  },
  txtBuyingFormat:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  BuyingFormat: {
    width: '100%',
    marginTop: 25,
  },
  btnNew:{
    padding: 15,
    borderWidth: 0.3,
    borderColor: '#EBF0FF',
    marginLeft: 15,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10
  },
  group:{
    width: '100%',
    padding: 5,
    flexDirection: 'row'
  },
  txtCondition:{
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  Condition: {
    marginTop:10,
    width: '100%',
  },
  text: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  maxPrice: {
    borderWidth: 0.3,
    height: 50,
    width: '40%',
    marginRight: 20,
  },
  minPrice: {
    borderWidth: 0.3,
    height: 50,
    width: '40%',
    marginLeft: 20,
  },
  input: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  filterPrice: {
    width: '100%',
  },
  content: {
    width: '100%',
    marginTop: 10,
  },
  iconBack: {
    width: '100%',
    height: '5%',
  },
  container: {
    padding: 15,
    width: '100%',
  },
});
