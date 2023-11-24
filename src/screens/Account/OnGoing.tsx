import { Image, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../../utilities';

const OnGoing = (props: any) => {
    const { date, status } = props.state;
    console.log(status);

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>OnGoing</Text>
            <View style={{ flexDirection: 'row', marginTop: 25 }}>
                <Icon name='calendar-outline' size={22} color={'#223263'} />
                <Text style={styles.textDate}>{date}</Text>
            </View>
            <View style={styles.grpcontent}>
                <View style={{ marginRight: '8%', gap: 110 }}>
                    <Icon name='checkmark-done-circle' size={25} color={status === 1 || status > 1 ? COLORS.green : COLORS.gray} />
                    <Icon name='checkmark-done-circle' size={25} color={status === 2 || status > 2 ? COLORS.green : COLORS.gray} />
                    <Icon name='checkmark-done-circle' size={25} color={status === 3 || status > 3 ? COLORS.green : COLORS.gray} />
                    <Icon name='checkmark-done-circle' size={25} color={status === 4 ? COLORS.green : COLORS.gray} />
                </View>
                <View style={styles.content}>
                    <View style={styles.item}>
                        <Image source={require('../../asset/image/ongoing1.png')} />
                        <Text style={styles.textItem}>Placed order successfully</Text>
                    </View>
                    <View style={styles.item}>
                        <Image source={require('../../asset/image/ongoing2.png')} />
                        <Text style={styles.textItem}>Order confirmation successful</Text>
                    </View>
                    <View style={styles.item}>
                        <Image source={require('../../asset/image/ongoing3.png')} />
                        <Text style={styles.textItem}>Orders are being delivered</Text>
                    </View>
                    <View style={styles.item}>
                        <Image source={require('../../asset/image/ongoing4.png')} />
                        <Text style={styles.textItem}>Order has been delivered successfully</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default OnGoing

const styles = StyleSheet.create({
    textTitle: {
        color: '#223263',
        fontSize: 20,
        fontFamily: 'Klarna Text',
        fontWeight: '700',
        letterSpacing: 1.28,
    },

    grpcontent: {
        flexDirection: 'row',
        marginTop: 40
    },
    textItem: {
        color: '#223263',
        marginLeft: 30,
        fontSize: 16
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 70,
    },
    content: {
        width: '80%',
        justifyContent: 'space-between',
        marginTop: -10,
    },
    textTime: {
        color: '#F37A20',
        fontSize: 14,
        fontWeight: '400'
    },
    calendar: {
        width: '8%',
        height: '100%'
    },
    textDate: {
        alignItems: 'center',
        color: '#223263',
        fontSize: 16,
        fontFamily: 'Klarna Text',
        fontWeight: '700',
        letterSpacing: 1.28,
        marginLeft: 10
    },

    container: {
        width: '100%',
        height: '90%',
        paddingTop: 20,
        paddingHorizontal: 20
    }
})