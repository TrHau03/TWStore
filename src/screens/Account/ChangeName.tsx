import { StyleSheet, Text, View, Pressable, Image, TextInput, } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../../component/Header/Header'
import ButtonBottom from '../../component/Button/Button'
import { useSelector, useDispatch } from 'react-redux';
import { setName } from '../../redux/silces/ProfileSilces'


const ChangeName = () => {


    // redux
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState('');   
    const [error, setError] = useState(''); 

    const handleName = () => {
        if (!firstName.trim() || !lastName.trim()) {
            setError('Please enter both the first name and last name.');
        } else {

            const fullName = `${firstName} ${lastName}`;
            dispatch(setName(fullName)); 
            setError(''); 
        }
    };
    return (
        <View style={styles.container}>
            <Header hideBack title='Name' />
            <View style={styles.line}></View>

            <View style={styles.content}>
                <View style={styles.Name}>
                    <Text style={styles.txtName}>First Name</Text>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.txtInput}
                            placeholder="Maximus"
                            value={firstName}
                            onChangeText={(text) => setFirstName(text)}
                        />
                    </View>
                </View>

                <View style={styles.Name}>
                    <Text style={styles.txtName}>Last Name</Text>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.txtInput}
                            placeholder="Gold"
                            value={lastName}
                            onChangeText={(text) => setLastName(text)}
                        />
                    </View>
                </View>
            </View>
            {error && <Text style={{ color: 'red' , fontSize: 18 , marginTop: 10}}>{error}</Text>}
            <View style={{ width: '100%', position: 'absolute', bottom: 10 }}>
                <Pressable onPress={handleName}>
                    <ButtonBottom title='Save' />
                </Pressable>
            </View>
        </View>
    )
}

export default ChangeName

const styles = StyleSheet.create({
    content: {},
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
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#9098B1",
        borderRadius: 5,
    },

    txtInput: {
        backgroundColor: "#FFFFFF",
        width: '100%',
        paddingLeft: 10,
        color: '#9098B1',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21.60,
        letterSpacing: 0.50,
    },

    txtName: {
        color: '#223263',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.50,
        paddingBottom: 10,
        alignSelf: "flex-start"

    },

    Name: {
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

    container: {
        height: '80%',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    }
})