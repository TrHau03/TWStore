import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../component/Header/Header';
import Button from '../../component/Button/Button';
import { PropsAccount } from '../../component/Navigation/Props';
import { useSelector } from 'react-redux';

const RenderItem = (props: any): React.JSX.Element => {
    const { data, navigation } = props;
    const { item } = data;
    return (
        <View style={styles.box}>
            <View style={{ margin: 10 }}>
                <Text style={styles.txtName}>{item.consigneename}</Text>
                <Text style={styles.txtContent}>{item.deliveryaddress}</Text>
                <Text style={styles.txtContent}>+99 {item.deliverphone}</Text>
            </View>

            <View style={{ margin: 15, width: '100%', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: '20%' }}>
                    <Icon name="trash" size={36} />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const AddressScreen = ({ navigation }: PropsAccount) => {
    // Redux
    // const address = useSelector((state: any) => state.SilcesReducer.addresses);
    const address = useSelector((state: any) => state.SilcesReducer ? state.SilcesReducer[2]?.Address : null);
    console.log(address);
    
    return (
        <View style={styles.container}>
            <Header title="Address" navigation={navigation} />
            <View style={styles.line}></View>
            <FlatList
                data={address}
                renderItem={({item}) => <RenderItem  data={{item}} />}
                keyExtractor={(item) => item.idAddress.toString()}
                showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity
                style={{ paddingTop: 10 }}
                onPress={() => navigation?.navigate('Add_Address')}
            >
                <Button title="Add Address" />
            </TouchableOpacity>
        </View>
    );
}

export default AddressScreen;

const styles = StyleSheet.create({
    txtEdit: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 25.20,
        letterSpacing: 0.50,
    },

    btnEdit: {
        backgroundColor: '#000000',
        width: 80,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginRight: 25,
    },
    txtContent: {
        color: '#9098B1',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 21.60,
        letterSpacing: 0.50,
        paddingVertical: 10,
    },

    txtName: {
        color: '#223263',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.50,
        paddingVertical: 10,
    },

    box: {
        borderWidth: 0.5,
        marginTop: 15,
        width: '100%',
    },

    line: {
        height: 0.5,
        backgroundColor: '#ADA8A8',
        width: '200%',
        marginTop: 20,
        position: 'relative',
        right: 50
    },

    container: {
        height: '92%',
        width: '100%',
        paddingTop: 20,
        paddingHorizontal: 20,
    }
});
