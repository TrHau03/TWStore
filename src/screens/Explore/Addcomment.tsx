import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    PermissionsAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ImageLibraryOptions, ImagePickerResponse } from 'react-native-image-picker';
import { CameraOptions } from 'react-native-image-picker';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const windowWidth = Dimensions.get('window').width;

const Addcomment = () => {
    const [text, onChangeText] = useState('');
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [defaultRating, setDefaultRating] = useState(5);
    const [maxRating] = useState([1, 2, 3, 4, 5]);
    const starImgFilled =
        'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
    const starImgCorner =
        'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

    const CustomRatingbar = () => {
        return (
            <View style={styles.customRatingbarStyle}>
                {maxRating.map((item, key) => {
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
                    );
                })}
            </View>
        );
    };

    const AddImage = async () => {
        if (selectedImages.length >= 6) {
            // Alert the user that they've reached the media limit (6 in this case)
            Alert.alert('Media Limit', 'You can select up to 6 images/videos.');
            return;
        }
        Alert.alert(
            'Bạn muốn chọn ảnh từ đâu ?',
            '',
            [
                {
                    text: 'Thư viện',
                    onPress: async () => {
                        const options: ImageLibraryOptions = {
                            mediaType: 'photo',
                            includeBase64: false,
                        };

                        launchImageLibrary(options, (response: any) => {
                            if (response.didCancel) {
                                console.log('User cancelled image picker');
                            } else {
                                const newImages = [...selectedImages];
                                const imageUri = response.uri || (response.assets && response.assets[0]?.uri);
                                newImages.push(imageUri);
                                setSelectedImages(newImages);
                            }
                        });
                    }
                },
                {
                    text: 'Camera              ',
                    onPress: async () => {
                        const cameraOptions: CameraOptions = {
                            mediaType: 'photo',
                            includeBase64: false,
                        };

                        try {
                            const granted = await PermissionsAndroid.request(
                                PermissionsAndroid.PERMISSIONS.CAMERA,
                                {
                                    title: "App Camera Permission",
                                    message: "App needs access to your camera ",
                                    buttonNeutral: "Ask Me Later",
                                    buttonNegative: "Cancel",
                                    buttonPositive: "OK"
                                }
                            );

                            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                                console.log("Camera permission given");
                                launchCamera(cameraOptions, (response: any) => {
                                    if (response.didCancel) {
                                        console.log('User cancelled camera picker');
                                    } else {
                                        const newImages = [...selectedImages];
                                        const imageUri = response.uri || (response.assets && response.assets[0]?.uri);
                                        newImages.push(imageUri);
                                        setSelectedImages(newImages);
                                    }
                                });
                            } else {
                                console.log("Camera permission denied");
                            }
                        } catch (err) {
                            console.warn(err);
                        }
                    }
                },
                {
                    text: 'Hủy',
                    onPress: () => {
                        console.log('Hủy');
                    }
                }
            ]
        );
    };

    const handleAddComment = () => {
        console.log('hehehe');
    };

    return (
        <View>
            <View style={styles.header}>
                <Image style={styles.icon} source={require('../asset/image/back.png')} />
                <Text style={styles.name}>Write Review</Text>
            </View>
            <ScrollView style={{ height: '100%' }}>
                <View style={styles.bodycontainer}>
                    <Text style={styles.textstyles}>
                        Please write Overall level of satisfaction with your shipping /
                        Delivery Service
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10 }}>
                        <CustomRatingbar />
                        <Text style={[styles.textstyles, { lineHeight: 40, marginLeft: 20 }]}>
                            {defaultRating + '/' + maxRating.length}
                        </Text>
                    </View>

                    <Text style={[styles.textstyles, { marginTop: 20 }]}>Write Your Review</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Let us know what you think about our products"
                        multiline
                    />
                    <Text style={[styles.textstyles, { marginTop: 20 }]}>Add Photo</Text>

                    <ScrollView
                        horizontal
                        contentContainerStyle={styles.selectedImagesContainer}
                        showsHorizontalScrollIndicator={false}
                    >
                        {selectedImages.map((mediaUri, index) => (
                            <Image key={index} source={{ uri: mediaUri }} style={styles.selectedImage} />
                        ))}
                        {selectedImages.length < 6 && (
                            <View style={styles.addimgButton}>
                                <TouchableOpacity onPress={AddImage}>
                                    <LinearGradient
                                        colors={['#46CAF3', '#68B1D9']}
                                        style={{ borderRadius: 10 }}
                                    >
                                        <Text style={styles.textimgstyle}>+</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        )}
                    </ScrollView>

                    <View style={styles.addCommentButtonContainer}>
                        <TouchableOpacity
                            style={styles.addCommentButton}
                            onPress={() => handleAddComment()}
                        >
                            <LinearGradient
                                colors={['#46CAF3', '#68B1D9']}
                                style={{ borderRadius: 10 }}
                            >
                                <Text style={styles.addCommentButtonText}>Write Review</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Addcomment;


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
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 8,
    },
    textimgstyle: {
        textAlign: 'center',
        lineHeight: 100,
        fontSize: 90,
        color: 'white',
    },
    addCommentButtonContainer: {
        alignSelf: 'center',
        width: windowWidth - 20,
        borderRadius: 20,
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
        fontFamily: 'poppins',
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
        fontWeight: '700',
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
});

