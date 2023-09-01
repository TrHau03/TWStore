import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Button, DatePicker } from '@ant-design/react-native'
import React, {useState} from 'react'

const Birthday = () => {
    const [birthday, setbirthday] = useState<Date>();

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Pressable>
                    <Image source={require('../asset/image/icon_back.png')} />
                </Pressable>
                <Text style={styles.txtTitle}>Birthday</Text>
            </View>

            <View style={styles.line}></View>
            <View style={styles.Birthday}>
                <Text style={styles.txtBirthday}>Your Birthday</Text>

                <View style={styles.input}>
                    <TextInput style={styles.txtInput} placeholder="12/12/2012" />
                    <Image source={require('../asset/image/iconBirthday.png')} style={{ alignSelf: 'center' }} />
                </View>

                <DatePicker
                    value={birthday}
                    mode="date"
                    defaultDate={new Date()}
                    minDate={new Date(2015, 7, 6)}
                    maxDate={new Date(2026, 11, 3)}
                    onChange={(value) => setbirthday(value) }
                    format="YYYY-MM-DD"></DatePicker>
            </View>

            <LinearGradient colors={['#46CAF3', '#46CAF3', '#68B1D9']} style={styles.btnSave}>
                <Pressable>
                    <Text style={styles.txtSave}>Save</Text>
                </Pressable>
            </LinearGradient>
        </View>
    )
}

export default Birthday

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
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },

    txtInput: {
        color: '#9098B1',
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21.60,
        letterSpacing: 0.50,
    },

    txtBirthday: {
        color: '#223263',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.50,
        paddingBottom: 10,
    },

    Birthday: {
        padding: 10,
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
        width: '100%',
        height: '100%',
        paddingTop: 20,
    }
})