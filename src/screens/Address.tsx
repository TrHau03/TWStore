import { Image, Pressable, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../component/Header/Header';
import Button from '../component/Button/Button';

interface Account {
    id: number;
    name: string;
    address: string;
    phone: string;
}

const renderItem = ({ item }: any): React.JSX.Element => {
    const { id, name, address, phone } = item;

    return <TouchableOpacity style={styles.box}>
        <View>
            <Text style={styles.txtName}>{item.name}</Text>
            <Text style={styles.txtContent}>{item.address}</Text>
            <Text style={styles.txtContent}>+99 {item.phone}</Text>
            <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                <TouchableOpacity style={styles.btnEdit}><Text style={styles.txtEdit}>Edit</Text></TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: 'center' }}><Icon name='trash' size={25} /></TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity >;
};

const Address = () => {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.line}></View>
            
            <FlatList
                data={Data}
                renderItem={renderItem}
            />

            <Button />
        </View>
    )
}

export default Address

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
        padding: 15,
        marginTop: 15,
        width: '95%',
        alignSelf: 'center',
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