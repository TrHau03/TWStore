import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../component/Header/Header'
import { PropsAccount } from '../../component/Navigation/Props';
import { useSelector } from 'react-redux';

const RenderItem = (props: any): React.JSX.Element => {
    const { data, navigation } = props;
    const { item } = data;
    // State để lưu tổng giá tiền
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const order = useSelector((state: any) => state.SilcesReducer ? state.SilcesReducer[1]?.orderDetails : null);

    useEffect(() => {
        // Tính tổng giá tiền khi orderDetails thay đổi
        if (item.items && item.items.length > 0) {
            const calculatedTotalPrice = item.items.reduce(
                (total: number, product: any) => total + parseFloat(product.price) * parseInt(product.quantity),
                0
            );
            setTotalPrice(calculatedTotalPrice);
        }
    }, [item]);
    const handleOrderPress = (orderId: any) => {
        const selectedOrder = order.find((orderItem: any) => orderItem.idorder === orderId);
        
        if (selectedOrder) {
            const orderDataToSend = {
                idorder: selectedOrder.idorder,
                orderData: selectedOrder,
            };
    
            navigation.navigate('Order_Detail', orderDataToSend);
        }
    };
    

    return <TouchableOpacity style={styles.box} onPress={() => handleOrderPress(item.idorder)}>

        <View>
            <Text style={styles.MaCode}>{item.idorder}</Text>
            <Text style={styles.title}>Order at Lafyuu : {item.date}</Text>
            <View style={styles.boxBottom}>
                <Text style={styles.title}>Order Status</Text>
                <Text style={styles.content}>{item.orderStatus}</Text>
            </View>
            <View style={styles.boxBottom}>
                <Text style={styles.title}>Items</Text>
                <Text style={styles.content}>{item.items.length} Items purchased</Text>
            </View>
            <View style={styles.boxBottom}>
                <Text style={styles.title}>Price</Text>
                <Text style={styles.price}>${totalPrice}</Text>
            </View>
        </View>
    </TouchableOpacity >;
};

const OrderScreen = ({ navigation }: PropsAccount) => {
    const order = useSelector((state: any) => state.SilcesReducer ? state.SilcesReducer[1]?.orderDetails : null);
    // const order = useSelector((state: any) => state.SilcesReducer ? state.SilcesReducer : '');

    return (
        <View style={styles.container}>
            <Header title='Order' navigation={navigation} />

            <View style={styles.line}></View>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={order}
                keyExtractor={(item) => item.idorder}
                renderItem={({ item }) => {
                    const totalPrice = item.items.reduce(
                        (total:number, product : any) => total + parseFloat(product.price) * parseInt(product.quantity),
                        0
                    );
                    return <RenderItem navigation={navigation} data={{ item }} totalPrice={totalPrice} />;
                }}
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

