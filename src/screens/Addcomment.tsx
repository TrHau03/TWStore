import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert, Dimensions, KeyboardAvoidingView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const windowWidth = Dimensions.get('window').width;

const Addcomment = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [text, onChangeText] = useState('');
    const [defaultRating, setDefaultRating] = useState(5);
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
    const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

    const CustomRatingbar = () => {
        return (
            <View style={styles.customRatingbarStyle}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setDefaultRating(item)}
                            >
                                <Image
                                    style={styles.starImgStyle}
                                    source={
                                        item <= defaultRating
                                            ? { uri: starImgFilled }
                                            : { uri: starImgCorner }
                                    }
                                />
                            </TouchableOpacity>
                        )
                    })

                }
            </View>
        )
    }

    const handleAddImgComment = () => {
        let options = {
            storageOption: {
                path: 'image',
            },
        };
        launchImageLibrary(options, response => {
            setselectImage(response.assets[0].uri);
        });
    }


return (
    <View style={{ marginBottom: 70 }}>
        <View style={styles.header}>
            <Image style={styles.icon} source={require('../asset/image/back.png')} />
            <Text style={styles.name}>Write Review</Text>
        </View>
        <ScrollView >
            <View style={styles.bodycontainer}>
                <Text style={styles.textstyles}>Please write Overall level of satisfaction with your shipping / Delivery Service</Text>
                <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10 }}>
                    <CustomRatingbar />
                    <Text style={[styles.textstyles, { lineHeight: 40, marginLeft: 20 }]}>{defaultRating + '/' + maxRating.length}</Text>
                </View>

                <Text style={[styles.textstyles, { marginTop: 20 }]}>Write Your Review</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Let us know what you think about our products"
                    multiline
                />
                <Text style={[styles.textstyles, { marginTop: 20 }]} >Add Photo</Text>

                <ScrollView
                    horizontal
                    contentContainerStyle={styles.sizeScrollViewContent}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.addimgButton}>
                        <TouchableOpacity onPress={() => handleAddImgComment()}>
                            <LinearGradient colors={['#46CAF3', '#68B1D9']} style={{ borderRadius: 10 }}>
                                <Text style={styles.textimgstyle}>+</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
            <View style={styles.addCommentButtonContainer}>
                <TouchableOpacity
                    style={styles.addCommentButton}
                    onPress={() => handleAddImgComment()}
                >
                    <LinearGradient colors={['#46CAF3', '#68B1D9']} style={{ borderRadius: 10 }}>
                        <Text style={styles.addCommentButtonText}>Write Review</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
)
}

export default Addcomment

const styles = StyleSheet.create({

    imgnew: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 10,
        marginLeft: 1,
    },
    sizeScrollViewContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addimgButton: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: 1,
    },
    addPhotoButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: '#68B1D9',
        alignSelf: 'center',
        marginTop: 10,
    },
    addPhotoButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    selectedImagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 10,
    },
    selectedImage: {
        width: 80,
        height: 80,
        margin: 5,
        borderRadius: 8,
    },
    textimgstyle: {
        textAlign: 'center',
        lineHeight: 100,
        fontSize: 90,
        color: 'white'
    },
    addCommentButtonContainer: {
        alignSelf: 'center',
        width: windowWidth - 20,
        borderRadius: 20,
        bottom: 10,
    },
    addCommentButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    addCommentButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: "poppins",
        fontWeight: '800',
        height: 60,
        lineHeight: 60,
    },




    customRatingbarStyle: {
        flexDirection: 'row',
    },
    starImgStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover',

    },
    input: {
        margin: 12,
        borderWidth: 1,
        padding: 16,
        fontSize: 16,
        textAlignVertical: 'top',
        borderRadius: 10,
        height: 150,
    },
    textstyles: {
        fontWeight: "700",
        fontSize: 20,
        color: '#223263',
        textAlign: 'justify',
        lineHeight: 20,

    },
    bodycontainer: {
        margin: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 80,
        backgroundColor: 'white',
    },
    icon: {
        width: 24,
        height: 24,
    },
    name: {
        fontSize: 22,
        lineHeight: 24,
        fontFamily: 'poppins',
        fontWeight: '700',
        color: '#223263',
        marginLeft: 20,
    },
})