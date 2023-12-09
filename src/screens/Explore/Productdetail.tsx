import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Alert,
  FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import AxiosInstance from '../../Axios/Axios';
import { RootStackScreenEnumExplore } from '../../component/Root/RootStackExplore';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/silces/Silces';
import { HEIGHT } from '../../utilities/utility';
import { uid } from 'uid';



const windowWidth = Dimensions.get('window').width;

type CustomRatingBarProps = {
  numberOfRatings: number;

};

interface Product {
  _id: string;
  brand: any;
  categoryID: any;
  colorID: any;
  image: [];
  offer: number;
  price: number;
  productName: string;
  quantity: number;
  size: [];
  description: string;
}


const Productdetail = (props: NativeStackHeaderProps) => {
  const { id } = props?.route.params as { id: string | undefined };
  const { navigation } = props
  const [product, setProduct] = useState<Product>();
  const [listProductByBrand, setListProductByBrand] = useState<[]>();
  const [listComment, setlistComment] = useState<[]>();
  const [commentCount, setCommentCount] = useState<number>(0);
  const [totalStars, setTotalStars] = useState<number>(0);

  const [handleAdd, setHandleAdd] = useState<boolean>(false);
  const dispatch = useDispatch();

  const data = useSelector((state: any) => {
    return state.SlicesReducer.user.cartItem;
  });

  const user = useSelector((state: any) => {
    return state.SlicesReducer.user;
  });


  const isFocus = useIsFocused();

  //đánh giá sản phẩm
  const [maxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

  //chọn màu chọn size
  const [selectedColor, setSelectedColor] = useState<{ _id: string, code: string, name: string }>();
  const [selectedSize, setSelectedSize] = useState<{ _id: string, name: string }>();

  //sản phẩm yêu thích
  const sortedSizes = product?.size.slice().sort((a, b) => a - b);


  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      const fetchProductByID = async () => {
        const response = await AxiosInstance().get(`product/getProductById/${id}`);
        setProduct(response.data);
        response && fetchProductByBrand(response.data.brand._id);
      }
      const fetchProductByBrand = async (id: string) => {
        const response = await AxiosInstance().get(`product/getProductByIdBrand/${id}`);
        setListProductByBrand(response.data);
      }
      const fetchCommentbyIdProduct = async (id: string) => {
        const response = await AxiosInstance().get(`comment/getCommentbyIdProduct/${id}`);
        setlistComment(response.data);

        let stars = 0;
        response.data.forEach((comment: any) => {
          // Đảm bảo giá trị số sao luôn trong khoảng từ 1 đến 5
          stars += comment.stars > 5 ? 5 : comment.stars;
        });

        setTotalStars(stars);
        setCommentCount(response.data.length);
      };

      if (isFocus) {
        fetchProductByID();
      }
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        setSelectedColor(undefined);
        setSelectedSize(undefined);
      };
    }, [isFocus]))



  const CustomRatingBar: React.FC<CustomRatingBarProps> = ({ numberOfRatings }) => (
    <View style={styles.customRatingBarStyle}>
      {maxRating.map((item, key) => (
        <View key={item}>
          <Image
            style={styles.starImaStyle}
            source={item <= totalStars ? { uri: starImgFilled } : { uri: starImgCorner }}
          />
        </View>
      ))}
      <Text style={styles.ratingCountText}>{totalStars}</Text>
      <Text style={styles.ratingCountText}>({numberOfRatings} Review)</Text>

    </View>
  );
  const [currentPage, setCurrentPage] = useState(0);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const currentIndex = Math.round(contentOffset.x / windowWidth);
    setCurrentPage(currentIndex);
  };

  const handle = ({ productID, sizeProduct, colorProduct }: any) => {
    const checkAddProductSize = data.map((item: any) => {
      return item.sizeProduct._id;
    }
    )
    const checkAddProductColor = data.map((item: any) => {
      return item.colorProduct._id;
    })
    if (checkAddProductSize.includes(sizeProduct._id) && checkAddProductColor.includes(colorProduct._id)) {
      Alert.alert('Notification', 'Product already in cart!', [
        { text: 'OK' }
      ]);
    } else {
      if (sizeProduct == undefined || colorProduct == undefined) {
        setHandleAdd(false);

        Alert.alert('Notification', 'Product has not been added yet!', [
          { text: 'OK' }
        ]);
      } else {
        dispatch(addItem({ key: uid(3), productID: productID, sizeProduct: sizeProduct, colorProduct: colorProduct, quantity: 1 }));
        setHandleAdd(true);
      }

    }
  }


  const handleAddTocart = async () => {
    const cart: { key: any, productID: any; sizeProduct: any; colorProduct: any; quantity: number }[] = [];
    data.map((item: any) =>
      cart.push({ key: item.key, productID: item.productID._id, sizeProduct: item.sizeProduct._id, colorProduct: item.colorProduct._id, quantity: 1 })
    )
    await AxiosInstance().post('/users/updateInfoUser', { _id: user._idUser, cartItem: cart })
  };

  const createTwoButtonAlert = () =>
    Alert.alert('Notification', 'Add to cart successfully!', [
      { text: 'OK', onPress: () => handleAddTocart() }
    ]);

  if (handleAdd) {
    createTwoButtonAlert();
    setHandleAdd(false);
  }




  const RenderItem = ({ item }: { item: any }) => (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewHeader}>
        <Image source={{ uri: item.user.image }} style={styles.userImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.user.name}</Text>
          <View style={styles.starRating}>
            <Text style={styles.reviewStars}>{'⭐'.repeat(item.stars)}</Text>
          </View>
        </View>
      </View>
      {item.comment && <Text style={styles.reviewComment}>{item.comment}</Text>}
      {item.commentImage && (
        <View style={styles.commentImagesContainer}>
          {Array.isArray(item.commentImage) && item.commentImage.map((imageURL: string, index: any) => (
            <Image
              key={index}
              source={{ uri: imageURL }}
              style={styles.CommentImage}
            />
          ))}
        </View>
      )}
      <View style={styles.reviewFooter}>
        <Text style={styles.reviewDateTime}>{`${item.date} at ${item.time}`}</Text>
      </View>
    </View>
  )

  return (
    <View style={{ height: '100%' }}>
      <ScrollView>
        <View style={styles.header}>
          <Pressable style={{ position: 'absolute', left: 10 }} onPress={() => navigation.navigate(RootStackScreenEnumExplore.ExploreScreen)}>
            <Icon name='chevron-back-outline' size={26} />
          </Pressable>
          <Text style={styles.name}>{product?.brand?.name}</Text>
        </View>
        <View>
          <View style={styles.slideshowcontainer}>
            <ScrollView
              horizontal
              pagingEnabled
              contentContainerStyle={styles.contentContainer}
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
            >
              {product?.image.map((product: any, index: any) => (
                <View key={index} style={styles.slide}>
                  <Image source={{ uri: product }} style={styles.image} />
                </View>
              ))}
            </ScrollView>
            <View style={styles.pagination}>
              {product?.image.map((_: any, index: React.Key | null | undefined) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    index === currentPage && styles.activeDot, // Apply activeDot style for the current page
                  ]}
                />
              ))}
            </View>
          </View>
          <View style={styles.nameproduct}>
            <Text style={styles.product}>{product?.productName}</Text>
          </View>
          <View style={styles.marginlefft}>
            <View>
              <CustomRatingBar numberOfRatings={commentCount} />
            </View>
            <Text style={styles.price}>{product ? `$${product.price - (product.price * (product.offer / 100))}` : ''}</Text>
            <Text style={styles.textsize}>Select Size</Text>
            <View style={styles.sizeContainer}>
              <ScrollView
                horizontal
                contentContainerStyle={styles.sizeScrollViewContent}
                showsHorizontalScrollIndicator={false}
              >
                {sortedSizes?.map((size: any, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.sizeCircle,
                      { borderColor: selectedSize?._id === size?._id ? '#1C1C1C' : '#EBF0FF' },
                    ]}
                    onPress={() => setSelectedSize(size)}
                  >
                    <Text
                      style={[
                        styles.sizeText,
                        { color: selectedSize?._id === size._id ? '#223263' : '#223263' },
                      ]}
                    >
                      {size.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <Text style={styles.textsize}>Select Color</Text>
            <View style={styles.colorContainer}>
              <ScrollView
                horizontal
                contentContainerStyle={styles.colorScrollViewContent}
                showsHorizontalScrollIndicator={false}
              >
                {product?.colorID.map((color: any, index: React.Key | null | undefined) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.colorCircle,
                      { backgroundColor: color.code },
                    ]}
                    onPress={() => setSelectedColor(color)}
                  >
                    {selectedColor?._id === color._id && <View style={styles.selectedColorDot}></View>}
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <Text style={styles.textsize}>Specification</Text>
            <Text style={styles.comment2}>{product?.description}</Text>
            <View style={{ flexDirection: 'row', width: windowWidth }}>
              <Text style={styles.textsize}>Review Product</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Productreviews', { id: id })}>
                <Text style={styles.textsize2}>See More</Text>
              </TouchableOpacity>

            </View>
            <CustomRatingBar numberOfRatings={commentCount} />
            <View style={{ height: HEIGHT * 0.35, marginTop: '11%', alignItems: 'center' }}>
              {listComment && listComment.length > 0 ? (
                <FlatList
                  showsVerticalScrollIndicator={false}
                  renderItem={(object) => <RenderItem item={object.item} />}
                  data={listComment}
                  keyExtractor={(item: any) => item?.productID?._id?.toString()}
                />
              ) : (
                <Text style={{ fontSize: 20 }}>No data</Text>
              )}

            </View>

            <View>
              <Text style={styles.textsize}>You Might Also Like</Text>
              <View style={styles.productList}>
                <ScrollView
                  horizontal
                  contentContainerStyle={styles.sizeScrollViewContent}
                  showsHorizontalScrollIndicator={false}
                >
                  {listProductByBrand?.map((product: any) => (
                    <TouchableOpacity key={product._id} style={styles.productItem}>
                      <Image source={{ uri: product.image[0] }} style={styles.productImage} />
                      <Text style={styles.productName}>{product.productName}</Text>
                      <View style={styles.sale}>
                        <Text style={styles.productPrice}>${product.price - product.price * (product.offer / 100)}</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={styles.productOldPrice}>${product.price}</Text>
                          <Text style={styles.textsale}> {product.offer}% Off</Text>
                        </View>
                      </View>
                    </TouchableOpacity>

                  ))}
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.addtocartButtonContainer}>
        <TouchableOpacity
          style={styles.addtocartButton}
          onPress={() => { handle({ productID: product, sizeProduct: selectedSize, colorProduct: selectedColor }); }}
        >
          <LinearGradient colors={['#46CAF3', '#68B1D9']} style={{ borderRadius: 10 }}>
            <Text style={styles.addtocartButtonText}>Add to cart</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View >

  );
}
export default Productdetail;
const styles = StyleSheet.create({
  CommentImage: {
    width: '20%',
    height: 80,
    resizeMode: 'cover',
    borderRadius: 20,
    marginBottom: 20,
    margin: 10,
  },
  commentImagesContainer: {
    flexDirection: 'row',
  },
  reviewStars: {
    fontSize: 15,
  },
  reviewContainer: {
    marginLeft: -20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    width: '96%',
    height: 'auto',
    backgroundColor: 'white',
    marginBottom: 16,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'poppins',
    color: '#223263',
    lineHeight: 21,
  },
  starRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewContent: {
    marginBottom: 5,
  },
  reviewComment: {
    marginTop: 10,
    marginBottom: 15,
    fontStyle: 'italic',
    textAlign: 'justify',
    fontSize: 17,
    margin: 5,
  },
  reviewFooter: {
    marginBottom: 10,
  },
  reviewDateTime: {
    color: '#888',
  },

  addtocartButtonContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    width: windowWidth - 20,
  },
  addtocartButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  addtocartButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: "poppins",
    fontWeight: '800',
    height: 60,
    lineHeight: 60,
  },




  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 80,
    backgroundColor: 'white',
  },
  icon: {
    width: 24,
    height: 24,
    marginTop: 30,
  },
  name: {
    fontSize: 22,
    lineHeight: 24,
    fontFamily: 'poppins',
    fontWeight: "700",
    color: '#223263',
    letterSpacing: 0.5,
  },

  nameproduct: {
    flexDirection: 'row',
    width: windowWidth - 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  product: {
    fontSize: 27,
    lineHeight: 30,
    fontFamily: 'poppins',
    fontWeight: '700',
    color: '#223263',
    padding: 20,
    marginLeft: 20,
  },
  customRatingBarStyle: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 10,
  },
  starImaStyle: {
    width: 25,
    height: 25,
    resizeMode: 'cover'
  },
  price: {
    fontSize: 23,
    lineHeight: 30,
    fontFamily: 'poppins',
    fontWeight: '700',
    color: 'black',
  },
  textsize: {
    fontSize: 17,
    lineHeight: 30,
    fontFamily: 'poppins',
    fontWeight: '700',
    color: '#223263',
    marginTop: 20,
  },
  textsize2: {
    fontSize: 17,
    lineHeight: 30,
    fontFamily: 'poppins',
    fontWeight: '700',
    color: '#141414',
    marginTop: 20,
    marginRight: 20,
    width: '300%',
    textAlign: 'right',
  },

  size: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  sizeCircle: {
    width: 45,
    height: 45,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 16,
  },
  sizeText: {
    fontSize: 18,
    fontWeight: '700',
  },
  sizeContainer: {
    marginTop: 20,
    flexDirection: 'row',
    overflow: 'hidden',

  },
  sizeScrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorContainer: {
    marginTop: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  colorScrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  selectedColorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  comment: {
    marginTop: 20,
    fontSize: 15,
    lineHeight: 21.6,
    fontFamily: 'poppins',
    fontWeight: "400",
    color: '#223263',
    letterSpacing: 0.5,
  },
  comment2: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 21.6,
    fontFamily: 'poppins',
    fontWeight: "400",
    color: '#223263',
    letterSpacing: 0.5,
  },
  marginlefft: {
    marginLeft: 20,
  },
  ratingCountText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#223263',
    marginLeft: 10,
    marginTop: 2,
  },
  productList: {
    marginBottom: 60,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: -10, // Adjust as needed
  },
  productItem: {
    width: 150,
    height: 250,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 10,
  },
  productImage: {
    width: 130,
    height: 120,
    borderRadius: 20,
    padding: 8,
  },
  productName: {
    fontSize: 16,
    marginTop: 10,
    color: '#223263',
    marginBottom: 8,
    fontWeight: "700",
    textAlign: 'center'
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    marginBottom: 8,

  },
  productOldPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#999999',
  },
  stickyContainer: {
    alignSelf: 'center',
  },
  bottomButton: {
    borderRadius: 20,
    width: windowWidth - 40,
    height: 65,
    marginBottom: 20,
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    padding: 20,
    alignItems: 'center',
  },
  sale: {
    position: 'absolute',
    bottom: 5,
    paddingHorizontal: 10
  },
  textsale: {
    fontSize: 14,
    fontWeight: "700",
    color: '#FB7181'
  },
  slideshowcontainer: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  slide: {
    width: windowWidth,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: windowWidth,
    height: 300,
  },
  imageText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#d2d2d2',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'black',
  },

});
