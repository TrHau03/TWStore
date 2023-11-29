import { StyleSheet, Text, View, Pressable, Image, TextInput, NativeSyntheticEvent, TextInputEndEditingEventData, } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import ButtonBottom from '../../component/Button/Button'
import Header from '../../component/Header/Header'
import Icon from 'react-native-vector-icons/Ionicons'
import { HEIGHT, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities/utility'
import { useDispatch, useSelector } from 'react-redux'
import { updatePhone, updateUser } from '../../Redux/silces/Silces'
import AxiosInstance from '../../Axios/Axios'

const Phone = (props: any) => {
    const { setModalVisible } = props.action;
    const [phone, setPhone] = useState<string>()
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.SlicesReducer.user);

    const handleChangePhone = () => {
        dispatch(updatePhone(phone));
    }

    const fetchPhone = async () => {
        const response = await AxiosInstance().post(`/users/UpdateInfoUser/`, { _id: user._id, phone: phone });
    };

    return (
        <View style={styles.container}>
            <Header hideBack title='PhoneNumber' />

            <View style={styles.line}></View>

            <View style={styles.Email}>
                <Text style={styles.txtEmail}>Phone Number</Text>
                <View style={styles.input}>
                    <Icon name='phone-portrait-outline' size={30} />
                    <TextInput style={styles.txtInput} value={phone} onEndEditing={(e: NativeSyntheticEvent<TextInputEndEditingEventData>) => { setPhone(e.nativeEvent.text) }} keyboardType='numeric' maxLength={11} />
                </View>
            </View>

            <Pressable onPress={() => { setModalVisible(false), handleChangePhone(), fetchPhone() }} style={{ width: '100%', position: 'absolute', bottom: 15 }}>
                <ButtonBottom title='Save' />
            </Pressable>
        </View>
    )
}

export default Phone

const styles = StyleSheet.create({
    txtSave: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 25.20,
        letterSpacing: 0.50,
    },

    btnSave: {
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#FFFFFF",
        backgroundColor: "#46CAF3",
        height: 50,
        width: "90%",
        alignSelf: 'center',
        position: 'absolute',
        bottom: 30,
    },

    input: {
        width: '100%',
        height: 50,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#9098B1",
        borderRadius: 5,
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center'
    },

    txtInput: {
        width: '50%',
        color: '#9098B1',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21.60,
        letterSpacing: 0.50,
        marginLeft: 10,
    },

    txtEmail: {
        color: '#223263',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.50,
        paddingBottom: 10,
        alignSelf: 'flex-start'
    },

    Email: {
        alignItems: 'center',
        marginTop: 20,
        width: '90%',
    },

    line: {
        height: 1,
        backgroundColor: '#EBF0FF',
        width: '100%',
        marginTop: 30,
    },

    txtTitle: {
        color: '#223263',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 24,
        letterSpacing: 0.08,
        paddingLeft: 10,
    },
    title: {
        flexDirection: 'row',
        paddingLeft: 20,
    },

    container: {
        height: HEIGHT * 0.8,
        width: WIDTH,
        alignItems: 'center',
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingTop: PADDING_TOP,
    }
})