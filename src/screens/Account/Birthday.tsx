import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native'

import React, { useState } from 'react'
import ButtonBottom from '../../component/Button/Button'
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../component/Header/Header';
import { HEIGHT, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities/utility';

const Birthday = () => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState<boolean>(false);
    console.log(date);

    return (
        <View style={styles.container}>
            <Header hideBack title='BirthDay' />

            <View style={styles.line}></View>
            <View style={styles.Birthday}>
                <Text style={styles.txtBirthday}>Your Birthday</Text>

                <View style={styles.input}>
                    <Text style={styles.txtInput}>{`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</Text>
                    <Pressable onPress={() => setOpen(true)} style={{ paddingRight: 10 }}>
                        <Icon name='calendar' size={30} color={'#434343'} />
                    </Pressable>
                </View>

                <DatePicker
                    modal
                    mode='date'
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>

            <View style={{ width: '100%', position: 'absolute', bottom: 10 }}>
                <ButtonBottom title='Save' />
            </View>
        </View>
    )
}

export default Birthday

const styles = StyleSheet.create({
    input: {
        width: 'auto',
        height: 50,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#9098B1",
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30
    },

    txtInput: {
        width: '80%',
        color: '#9098B1',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '700',
        letterSpacing: 0.50,
        paddingHorizontal: 15
    },

    txtBirthday: {
        color: '#223263',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.50,
        paddingBottom: 10,
        alignSelf: 'flex-start'
    },

    Birthday: {
        alignItems: 'center',
        marginTop: 20,
        width: '90%',
    },

    line: {
        height: 0.5,
        backgroundColor: '#ADA8A8',
        width: '120%',
        marginTop: 20,
        position: 'relative',
        right: 20
    },

    txtTitle: {
        color: '#223263',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 24,
        letterSpacing: 0.08,
    },
    title: {
        flexDirection: 'row',
    },

    container: {
        height: HEIGHT * 0.8,
        width: WIDTH,
        alignItems: 'center',
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingTop: PADDING_TOP,
    }
})