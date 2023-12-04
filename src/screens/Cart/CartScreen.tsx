import { StyleSheet, Text, View, ScrollView, Image, Pressable, FlatList, Dimensions, Alert, } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { InputItem, Stepper } from '@ant-design/react-native'
import { PropsCart } from '../../component/Navigation/Props'
import ButtonBottom from '../../component/Button/Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BG_COLOR, HEIGHT, PADDING_HORIZONTAL, WIDTH } from '../../utilities/utility';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../../redux/silces/Silces'
import AxiosInstance from '../../Axios/Axios'
import { useNavigation } from '@react-navigation/native'


const CartScreen = ({ navigation }: PropsCart) => {
    const navigations = useNavigation<{
        navigate: (screen: string, params?: { totalAfterShipping?: number; Level?: any; generalPriceAfterShipping: number, shipping: number }) => void;
    }>();


    const listData = useSelector((state: any) => {
        return state.SlicesReducer.user.cartItem;
    });

    const user = useSelector((state: any) => {
        return state.SlicesReducer.user;
    });

    const [voucher, setVoucher] = useState()
    const [discountLevel, setDiscountLevel] = useState<number>(0);
    const [discountedPrice, setDiscountedPrice] = useState<number>(0);
    const [isVoucherApplied, setIsVoucherApplied] = useState(false);
    const [inputBorderColor, setInputBorderColor] = useState('#9098B1');
    const [coupon, setCoupon] = useState<string>('');
    const [isInvalidCoupon, setIsInvalidCoupon] = useState<boolean>(false);

    const shippingFee = 40;


    const [checkRemoveItem, setCheckRemoveItem] = useState<boolean>(false);

    const dispatch = useDispatch();

    const totalItem = listData.reduce((total: any, item: { quantity: any }) => total + item.quantity, 0);

    const generalPrice = listData.reduce((previousValue: number, currentItem: any) => previousValue + currentItem.productID?.price * currentItem.quantity, 0);

    const cart: { productID: any; sizeProduct: any; colorProduct: any; quantity: number }[] = [];

    const generalPriceAfterShipping = generalPrice + shippingFee;

    useEffect(() => {
        const fetchVoucher = async () => {
            try {
                const response = await AxiosInstance().get('promotion/getAllPromotion');
                setVoucher(response.data);
            } catch (error) {
                console.error('Error fetching voucher:', error);
            }
        };

        fetchVoucher();
    }, []);

    const handleApplyCoupon = async () => {
        try {
            const response = await AxiosInstance().get(`promotion/getAllPromotion`);
            console.log("data voucher :" + response.data.discountCode);
            const appliedPromotion = response.data.find((promo: { discountCode: string }) => promo.discountCode === coupon);

            if (appliedPromotion) {
                const discountLevelValue = appliedPromotion.discountLevel;
                const discountAmount = (generalPriceAfterShipping * discountLevelValue) / 100;
                const discountedPriceValue = generalPriceAfterShipping - discountAmount;

                // Cập nhật giá trị discountLevel và discountedPrice vào state
                setDiscountLevel(discountLevelValue);
                setDiscountedPrice(discountedPriceValue);
                setIsVoucherApplied(true);
                setIsInvalidCoupon(false); // Không có lỗi nữa
                setInputBorderColor('#9098B1'); // Màu sắc khi có voucher
                console.log(`Applied discount: ${discountLevelValue}%`);
            } else {
                console.log('Invalid coupon code');
                setIsVoucherApplied(false);
                setIsInvalidCoupon(true); // Có lỗi khi mã giảm giá không hợp lệ
                setInputBorderColor('red'); // Màu sắc khi mã giảm giá không hợp lệ
            }
        } catch (error) {
            console.error('Error applying coupon:', error);
        }
    };

    const createTwoButtonAlert = () =>
        Alert.alert('Notification', 'Not product in your Cart ! ', [
            { text: 'OK' }
        ]);


    const handleRemoveItem = async (id: number) => {
        dispatch(removeItem(id));
        setCheckRemoveItem(true);
    }
    const handlRemoveData = async () => {
        listData.map((item: any) => {
            cart.push({ productID: item.productID._id, sizeProduct: item.sizeProduct._id, colorProduct: item.colorProduct._id, quantity: 1 })
        }
        )
        await AxiosInstance().post('/users/updateInfoUser', { _id: user._idUser, cartItem: cart });
        setCheckRemoveItem(false);
    }
    checkRemoveItem && handlRemoveData();
    const RenderItem = ({ item }: { item: any }) => {
        const [quantity, setQuantity] = useState<number>(item.quantity);

        const changeQuantityUp = () => {
            const newQuantity = quantity < 10 ? quantity + 1 : 10;
            setQuantity(newQuantity);
            dispatch(updateQuantity({ id: item.productID._id, quantity: newQuantity }));
        };

        const changeQuantityDown = () => {
            const newQuantity = quantity > 1 ? quantity - 1 : 1;
            setQuantity(newQuantity);
            dispatch(updateQuantity({ id: item.productID._id, quantity: newQuantity }));
        };
        return (
            <View style={styles.itemCart}>
                <View>
                    <Image source={{ uri: item.productID.image[0] }} style={{ width: 72, height: 72 }} />
                </View>
                <View style={{ flexDirection: 'column', height: '100%', gap: 10 }}>
                    <View style={styles.topItem}>
                        <Text style={styles.textTitleItem}>{item.productID.productName.length < 15 ? item.productID.productName : item.productID.productName.substring(0, 15) + "..."}</Text>
                        <Pressable onPress={() => handleRemoveItem(item.productID._id)}>
                            <Icon name='trash-outline' color='#9e9e9e' size={25} />
                        </Pressable>
                    </View>
                    <View style={styles.bottomItem}>
                        <Text style={styles.textPrice}>${item.productID.price}</Text>
                        <View style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 5, alignItems: 'center', justifyContent: 'space-between', width: 100, height: 30, paddingHorizontal: 2, position: 'absolute', right: 30 }}>
                            <Pressable onPress={() => changeQuantityDown()} style={quantity > 1 ? styles.btnNumberCountMinus : [styles.btnNumberCountMinus, { backgroundColor: '#E5E5E5' }]}><Icon name='remove-outline' size={25} /></Pressable>
                            <Text style={styles.textNumberCount}>{item.quantity}</Text>
                            <Pressable onPress={() => changeQuantityUp()} style={quantity < 10 ? styles.btnNumberCountPlus : [styles.btnNumberCountPlus, { backgroundColor: '#E5E5E5' }]}><Icon name='add-outline' size={25} /></Pressable>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ paddingHorizontal: PADDING_HORIZONTAL, width: WIDTH, backgroundColor: BG_COLOR }}  >
            <View style={{ marginTop: 17 }}>
                <Text style={styles.txtTitlePage}>Your Cart</Text>
            </View>
            <View style={styles.line}></View>
            <View style={{ height: HEIGHT * 0.35, marginTop: '11%' }}>
                {listData.length > 0 ?
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        renderItem={(object) => <RenderItem item={object.item} />}
                        data={listData}
                        keyExtractor={(item: any) => item?.productID?._id?.toString()}
                    /> : <Text style={{ fontSize: 20 }}>No data</Text>}
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            >

                <View style={{ height: HEIGHT * 0.8 }}>


                    <View style={{ borderWidth: 1, borderColor: isInvalidCoupon ? 'red' : inputBorderColor, borderRadius: 5, marginTop: 25 }}>
                        <InputItem
                            style={{ fontSize: 16 }}
                            value={coupon}
                            onChange={(value: any) => {
                                setCoupon(value);
                                setIsVoucherApplied(false);
                                setIsInvalidCoupon(false); // Ẩn lỗi khi người dùng bắt đầu nhập lại
                            }}
                            placeholder={isInvalidCoupon ? "Invalid Coupon Code" : "Enter Coupon Code"}
                            extra={
                                <Pressable onPress={handleApplyCoupon} style={styles.btnApply}>
                                    <Text style={styles.textApply}>Apply</Text>
                                </Pressable>
                            }
                        />
                    </View>

                    <View style={styles.itemTotalPrice}>
                        <View style={styles.headerTotalPrice}>
                            <Text style={styles.textHeaderTotalLeft}>Items ({totalItem})</Text>
                            <Text style={styles.textHeaderTotalRight}>${generalPrice}</Text>
                        </View>
                        <View style={styles.headerTotalPrice}>
                            <Text style={styles.textHeaderTotalLeft}>Shipping</Text>
                            <Text style={styles.textHeaderTotalRight}>{shippingFee}$</Text>
                        </View>
                        <View style={styles.headerTotalPrice}>
                            <Text style={styles.textHeaderTotalLeft}>Voucher</Text>
                            <Text style={styles.textHeaderTotalRight}>{isVoucherApplied ? `${discountLevel}%` : '0%'}</Text>
                        </View>
                        <View style={styles.bottomTotalPrice}>
                            <Text style={styles.textBottomTotalLeft}>Total Price</Text>
                            <Text style={styles.textBottomTotalRight}>{isVoucherApplied ? `$${discountedPrice}` : `$${generalPriceAfterShipping}`}</Text>
                        </View>

                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Pressable onPress={() => listData.length > 0 ? navigations.navigate('CartDetail', {
                            Level: isVoucherApplied ? discountLevel : '0',
                            totalAfterShipping: isVoucherApplied ? discountedPrice : generalPriceAfterShipping,
                            generalPriceAfterShipping,
                            shipping: shippingFee

                        }) : createTwoButtonAlert()}>
                            <ButtonBottom title='Check Out' />
                        </Pressable>
                    </View>
                </View>

            </ScrollView>


        </SafeAreaView >
    )
}

export default CartScreen

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
    btnApply: {
        backgroundColor: '#40BFFF',
        width: 65,
        height: '101%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: -16,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5
    },
    textApply: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21.60,
        letterSpacing: 0.50,
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
        letterSpacing: 0.06,
        marginTop: 4,
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
