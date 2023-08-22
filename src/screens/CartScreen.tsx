import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Stepper } from '@ant-design/react-native'
const CartScreen = () => {
    const [numberCount, setNumberCount] = useState<number>(1)
    return (
        <View style={{ paddingHorizontal: 16 }}>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.txtTitlePage}>Your Cart</Text>
            </View>
            <View style={styles.line}></View>
            <ScrollView style={{ height: '30%', marginTop: '20%'}}>
                <View style={styles.itemCart}>
                    <View>
                        <Image source={require('../asset/image/product_1.png')} />
                    </View>
                    <View style={{ flexDirection: 'column', height: '100%' }}>
                        <View style={{ height: '50%', flexDirection: 'row', alignItems: 'center', gap: 10, paddingLeft: 20 }}>
                            <Text style={styles.textTitleItem}>Nike Air Zoom Pegasus 36 Miami</Text>
                            <Icon name='heart' size={25} color={'#FB7181'} />
                            <Icon name='trash-outline' size={25} />
                        </View>
                        <View style={{ flexDirection: 'row', height: '50%', alignItems: 'center', paddingLeft: 20, gap: 100 }}>
                            <Text style={styles.textPrice}>$299,43</Text>
                            <View style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 5, alignItems: 'center', justifyContent: 'space-between', width: 100, height: 30, paddingHorizontal: 2 }}>
                                <Pressable onPress={() => numberCount > 1 ? setNumberCount(numberCount - 1) : setNumberCount(1)} style={numberCount > 1 ? styles.btnNumberCountMinus : [styles.btnNumberCountMinus, { backgroundColor: '#E5E5E5' }]}><Icon name='remove-outline' size={25} /></Pressable>
                                <Text style={styles.textNumberCount}>{numberCount}</Text>
                                <Pressable onPress={() => numberCount < 10 ? setNumberCount(numberCount + 1) : setNumberCount(10)} style={numberCount < 10 ? styles.btnNumberCountPlus : [styles.btnNumberCountPlus, { backgroundColor: '#E5E5E5' }]}><Icon name='add-outline' size={25} /></Pressable>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.itemCart}>
                    <View>
                        <Image source={require('../asset/image/product_1.png')} />
                    </View>
                    <View style={{ flexDirection: 'column', height: '100%' }}>
                        <View style={{ height: '50%', flexDirection: 'row', alignItems: 'center', gap: 10, paddingLeft: 20 }}>
                            <Text style={styles.textTitleItem}>Nike Air Zoom Pegasus 36 Miami</Text>
                            <Icon name='heart' size={25} color={'#FB7181'} />
                            <Icon name='trash-outline' size={25} />
                        </View>
                        <View style={{ flexDirection: 'row', height: '50%', alignItems: 'center', paddingLeft: 20, gap: 100 }}>
                            <Text style={styles.textPrice}>$299,43</Text>
                            <View style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 5, alignItems: 'center', justifyContent: 'space-between', width: 100, height: 30, paddingHorizontal: 2 }}>
                                <Pressable onPress={() => numberCount > 1 ? setNumberCount(numberCount - 1) : setNumberCount(1)} style={numberCount > 1 ? styles.btnNumberCountMinus : [styles.btnNumberCountMinus, { backgroundColor: '#E5E5E5' }]}><Icon name='remove-outline' size={25} /></Pressable>
                                <Text style={styles.textNumberCount}>{numberCount}</Text>
                                <Pressable onPress={() => numberCount < 10 ? setNumberCount(numberCount + 1) : setNumberCount(10)} style={numberCount < 10 ? styles.btnNumberCountPlus : [styles.btnNumberCountPlus, { backgroundColor: '#E5E5E5' }]}><Icon name='add-outline' size={25} /></Pressable>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.itemCart}>
                    <View>
                        <Image source={require('../asset/image/product_1.png')} />
                    </View>
                    <View style={{ flexDirection: 'column', height: '100%' }}>
                        <View style={{ height: '50%', flexDirection: 'row', alignItems: 'center', gap: 10, paddingLeft: 20 }}>
                            <Text style={styles.textTitleItem}>Nike Air Zoom Pegasus 36 Miami</Text>
                            <Icon name='heart' size={25} color={'#FB7181'} />
                            <Icon name='trash-outline' size={25} />
                        </View>
                        <View style={{ flexDirection: 'row', height: '50%', alignItems: 'center', paddingLeft: 20, gap: 100 }}>
                            <Text style={styles.textPrice}>$299,43</Text>
                            <View style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 5, alignItems: 'center', justifyContent: 'space-between', width: 100, height: 30, paddingHorizontal: 2 }}>
                                <Pressable onPress={() => numberCount > 1 ? setNumberCount(numberCount - 1) : setNumberCount(1)} style={numberCount > 1 ? styles.btnNumberCountMinus : [styles.btnNumberCountMinus, { backgroundColor: '#E5E5E5' }]}><Icon name='remove-outline' size={25} /></Pressable>
                                <Text style={styles.textNumberCount}>{numberCount}</Text>
                                <Pressable onPress={() => numberCount < 10 ? setNumberCount(numberCount + 1) : setNumberCount(10)} style={numberCount < 10 ? styles.btnNumberCountPlus : [styles.btnNumberCountPlus, { backgroundColor: '#E5E5E5' }]}><Icon name='add-outline' size={25} /></Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >

        </View >
    )
}

export default CartScreen

const styles = StyleSheet.create({
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
        marginTop: 80,

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