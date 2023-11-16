import { Image, StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Animatable from 'react-native-animatable';
import Header from '../../component/Header/Header'
import { PropsAccount } from '../../component/Navigation/Props'
import { uid } from 'uid'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ChangePass from './ChangePass'
import { Modal, Provider } from '@ant-design/react-native'
import ButtonBottom from '../../component/Button/Button'
import Birthday from './Birthday'
import Email from './Email'
import Phone from './Phone'
import Gender from './Gender'
import ChangeName from './ChangeName';
import ChanceImage from './ChanceImage';

import { useSelector } from 'react-redux';


const ProfileScreen = ({ navigation }: PropsAccount) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [nameModal, setNameModal] = useState<string>('');
    const profile = useSelector((state: any) => state.SilcesReducer ? state.SilcesReducer[0] : null);
    // const profile = useSelector((state: any) => state.SilcesReducer ? state.SilcesReducer : '');

    const renderModalContent = () => {
        switch (nameModal) {
            case 'ChangeGender':
                return <Gender />;
            case 'ChangeBirthDay':
                return <Birthday />;
            case 'ChangeEmail':
                return <Email />;
            case 'ChangePhone':
                return <Phone />;
            case 'ChangePassword':
                return <ChangePass />;
            case 'ChangeImage':
                return <ChanceImage />;
            default:
                return <ChangeName />;
        }
    }

    return (
        <Provider>
            <Modal
                transparent={false}
                visible={modalVisible}
                animationType="slide-up"
                onRequestClose={() => true}
            >
                <View style={{ height: '100%' }}>
                    {renderModalContent()}
                    <Animatable.View animation={'bounceIn'} style={{ paddingHorizontal: 20, position: 'relative' }}>
                        <Pressable onPress={() => { setModalVisible(false) }}>
                            <ButtonBottom title='Cancel' />
                        </Pressable>
                    </Animatable.View>
                </View>
            </Modal>
            <View style={styles.container}>
                <Header title='Profile' navigation={navigation} />
                <View style={styles.line}></View>
                <View style={styles.profile}>
                    <Pressable onPress={() => { setModalVisible(true); setNameModal('ChangeImage') }}>
                        <Image style={styles.img} source={{ uri: profile.image }} />
                    </Pressable>
                    <View style={styles.name}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Text style={styles.txtName}>{profile.name}</Text>
                            <Pressable onPress={() => { setModalVisible(true), setNameModal('ChangeName') }}>
                                <MaterialCommunityIcons name='account-edit-outline' size={20} />
                            </Pressable>
                        </View>
                        <Text style={styles.txtUsername}>{profile.userName}</Text>
                    </View>
                </View>
                <View style={styles.Content}>
                    <View style={styles.Content_left}>
                        <Icon name='male-female' size={30} color={'#444444'} />
                        <Text style={styles.txtContent}>Gender</Text>
                    </View>
                    <View style={styles.Content_right}>
                        <Text style={styles.txtHint}>{profile.gender}</Text>
                        <Pressable onPress={() => { setModalVisible(true); setNameModal('ChangeGender') }}>
                            <Icon name='chevron-forward-outline' size={25} color={'#9098B1'} />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.Content}>
                    <View style={styles.Content_left}>
                        <Icon name='calendar-sharp' size={30} color={'#444444'} />
                        <Text style={styles.txtContent}>Birthday</Text>
                    </View>
                    <View style={styles.Content_right}>
                        <Text style={styles.txtHint}>{profile.birthdate}</Text>
                        <Pressable onPress={() => { setModalVisible(true); setNameModal('ChangeBirthDay') }}>
                            <Icon name='chevron-forward-outline' size={25} color={'#9098B1'} />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.Content}>
                    <View style={styles.Content_left}>
                        <Icon name='mail-unread' size={30} color={'#444444'} />
                        <Text style={styles.txtContent}>Email</Text>
                    </View>
                    <View style={styles.Content_right}>
                        <Text style={styles.txtHint}>{profile.email}</Text>
                        <Pressable onPress={() => { setModalVisible(true); setNameModal('ChangeEmail') }}>
                            <Icon name='chevron-forward-outline' size={25} color={'#9098B1'} />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.Content}>
                    <View style={styles.Content_left}>
                        <Icon name='phone-portrait' size={30} color={'#444444'} />
                        <Text style={styles.txtContent}>Phone Number</Text>
                    </View>
                    <View style={styles.Content_right}>
                        <Text style={styles.txtHint}>{profile.phone}</Text>
                        <Pressable onPress={() => { setModalVisible(true); setNameModal('ChangePhone') }}>
                            <Icon name='chevron-forward-outline' size={25} color={'#9098B1'} />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.Content}>
                    <View style={styles.Content_left}>
                        <Icon name='keypad' size={30} color={'#444444'} />
                        <Text style={styles.txtContent}>Change Password</Text>
                    </View>
                    <View style={styles.Content_right}>
                        <Text style={styles.txtHint}>*********</Text>
                        <Pressable onPress={() => { setModalVisible(true); setNameModal('ChangePassword') }}>
                            <Icon name='chevron-forward-outline' size={25} color={'#9098B1'} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </Provider>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
    },
    modalView: {
        width: '80%',
        height: '60%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },







    txtContent: {
        color: '#223263',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '700',
        letterSpacing: 0.50,
        paddingLeft: 10,
        alignSelf: 'center',
    },
    txtHint: {
        color: '#9098B1',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 21.60,
        letterSpacing: 0.50,
        paddingRight: 5,
    },

    Content_right: {
        flexDirection: 'row',
    },

    Content_left: {
        flexDirection: 'row',
    },

    Content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
    },

    txtUsername: {
        color: '#9098B1',
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 21.60,
        letterSpacing: 0.50,
        paddingTop: 5,
    },

    txtName: {
        color: '#223263',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.50,
    },
    name: {
        paddingLeft: 20,
    },

    img: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },

    profile: {
        flexDirection: 'row',
        height: 120,
        alignItems: 'center',
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
        width: '100%',
        height: '100%',
        paddingTop: 20,
        paddingHorizontal: 20
    }
})