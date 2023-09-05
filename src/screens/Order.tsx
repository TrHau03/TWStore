import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Header from '../component/Header/Header'

interface Order {
    id: number;
    ma: string;
    date: string;
    oderStatus: string;
    items: number;
    price: string;
}

const renderItem = ({ item }: any): React.JSX.Element => {
    const { id, ma, date, oderStatus, items, price } = item;
    return <TouchableOpacity style={styles.box}>
        <View>
            <Text style={styles.MaCode}>{item.ma}</Text>
            <Text style={styles.title}>Order at Lafyuu : {item.date}</Text>
            <View  style={styles.boxBottom}>
                <Text style={styles.title}>Order Status</Text>
                <Text style={styles.content}>{item.oderStatus}</Text>
            </View>
            <View style={styles.boxBottom}>
                <Text style={styles.title}>Items</Text>
                <Text style={styles.content}>{item.items} Items purchased</Text>
            </View>
            <View style={styles.boxBottom}>
                <Text style={styles.title}>Price</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
        </View>
    </TouchableOpacity >;
};

const Order = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.line}></View>
            <FlatList
                data={Data}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    boxBottom:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    price:{
        color: 'black',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21.60,
        letterSpacing: 0.50,
    },
    
    content: {
        color: '#223263',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 21.60,
        letterSpacing: 0.50,
    },

    title: {
        color: '#223263',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 21.60,
        letterSpacing: 0.50,
        paddingVertical: 5,
    },

    MaCode: {
        color: '#223263',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.50,
        paddingVertical: 5,
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

const Data: Order[] = [
    {
        id: 1,
        ma: 'FGHJYTN',
        date: 'August 1, 2017',
        oderStatus: 'Shipping',
        item: 2,
        price: '299,43',
    },
    {
        id: 3,
        ma: 'FGHJYTN',
        date: 'August 1, 2017',
        oderStatus: 'Shipping',
        item: 5,
        price: '299,43',
    },
    {
        id: 4,
        ma: 'FGHJYTN',
        date: 'August 1, 2017',
        oderStatus: 'Shipping',
        item: 2,
        price: '299,43',
    },
    {
        id: 5,
        ma: 'FGHJYTN',
        date: 'August 1, 2017',
        oderStatus: 'Shipping',
        item: 2,
        price: '299,43',
    },
]