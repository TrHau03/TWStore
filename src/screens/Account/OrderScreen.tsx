import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Header from '../../component/Header/Header'
import { PropsAccount } from '../../component/Navigation/Props';
import { useSelector } from 'react-redux';

const RenderItem = (props: any): React.JSX.Element => {
    const { data, navigation } = props;
    const { item } = data;
    const order = useSelector((state: any) => state.OrderReducer ? state.OrderReducer : '');
    const handleOrderPress = (orderId: any) => {
        const selectedOrder = order.find((orderItem: any) => orderItem.orderDetails.idorder === orderId);
        if (selectedOrder) {
            navigation.navigate('Order_Detail', { orderData: selectedOrder });
        }
    };
    
    return <TouchableOpacity style={styles.box} onPress={() => handleOrderPress(item.orderDetails.idorder)}>
        
        <View>
            <Text style={styles.MaCode}>{item.orderDetails.idorder}</Text>
            <Text style={styles.title}>Order at Lafyuu : {item.orderDetails.date}</Text>
            <View style={styles.boxBottom}>
                <Text style={styles.title}>Order Status</Text>
                <Text style={styles.content}>{item.orderDetails.orderStatus}</Text>
            </View>
            <View style={styles.boxBottom}>
                <Text style={styles.title}>Items</Text>
                <Text style={styles.content}>{item.orderDetails.items.length} Items purchased</Text>
            </View>
            <View style={styles.boxBottom}>
                <Text style={styles.title}>Price</Text>
                <Text style={styles.price}>${item.orderDetails.totalprice}</Text>
            </View>
        </View>
    </TouchableOpacity >;
};

const OrderScreen = ({ navigation }: PropsAccount) => {
    const order = useSelector((state: any) => state.OrderReducer ? state.OrderReducer : '');
    return (
        <View style={styles.container}>
            <Header title='Order' navigation={navigation} />

            <View style={styles.line}></View>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={order}
                keyExtractor={(item) => item.orderDetails.idorder}
                renderItem={(item) => <RenderItem navigation={navigation} data={item} />}

            />
        </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    boxBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    price: {
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
        width: '100%',
        height: '90%',
        paddingTop: 20,
        paddingHorizontal: 20
    }
})

