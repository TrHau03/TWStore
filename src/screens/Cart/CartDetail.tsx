import { StyleSheet, Text, View, ScrollView, Image, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { PropsCart } from '../../component/Navigation/Props'
import ButtonBottom from '../../component/Button/Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BG_COLOR, HEIGHT, PADDING_HORIZONTAL, WIDTH } from '../../utilities/utility';
import { useSelector } from 'react-redux';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    size: string;
    color: string;
    evaluate: number;
    description: string;
    type: string;
    quantity: number;
}

type CartDetailRouteParams = {
    CartDetail: {
        Level?: string; 
        totalAfterShipping?: number;
    };
};


const CartDetail = ({ navigation }: PropsCart) => {
    const data = useSelector((state: any) => state.CartReducer);
    const [listData, setListData] = useState<Product[]>(data ? data : []);
    const route = useRoute<RouteProp<CartDetailRouteParams, 'CartDetail'>>();
    const [voucher, setVoucher] = useState<string>('');
    const [totalAfterShipping, setTotalAfterShipping] = useState<number>(0);
    const discountLevel = route.params?.Level ?? '';
    
    useEffect(() => {
        setVoucher(route.params?.Level ?? '');
        setTotalAfterShipping(route.params?.totalAfterShipping ?? 0);
    }, [route.params]);

    console.log('Voucher:', discountLevel);
    console.log('Total After Shipping:', totalAfterShipping);

    const totalItem = listData.reduce((total: any, item: { quantity: any }) => total + item.quantity, 0);

    const generalPrice = listData.reduce((previousValue: number, currentItem: Product) => previousValue + currentItem.price * currentItem.quantity, 0);

    const PaymentScreen = () => {
        console.log('sang trang rồi nè ');
    };

    useEffect(() => {
        setListData(data);
    }, [data]);

    const RenderItem = ({ item }: { item: Product }) => {
        return (
            <View style={styles.itemCart}>
                <View>
                    <Image source={{ uri: item.image }} style={{ width: 72, height: 72 }} />
                </View>
                <View style={{ flexDirection: 'column', height: '100%', gap: 10 }}>
                    <View style={styles.topItem}>
                        <Text style={styles.textTitleItem}>{item.name.length < 10 ? item.name : item.name.substring(0, 10) + '...'}</Text>
                    </View>
                    <View style={styles.bottomItem}>
                        <Text style={styles.textPrice}>${item.price}</Text>
                        <View style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 5, alignItems: 'center', justifyContent: 'space-between', width: 100, height: 30, paddingHorizontal: 2, position: 'absolute', right: 30 }}>
                            <Text style={styles.textNumberCount}>{item.quantity}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ paddingHorizontal: PADDING_HORIZONTAL, width: WIDTH, backgroundColor: BG_COLOR }}>
            <View style={{ marginTop: 17 }}>
                <Text style={styles.txtTitlePage}>Your Cart</Text>
            </View>
            <View style={styles.line}></View>
            <View style={{ height: HEIGHT * 0.4, marginTop: '11%' }}>
                {listData.length > 0 ? (
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        renderItem={(object) => <RenderItem item={object.item} />}
                        data={listData}
                        onContentSizeChange={() => { }}
                        keyExtractor={(item: Product) => item.id.toString()}
                    />
                ) : (
                    <Text style={{ fontSize: 20 }}>No data</Text>
                )}
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ height: HEIGHT * 0.8 }}>
                    <View style={styles.itemTotalPrice}>
                        <View style={styles.headerTotalPrice}>
                            <Text style={styles.textHeaderTotalLeft}>Items ({totalItem})</Text>
                            <Text style={styles.textHeaderTotalRight}>${generalPrice}</Text>
                        </View>
                        <View style={styles.headerTotalPrice}>
                            <Text style={styles.textHeaderTotalLeft}>Shipping</Text>
                            <Text style={styles.textHeaderTotalRight}>40$</Text>
                        </View>
                        <View style={styles.headerTotalPrice}>
                            <Text style={styles.textHeaderTotalLeft}>Voucher</Text>
                            <Text style={styles.textHeaderTotalRight}>
                                {discountLevel ? `${discountLevel}%` : '0%'}
                            </Text>
                        </View>
                        <View style={styles.bottomTotalPrice}>
                            <Text style={styles.textBottomTotalLeft}>Total Price</Text>
                            <Text style={styles.textBottomTotalRight}>{totalAfterShipping}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Pressable onPress={() => PaymentScreen()}>
                            <ButtonBottom title='Check Out' />
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CartDetail;

const styles = StyleSheet.create({
    btnCheckOut: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        borderRadius: 5,
        marginTop: 34
    },
    textCheckOut: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Poppins',
        fontWeight: '700',
    },
    textBottomTotalRight: {
        color: '#40BFFF',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 18,
        letterSpacing: 0.50,
    },
    textBottomTotalLeft: {
        color: '#223263',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 18,
        letterSpacing: 0.50,
    },
    textHeaderTotalRight: {
        color: '#223263',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 21.60,
        letterSpacing: 0.50,
    },
    textHeaderTotalLeft: {
        color: '#9098B1',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '400',
        letterSpacing: 0.50,
    },
    bottomTotalPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        borderTopWidth: 0.5,
        borderColor: '#9098B1',
        alignItems: 'center',
    },
    headerTotalPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    itemTotalPrice: {
        padding: 16,
        borderWidth: 0.5,
        borderColor: '#9098B1',
        borderRadius: 5,
        marginTop: 20
    },
    topItem: {
        flexDirection: 'row',
        columnGap: 25,
        paddingLeft: 20,
    },
    bottomItem: {
        flexDirection: 'row',
        height: '50%',
        alignItems: 'center',
        paddingLeft: 20,
    },
    btnNumberCountMinus: {
        backgroundColor: '#EBF0FF',
        borderTopStartRadius: 5,
        borderBottomStartRadius: 5
    },
    btnNumberCountPlus: {
        backgroundColor: '#EBF0FF',
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5
    },
    textNumberCount: {
        color: '#223263',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 18,
        marginTop: 4,
        alignItems: 'center',
    },
    textPrice: {
        color: '#40BFFF',
        fontSize: 15,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 18,
        letterSpacing: 0.50,
    },
    textTitleItem: {
        width: '65%',
        color: '#223263',
        fontSize: 15,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 18,
        letterSpacing: 0.50,
    },
    itemCart: {
        height: 110,
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        marginBottom: 16
    },
    line: {
        position: 'absolute',
        width: WIDTH,
        height: 1,
        backgroundColor: '#E5E5E5',
        marginTop: 60,

    },
    txtTitlePage: {
        color: '#223263',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 24,
        letterSpacing: 0.08,
    }
})
