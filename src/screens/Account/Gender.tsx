import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SelectList } from 'react-native-dropdown-select-list'
import Header from '../../component/Header/Header'
import ButtonBottom from '../../component/Button/Button'
import { HEIGHT, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities/utility'



const Gender = () => {

    const gender = [
        { key: '1', value: 'Male' },
        { key: '2', value: 'Female' },
        { key: '3', value: 'Other' },
    ]

    const [selected, setSelected] = React.useState<string>('');

    return (
        <View style={styles.container}>
            <Header hideBack={true} title='Gender' />

            <View style={styles.line}></View>

            <View style={styles.Gender}>
                <Text style={styles.txtGender}>Choose Gender</Text>
                <SelectList
                    setSelected={setSelected}
                    data={gender}
                    save="value"
                    placeholder={selected}
                    defaultOption={{ key: 1, value: 'Male' }}
                    boxStyles={{ borderRadius: 5 }}
                    search={false}
                    inputStyles={{ width: '95%', fontSize: 16 }}
                    dropdownTextStyles={{ fontSize: 16 }}
                    dropdownItemStyles={{ borderBottomWidth: 0.5, borderBottomColor: '#b0b0b0', marginBottom: 5 }}
                    dropdownStyles={{ height: 150 }}
                />
            </View>


            <View style={{ width: '100%', position: 'absolute', bottom: 10 }}>
                <ButtonBottom title='Save' />
            </View>
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

    txtGender: {
        color: '#223263',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.50,
        paddingBottom: 10,
        alignSelf: 'flex-start'
    },

    Gender: {
        marginTop: 20,
        alignItems: 'center',
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