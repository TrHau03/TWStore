import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../component/Header/Header';
import Button from '../../component/Button/Button';
import { PropsAccount } from '../../component/Navigation/Props';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { HEIGHT, WIDTH } from '../../utilities/utility';
import { RootStackScreenEnumAccount } from '../../component/Root/RootStackAccount';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress } from '../../Redux/silces/Silces';
import AxiosInstance from '../../Axios/Axios';

interface Account {
    id: number;
    name: string;
    address: string;
    phone: string;
}



const AddressScreen = ({ navigation }: NativeStackHeaderProps) => {
    const listData = useSelector((state: any) => {
        return state.SlicesReducer.user.address;
    });
    const user = useSelector((state: any) => {
        return state.SlicesReducer.user;
    });
    const dispatch = useDispatch();
    const handleRemove = async (position: number) => {
        dispatch(deleteAddress(position))
        const response = await AxiosInstance().post(`users/updateAddressUser`, {
            _idUser: user._idUser,
            typeUpdate: 'delete',
            position: position,
        });
    }

    const RenderItem = (props: any): React.JSX.Element => {
        const { data, navigation } = props;
        const { item } = data;

        const address = `${item.street}, ${item.ward}, ${item.district}, ${item.city}`
        return <View style={styles.box}>
            <View>
                <Text style={styles.txtName}>Địa chỉ số {item.position}</Text>
                <Text style={styles.txtContent}>{address}</Text>
                <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                    <TouchableOpacity onPress={() => handleRemove(item.position)} style={{ justifyContent: 'center' }}><Icon name='trash' size={25} /></TouchableOpacity>
                </View>
            </View>
        </View >;
    };
    return (
        <View style={styles.container}>
            <Header title='Address' navigation={navigation} />
            <View style={styles.line}></View>
            <FlatList
                style={{ maxHeight: '80%' }}
                data={listData}
                renderItem={(item) => <RenderItem navigation={navigation} data={item}></RenderItem>}
                showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity style={{ position: 'absolute', width: '100%', alignSelf: 'center', bottom: 20 }} onPress={() => navigation?.navigate(RootStackScreenEnumAccount.Add_Address)}>
                <Button title='Add Address' />
            </TouchableOpacity>
        </View>
    )
}

export default AddressScreen

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
        fontSize: 16,
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
        padding: 15,
        marginTop: 15,
        width: '100%',
        alignSelf: 'center',
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
        height: '100%',
        width: WIDTH,
        paddingTop: 20,
        paddingHorizontal: 20,
    }
})

const Data: Account[] = [
    {
        id: 1,
        name: 'Minh dep trai',
        address: 'Nha cua le duc minh deo cho may dia chi nha con, doi muoi nam nua bo may cho may dia chi con Hau',
        phone: '0372711935',
    },
    {
        id: 2,
        name: 'Hoang bao ve',
        address: 'Nha cua le duc minh deo cho may dia chi nha con',
        phone: '0372711935',
    },
    {
        id: 3,
        name: 'Hau loz',
        address: 'Nha cua le duc minh deo cho may dia chi nha con',
        phone: '0372711935',
    },
    {
        id: 4,
        name: 'Long lon',
        address: 'Nha cua le duc minh deo cho may dia chi nha con',
        phone: '0372711935',
    },
];
