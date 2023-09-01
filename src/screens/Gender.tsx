import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SelectList } from 'react-native-dropdown-select-list'




const Gender = () => {

    const gender = [
        { key: '1', value: 'Male'},
        { key: '2', value: 'Female' },
        { key: '3', value: 'Other' },
    ]

    const [selected, setSelected] = React.useState("");

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Pressable>
                    <Image source={require('../asset/image/icon_back.png')} />
                </Pressable>
                <Text style={styles.txtTitle}>Gender</Text>
            </View>

            <View style={styles.line}></View>

            <View style={styles.Gender}>
                <Text style={styles.txtGender}>Choose Gender</Text>
                <SelectList
                    setSelected={setSelected} 
                    data={gender}
                    save="value"
                    placeholder='Male'
                    defaultOption={{key: 1,value: 'Male'}}
                    boxStyles={{borderRadius:5}}
                /> 

                

            </View>


            <LinearGradient colors={['#46CAF3', '#46CAF3', '#68B1D9']} style={styles.btnSave}>
                <Pressable>
                    <Text style={styles.txtSave}>Save</Text>
                </Pressable>
            </LinearGradient>
        </View>
    )
}

export default Gender

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
    },

    txtInput: {
        color: '#9098B1',
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21.60,
        letterSpacing: 0.50,
        position: 'absolute',
        right: 10,
    },

    txtGender: {
        color: '#223263',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.50,
        paddingBottom: 10,
    },

    Gender: {
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