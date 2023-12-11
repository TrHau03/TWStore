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
    FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AxiosInstance from '../../Axios/Axios';
import { useSelector } from 'react-redux';
import storage from '@react-native-firebase/storage';
import uuid from 'react-native-uuid';

const windowWidth = Dimensions.get('window').width;
let image: any = [];
let imageURL: any = [];
const Addcomment = () => {
    const user = useSelector((state: any) => state.SlicesReducer.user);

    const [content, setContent] = useState<string>('');
    const [star, setStar] = useState<number>()
   
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [defaultRating, setDefaultRating] = useState<number>(5);
    const [maxRating] = useState([1, 2, 3, 4, 5]);
    const [addImage, setAddImage] = useState<boolean>(false);
    const renderItem = ({ item }: any) => {
        return (
          <View style={{ paddingVertical: 10 }}>
            <Image style={{ height: 100, width: 100 }} source={{ uri: item.img }} />
          </View>
        )
      }
    
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
                            onPress={() => setStar(item)}
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
    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const result: any = await launchCamera({
              mediaType: 'photo',
              cameraType: 'front',
            });
            const object = { id: image.length + 1, img: result.assets[0].uri };
            image.push(object);
            setAddImage(!addImage);
          } else {
            console.log('Từ chối');
          }
        } catch (error) {
          console.log(error);
        }
      };
      //Camera
    
    const requestCameraPermissionPhoto = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
            );
            console.log('Camera permission granted:', granted);
    
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                const result:any = await launchImageLibrary({ mediaType: 'photo' });
                
                if (result) {
                    console.log('Selected image URI:', result.assets[0].uri);
                
                    image.push({ id: image.length + 1, img: result.assets[0].uri });
                    console.log("Image url", image);
                
                    setAddImage(!addImage);
                } else {
                    console.log('No image selected');
                }
            } else {
                console.log('Permission denied');
            }
        } catch (error) {
            console.log('Error in requestCameraPermissionPhoto:', error);
        }
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
                    onPress:async () => requestCameraPermissionPhoto()

                    
                },
                {
                    text: 'Camera              ',
                    onPress: async () => requestCameraPermission()
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

    const handleAddComment = async () => {
        try {
            const uploadImages = async () => {
              await Promise.all(image.map(async (element: any) => {
                const reference = storage().ref(`${uuid.v4()}.jpg`);
                await reference.putFile(element.img);
                const url = await reference.getDownloadURL();
                imageURL.push(url);
              }));
            };
            await uploadImages();
            const result = await AxiosInstance().post('/comment/addComment', { userID: user._id,productID: '', content: content, image:  imageURL, star:star});
            console.log(result.data);
            
        } catch (error) {
              console.log('getNews Error: ', error);
          }
    };

    return (
        <View>
            <View style={styles.header}>
                <Image style={styles.icon} source={require('../../asset/image/icon_back.png')} />
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
                        onChangeText={setContent}
                        value={content}
                        placeholder="Let us know what you think about our products"
                        multiline
                    />
                    <TouchableOpacity
                        onPress={() => AddImage()}
                        style={{ marginTop: 20}}
                    >
                        <Text>Camera</Text>
                     </TouchableOpacity>

                    <View>
                    <FlatList
                        numColumns={2}
                        scrollEnabled={false}
                        columnWrapperStyle={{ columnGap: 5, justifyContent: 'center' }}
                        data={image}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                    />
                    </View>

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

