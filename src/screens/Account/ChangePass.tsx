import { StyleSheet, Text, View, Pressable, Image, TextInput, Alert, } from 'react-native'
import React, { useState } from 'react'
import ButtonBottom from '../../component/Button/Button'
import { useSelector, useDispatch } from 'react-redux';
import { setPassword } from '../../redux/silces/ProfileSilces'

const ChangePass = () => {
    const dispatch = useDispatch();
    const passwordFromRedux = useSelector((state: any) => state.profileReducer.password ? state.profileReducer.password : '');

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handlePasswordChange = () => {
        if (oldPassword === passwordFromRedux) {
            if (newPassword === confirmNewPassword) {
                dispatch(setPassword(newPassword));
                setOldPassword('');
                setNewPassword('');
                setConfirmNewPassword('');
                Alert.alert('Success', 'Password has been changed.');
            } else {
                Alert.alert('Error', 'New passwords do not match.');
            }
        } else {
            Alert.alert('Error', 'Old password is incorrect.');
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>Change Password</Text>
            <View style={styles.line}/>

            <View style={styles.Email}>
                <Text style={styles.txtEmail}>Old Password</Text>
                <View style={styles.input} >
                    <TextInput
                        style={styles.txtInput}
                        value={oldPassword}
                        onChangeText={(text) => setOldPassword(text)}
                    />
                </View>
            </View>

            <View style={styles.Email}>
                <Text style={styles.txtEmail}>New Password</Text>
                <View style={styles.input}>
                    <TextInput
                        style={styles.txtInput}
                        value={newPassword}
                        onChangeText={(text) => setNewPassword(text)}
                    />
                </View>
            </View>

            <View style={styles.Email}>
                <Text style={styles.txtEmail}>Confirm New Password</Text>
                <View style={styles.input}>
                    <TextInput
                        style={styles.txtInput}
                        value={confirmNewPassword}
                        onChangeText={(text) => setConfirmNewPassword(text)}
                    />
                </View>
            </View>

            <View style={{ width: '100%', position: 'absolute', bottom: 10 }}>
                <Pressable onPress={handlePasswordChange}>
                    <ButtonBottom title='Save' />
                </Pressable>
            </View>
        </View>
    );
};
export default ChangePass

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
        width: "100%",
        alignSelf: 'center',
        position: 'absolute',
        bottom: 100,
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

    txtEmail: {
        color: '#223263',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.50,
        marginBottom: 5,
        alignSelf: 'flex-start'
    },

    Email: {
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
        fontSize: 22,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 24,
        letterSpacing: 0.08,
        paddingLeft: 10,
    },
    title: {
        flexDirection: 'row',

    },

    container: {
        height: '80%',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    }
})