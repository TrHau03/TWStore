import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Account from './Account'

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Pressable>
                    <Image source={require('../asset/image/icon_back.png')} />
                </Pressable>
                <Text style={styles.txtTitle}>Account</Text>
            </View>

            <View style={styles.line}></View>

            <View style={styles.profile}>
                <Image style={styles.img} source={require('../asset/image/z3963074144022_6001e9ff55a6b122baa9d5bbe1fa2996.jpg')} />
                <View style={styles.name}>
                    <Text style={styles.txtName}>Name</Text>
                    <Text style={styles.txtUsername}>Username</Text>
                </View>
            </View>

            <View style={styles.Content}>
                <View style={styles.Content_left}>
                    <Image source={require('../asset/image/Gender_Profile.png')}></Image>
                    <Text style={styles.txtContent}>Gender</Text>
                </View>
                <View style={styles.Content_right}>
                    <Text style={styles.txtHint}>Mate</Text>
                    <Pressable>
                        <Image source={require('../asset/image/icon_backRight.png')} />
                    </Pressable>
                </View>
            </View>

            <View style={styles.Content}>
                <View style={styles.Content_left}>
                    <Image source={require('../asset/image/Birthday_Profile.png')}></Image>
                    <Text style={styles.txtContent}>Birthday</Text>
                </View>
                <View style={styles.Content_right}>
                    <Text style={styles.txtHint}>12-12-2000</Text>
                    <Pressable>
                        <Image source={require('../asset/image/icon_backRight.png')} />
                    </Pressable>
                </View>
            </View>

            <View style={styles.Content}>
                <View style={styles.Content_left}>
                    <Image source={require('../asset/image/Email_Profile.png')}></Image>
                    <Text style={styles.txtContent}>Email</Text>
                </View>
                <View style={styles.Content_right}>
                    <Text style={styles.txtHint}>ajfkhakj@gamil.com</Text>
                    <Pressable>
                        <Image source={require('../asset/image/icon_backRight.png')} />
                    </Pressable>
                </View>
            </View>

            <View style={styles.Content}>
                <View style={styles.Content_left}>
                    <Image source={require('../asset/image/Phone_Profile.png')}></Image>
                    <Text style={styles.txtContent}>Phone Number</Text>
                </View>
                <View style={styles.Content_right}>
                    <Text style={styles.txtHint}>0372711935</Text>
                    <Pressable>
                        <Image source={require('../asset/image/icon_backRight.png')} />
                    </Pressable>
                </View>
            </View>

            <View style={styles.Content}>
                <View style={styles.Content_left}>
                    <Image source={require('../asset/image/Password_Profile.png')}></Image>
                    <Text style={styles.txtContent}>Change Password</Text>
                </View>
                <View style={styles.Content_right}>
                    <Text style={styles.txtHint}>*********</Text>
                    <Pressable>
                        <Image source={require('../asset/image/icon_backRight.png')} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    txtContent: {
        color: '#223263',
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 18,
        letterSpacing: 0.50,
        paddingLeft: 15,
    },
    txtHint: {
        color: '#9098B1',
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 21.60,
        letterSpacing: 0.50,
        paddingRight: 15,
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
        paddingHorizontal: 20,
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
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.50,
    },
    name: {
        paddingLeft: 20,
    },

    img: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },

    profile: {
        flexDirection: 'row',
        paddingLeft: 20,
        height: 120,
        alignItems: 'center',
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