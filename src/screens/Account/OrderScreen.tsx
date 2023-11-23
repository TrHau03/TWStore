import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import Header from '../../component/Header/Header'
import { PropsAccount } from '../../component/Navigation/Props';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import OnGoing from './OnGoing';
import * as Animatable from 'react-native-animatable';
import ButtonBottom from '../../component/Button/Button';
import { listOrder } from '../../redux/silces/HomeSelector';



const OrderScreen = ({ navigation }: PropsAccount) => {
    const [date, setDate] = useState<String>('123')
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const dispatch = useDispatch();
    const Order = useSelector(listOrder);
    console.log(Order);
    
    
    const RenderItem = (props: any) => {
        const { data, navigation } = props;
        const { item } = data;

        return <TouchableOpacity style={styles.box} onPress={() => navigation?.navigate('Order_Detail')}>
            <View>
                <Text style={styles.MaCode}>{item.code}</Text>
                <Text style={styles.title}>Order at Lafyuu : {item.date}</Text>
                <View style={styles.boxBottom}>
                    <Text style={styles.title}>Items</Text>
                    <Text style={styles.content}>{item.items} Items purchased</Text>
                </View>
                <View style={styles.boxBottom}>
                    <Text style={styles.title}>Price</Text>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
                <View style={styles.boxBottom}>
                    <Text style={styles.title}>Order Status</Text>
                    <TouchableOpacity onPress={() => {setModalVisible(true); setDate(item.date)}  }>
                        <Icon name='chevron-forward-outline' size={25} color={'#525252'} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity >;
    };

    return (
        <View style={styles.container}>
            <Modal
                transparent={false}
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => true} >
                <View style={{ height: '100%' }}>
                    <OnGoing  action={{dispatch, setDate}} state={{date}}/>
                    <Animatable.View animation={'bounceIn'} style={{ paddingHorizontal: 20, position: 'relative', bottom: 20 }}>
                        <Pressable onPress={() => { setModalVisible(false) }}>
                            <ButtonBottom title='Cancel'/>
                        </Pressable>
                    </Animatable.View>
                </View>
            </Modal>
            <Header title='Order' />

            <View style={styles.line}></View>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={Order}
                renderItem={(item) => <RenderItem navigation={navigation} data={item}></RenderItem>}
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