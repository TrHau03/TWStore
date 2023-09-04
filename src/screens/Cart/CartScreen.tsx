import { StyleSheet, Text, View, ScrollView, Image, Pressable, ListRenderItemInfo, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import React, { useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { InputItem, Stepper } from '@ant-design/react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { PropsCart } from '../../component/Navigation/Props'
import ButtonBottom from '../../component/Button/Button'
interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    size: string;
    color: string;
    evalute: number;
    description: string;
    type: string;
}


const RenderItem = ({ item }: { item: Product }) => {
    const [numberCount, setNumberCount] = useState<number>(1);
    return (
        <View style={styles.itemCart}>
            <View>
                <Image source={{ uri: item.image }} style={{ width: 72, height: 72 }} />
            </View>
            <View style={{ flexDirection: 'column', height: '100%' }}>
                <View style={styles.topItem}>
                    <Text style={styles.textTitleItem}>{item.name}</Text>
                    <Icon name='heart' size={25} color={'#FB7181'} />
                    <Icon name='trash-outline' size={25} />
                </View>
                <View style={styles.bottomItem}>
                    <Text style={styles.textPrice}>${item.price}</Text>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 5, alignItems: 'center', justifyContent: 'space-between', width: 100, height: 30, paddingHorizontal: 2, position: 'absolute', right: 30 }}>
                        <Pressable onPress={() => numberCount > 1 ? setNumberCount(numberCount - 1) : setNumberCount(1)} style={numberCount > 1 ? styles.btnNumberCountMinus : [styles.btnNumberCountMinus, { backgroundColor: '#E5E5E5' }]}><Icon name='remove-outline' size={25} /></Pressable>
                        <Text style={styles.textNumberCount}>{numberCount}</Text>
                        <Pressable onPress={() => numberCount < 10 ? setNumberCount(numberCount + 1) : setNumberCount(10)} style={numberCount < 10 ? styles.btnNumberCountPlus : [styles.btnNumberCountPlus, { backgroundColor: '#E5E5E5' }]}><Icon name='add-outline' size={25} /></Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}


const CartScreen = ({ navigation }: PropsCart) => {
    const [cupon, setCupon] = useState<string>('');
    return (
        <View style={{ paddingHorizontal: 16 }}  >
            <View style={{ marginTop: 17 }}>
                <Text style={styles.txtTitlePage}>Your Cart</Text>
            </View>
            <View style={styles.line}></View>
            <FlatList style={{ maxHeight: '40%', marginTop: '11%' }}
                showsVerticalScrollIndicator={false}
                renderItem={(object) => <RenderItem item={object.item} />}
                data={data}
                onContentSizeChange={() => {
                }}
                keyExtractor={(item: Product) => item.id.toString()}
            />
            <View style={{ borderWidth: 1, borderColor: '#9098B1', borderRadius: 5, marginTop: 25 }}>
                <InputItem
                    style={{ fontSize: 16 }}
                    value={cupon}
                    onChange={(value: any) => {
                        setCupon(value)
                    }}
                    placeholder="Enter Cupon Code"
                    extra={
                        <Pressable style={styles.btnApply}>
                            <Text style={styles.textApply}>Apply</Text>
                        </Pressable>
                    }
                />
            </View>
            <View style={styles.itemTotalPrice}>
                <View style={styles.headerTotalPrice}>
                    <Text style={styles.textHeaderTotalLeft}>Items (3)</Text>
                    <Text style={styles.textHeaderTotalRight}>$598.86</Text>
                </View>
                <View style={styles.headerTotalPrice}>
                    <Text style={styles.textHeaderTotalLeft}>Items (3)</Text>
                    <Text style={styles.textHeaderTotalRight}>$598.86</Text>
                </View>
                <View style={styles.headerTotalPrice}>
                    <Text style={styles.textHeaderTotalLeft}>Items (3)</Text>
                    <Text style={styles.textHeaderTotalRight}>$598.86</Text>
                </View>
                <View style={styles.bottomTotalPrice}>
                    <Text style={styles.textBottomTotalLeft}>Items (3)</Text>
                    <Text style={styles.textBottomTotalRight}>$598.86</Text>
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <ButtonBottom title='Check Out' />
            </View>
        </View >
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
        paddingTop: 5,
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
        height: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingLeft: 20
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
        width: '100%',
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        marginBottom: 16
    },
    line: {
        position: 'absolute',
        width: '120%',
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
const data = [{
    "id": 1,
    "name": "Mediterranean Brome",
    "image": "http://dummyimage.com/72x72.png/dddddd/000000",
    "price": 1999,
    "size": "XS",
    "color": "#b2e162",
    "evalute": 5,
    "description": "Late ef-spch/lang df NEC",
    "type": "MULTI VITAMIN INFUSION"
}, {
    "id": 2,
    "name": "Bellflower",
    "image": "http://dummyimage.com/72x72.png/dddddd/000000",
    "price": 259,
    "size": "M",
    "color": "#53918b",
    "evalute": 2,
    "description": "Budd-chiari syndrome",
    "type": "Lamotrigine"
}, {
    "id": 3,
    "name": "Hollyhock",
    "image": "http://dummyimage.com/72x72.png/dddddd/000000",
    "price": 99,
    "size": "3XL",
    "color": "#f5c92e",
    "evalute": 1,
    "description": "Blepharochalasis",
    "type": "Pravastatin Sodium"
}, {
    "id": 4,
    "name": "Dock",
    "image": "http://dummyimage.com/72x72.png/ff4444/ffffff",
    "price": 399,
    "size": "M",
    "color": "#fde3b6",
    "evalute": 1,
    "description": "Special symptom NEC/NOS",
    "type": "Ablavar"
}, {
    "id": 5,
    "name": "Pink Mountainheath",
    "image": "http://dummyimage.com/72x72.png/ff4444/ffffff",
    "price": 200,
    "size": "3XL",
    "color": "#330c8f",
    "evalute": 4,
    "description": "Mucous polyp of cervix",
    "type": "Prednisone"
}]