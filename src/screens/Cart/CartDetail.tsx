import { StyleSheet, Text, View, ScrollView, Image, Pressable, FlatList, Alert, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { PropsCart } from '../../component/Navigation/Props'
import ButtonBottom from '../../component/Button/Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BG_COLOR, HEIGHT, PADDING_HORIZONTAL, WIDTH } from '../../utilities/utility';
import { useSelector } from 'react-redux';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import AxiosInstance from '../../Axios/Axios'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { RootStackScreenEnumAccount } from '../../component/Root/RootStackAccount'


type CartDetailRouteParams = {
    CartDetail: {
        Level?: string;
        totalAfterShipping?: number;
        generalPriceAfterShipping: number;
        shipping: number;
    };
};


const CartDetail = ({ navigation }: NativeStackHeaderProps) => {
    const listData = useSelector((state: any) => {
        return state.SlicesReducer.user.cartItem;
    });
    const route = useRoute<RouteProp<CartDetailRouteParams, 'CartDetail'>>();
    const [voucher, setVoucher] = useState<string>('');
    const [totalAfterShipping, setTotalAfterShipping] = useState<number>(0);
    const discountLevel = route.params?.Level ?? '';

    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
    const [isReceiverNameValid, setIsReceiverNameValid] = useState(true);
    const [paymentMethods, setPaymentMethods] = useState<{ _id: number, name: string }[]>([]);
    const [addressList, setAddressList] = useState<string[]>([]);



    const [receiverName, setReceiverName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [selectedAddress, setSelectedAddress] = useState<string>('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    const address = useSelector((state: any) => state.SlicesReducer.user.address);



    const handleReceiverNameChange = (text: string) => {
        setReceiverName(text);
        setIsReceiverNameValid(text.trim() !== '');
    };

    const handlePhoneNumberChange = (text: string) => {
        setPhoneNumber(text);
        setIsPhoneNumberValid(isValidPhoneNumber(text));
    };

    const handleOrderSubmit = () => {
        if (receiverName.trim() === '') {
            Alert.alert('Thông báo', 'Vui lòng nhập tên người nhận hàng');
            return;
        }

        if (phoneNumber.trim() === '' || !isValidPhoneNumber(phoneNumber)) {
            Alert.alert('Thông báo', 'Vui lòng nhập số điện thoại hợp lệ');
            return;
        }

        if (!selectedPaymentMethod) {
            Alert.alert('Thông báo', 'Vui lòng chọn phương thức thanh toán');
            return;
        }

        console.log('Tên người nhận hàng:', receiverName);
        console.log('Số điện thoại:', phoneNumber);
        console.log('Địa chỉ nhận hàng:', selectedAddress);
        console.log('Phương thức thanh toán được chọn:', selectedPaymentMethod);

        // Thêm các bước xử lý tiếp theo sau khi kiểm tra thành công
    };



    const isValidPhoneNumber = (number: string) => {
        const phoneNumberRegex = /^\d{10,12}$/;
        return phoneNumberRegex.test(number);
    };

    useEffect(() => {
        setVoucher(route.params?.Level ?? '');
        setTotalAfterShipping(route.params?.totalAfterShipping ?? 0);
    }, [route.params]);


    useEffect(() => {
        const fetchPayment = async () => {
            try {
                const response = await AxiosInstance().get(`payment/getAllPaymentMethod`);
                const paymentMethods = response.data.data;  // Thay đổi tên trường nếu cần thiết
                setPaymentMethods(paymentMethods && Array.isArray(paymentMethods) ? paymentMethods : []);
            } catch (error) {
                console.error('Error fetching payment methods:', error);
            }
        };

        fetchPayment();
    }, []);

    const RenderItem = ({ item }: any) => {
        return (
            <View style={styles.itemCart}>
                <View>
                    <Image source={{ uri: item.productID.image[0] }} style={{ width: 72, height: 72 }} />
                </View>
                <View style={{ flexDirection: 'column', height: '100%', gap: 10 }}>
                    <View style={styles.topItem}>
                        <Text style={styles.textTitleItem}>{item.productID.productName.length < 25 ? item.productID.productName : item.productID.productName.substring(0, 25) + "..."}</Text>
                    </View>
                    <View style={styles.bottomItem}>
                        <Text style={styles.textPrice}>${item.productID.price}</Text>
                        <View style={{ backgroundColor: 'white', borderRadius: 5, alignItems: 'center', justifyContent: 'center', width: 100, height: 30, paddingHorizontal: 2, position: 'absolute', right: 30 }}>
                            <Text style={styles.textNumberCount}>{item.quantity}</Text>
                        </View>
                    </View>
                </View>
            </View>

        );
    };

    const RadioButton = ({ selected }: { selected: boolean }) => {
        return (
            <View style={[styles.radioButton, { backgroundColor: selected ? '#40BFFF' : 'transparent' }]}>
                {selected && <View style={styles.innerCircle} />}
            </View>
        );
    };
    const RenderPaymentItem = ({ paymentMethod }: { paymentMethod: any }) => {
        const [isSelected, setIsSelected] = useState(false);

        const handlePress = () => {
            setPaymentMethods((prevMethods) => {
                const updatedMethods = prevMethods.map((method) => ({
                    ...method,
                    isSelected: method === paymentMethod,
                }));
                return updatedMethods;
            });
            setIsSelected(true);
            setSelectedPaymentMethod(paymentMethod);
        };

        return (
            <TouchableOpacity onPress={handlePress}>
                <View style={styles.paymentItemContainer}>
                    <Text>{paymentMethod.name}</Text>
                    <RadioButton selected={paymentMethod.isSelected} />
                </View>
            </TouchableOpacity>
        );
    };


    return (
        <SafeAreaView style={{ paddingHorizontal: PADDING_HORIZONTAL, width: WIDTH, backgroundColor: BG_COLOR, height: '100%' }}>
            <View style={{ marginTop: 17 }}>
                <Text style={styles.txtTitlePage}>Your Cart</Text>
            </View>
            <View style={styles.line}></View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {listData.map((item: any) => (
                    <RenderItem keyExtractor={item.productID._id} item={item} />
                ))}

                <View style={styles.itemTotalPrice}>
                    <Text style={styles.textBottomTotalLeft}>Total Price (+ shipping)</Text>
                    <Text style={styles.textBottomTotalRight}>${totalAfterShipping}</Text>
                </View>
                <View style={styles.item}>
                    <TextInput
                        style={[
                            styles.textinput,
                            {
                                borderColor: receiverName.trim() !== '' || isReceiverNameValid ? '#E5E5E5' : 'red',
                            },
                        ]}
                        value={receiverName}
                        onChangeText={handleReceiverNameChange}
                        placeholder="Tên người nhận hàng"
                    />
                    <TextInput
                        style={[
                            styles.textinput,
                            {
                                borderColor: phoneNumber.trim() !== '' || isPhoneNumberValid ? '#E5E5E5' : 'red',
                            },
                        ]}
                        value={phoneNumber}
                        onChangeText={handlePhoneNumberChange}
                        placeholder="Số điện thoại"
                        keyboardType="numeric"
                    />
                    <View>
                        <SelectList
                            setSelected={setSelectedAddress}
                            data={address.map((address: any, index: any) => {
                                const value = `${address.street}, ${address.ward}, ${address.district}, ${address.city}`
                                return { key: index, value: value }
                            })}
                            save="value"
                            placeholder={selectedAddress}
                            defaultOption={{ key: 1, value: 'Select an address' }}
                            boxStyles={{ borderRadius: 5, borderWidth: 0.5 }}
                            search={false}
                            inputStyles={{ width: '95%', fontSize: 15 }}
                            dropdownTextStyles={{ fontSize: 16 }}
                            dropdownItemStyles={{ borderBottomWidth: 0.5, borderBottomColor: '#b0b0b0', marginBottom: 5 }}
                            dropdownStyles={{ height: 150, borderWidth: 0.5 }}
                        />
                        <Pressable onPress={() => navigation?.navigate('Account', { screen: RootStackScreenEnumAccount.Add_Address })}>
                            <Text>Thêm địa chỉ</Text>
                        </Pressable>
                    </View>
                    <Text>Chọn phương thức thanh toán:</Text>
                    {paymentMethods && paymentMethods.map((paymentMethod) => (
                        <RenderPaymentItem key={paymentMethod._id} paymentMethod={paymentMethod} />
                    ))}


                </View>
            </ScrollView>
            <View style={{ position: 'absolute', bottom: 0, width: '100%', alignSelf: 'center' }}>
                <Pressable onPress={() => handleOrderSubmit()}>
                    <ButtonBottom title='Check Out' />
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default CartDetail;

const styles = StyleSheet.create({
    paymentItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 5,
        marginTop: 10,
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#40BFFF',
    },
    addressItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 5,
        marginTop: 10,
    },

    textinput: {
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        height: 40,
        width: '90%',
        padding: 10,
        fontSize: 15,
    },

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
        alignItems: 'center',
    },
    headerTotalPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    itemTotalPrice: {
        padding: 10, // giảm padding xuống 10
        borderWidth: 0.5,
        borderColor: '#9098B1',
        borderRadius: 5,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    item: {
        padding: 10, // giảm padding xuống 10
        borderWidth: 0.5,
        borderColor: '#9098B1',
        borderRadius: 5,
        marginTop: 20,
    },
    topItem: {
        flexDirection: 'row',
        columnGap: 15, // giảm khoảng cách giữa các cột xuống 15
        paddingLeft: 10, // giảm padding xuống 10
    },
    bottomItem: {
        flexDirection: 'row',
        height: '50%',
        alignItems: 'center',
        paddingLeft: 10, // giảm padding xuống 10
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
        fontSize: 16, // giảm font size xuống 16
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 18,
        marginTop: 4,
        alignItems: 'center',
    },
    textPrice: {
        color: '#40BFFF',
        fontSize: 13, // giảm font size xuống 13
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 16,
        letterSpacing: 0.50,
    },
    textTitleItem: {
        width: '65%',
        color: '#223263',
        fontSize: 13, // giảm font size xuống 13
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 16,
        letterSpacing: 0.50,
    },
    itemCart: {
        height: 90, // giảm chiều cao xuống 90
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10, // giảm padding xuống 10
        marginBottom: 12 // giảm marginBottom xuống 12
    },
    line: {
        position: 'absolute',
        width: WIDTH,
        height: 1,
        backgroundColor: '#E5E5E5',
        marginTop: 50, // giảm marginTop xuống 50
    },
    txtTitlePage: {
        color: '#223263',
        fontSize: 18, // giảm font size xuống 18
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 22,
        letterSpacing: 0.08,
    },
    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 5,
    },
    itemInfoContainer: {
        flexDirection: 'column',
        height: '100%',
        gap: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 80,
        height: 30,
        paddingHorizontal: 2,
        position: 'absolute',
        right: 30,
    },
})

