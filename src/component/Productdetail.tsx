import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Button
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Productreviews from './Productreviews';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { useNavigation } from '@react-navigation/core';



const windowWidth = Dimensions.get('window').width;

type CustomRatingBarProps = {
  numberOfRatings: number;
};




export default function Productdetail() {
  // Định nghĩa kiểu dữ liệu cho đánh giá (Review)
  interface Review {
    id: number;
    stars: number;
    user: {
      name: string;
      image: string;
    };
    date: string;
    time: string;
    comment: string;
    commentImage: string[] | null;
  }
  //đánh giá sản phẩm
  const [defaultRating, setDefaultRating] = useState(4);
  const [maxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

  //chọn màu chọn size
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const availableColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];
  const availableSizes = [46, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45];

  //sản phẩm yêu thích
  const [isImageToggled, setIsImageToggled] = useState(false);
  const sortedSizes = availableSizes.slice().sort((a, b) => a - b);
  const [imageSource, setImageSource] = useState(require('../asset/image/love.png'));
  const handleImagePress = () => {
    setIsImageToggled(!isImageToggled);

    if (isImageToggled) {
      setImageSource(require('../asset/image/love.png'));
    } else {
      setImageSource(require('../asset/image/loveeeeee.png'));
    }
  };

  const [selectedStar, setSelectedStar] = useState<number | null>(null);

  const filteredReviews = selectedStar
    ? reviewsData.filter((review) => review.stars === selectedStar)
    : reviewsData;

  const reviewCount = filteredReviews.length;
  const sortReviewsByDateTime = (reviews: Review[]) => {
    return reviews.sort((a: Review, b: Review) => {
      const dateTimeA = new Date(
        `${a.date} ${a.time}`
      ).getTime();
      const dateTimeB = new Date(
        `${b.date} ${b.time}`
      ).getTime();
      return dateTimeA - dateTimeB;
    });
  };


  const CustomRatingBar: React.FC<CustomRatingBarProps> = ({ numberOfRatings }) => (
    <View style={styles.customRatingBarStyle}>
      {maxRating.map((item, key) => (
        <View key={item}>
          <Image
            style={styles.starImaStyle}
            source={item <= defaultRating ? { uri: starImgFilled } : { uri: starImgCorner }}
          />
        </View>
      ))}
      <Text style={styles.ratingCountText}>{defaultRating}</Text>
      <Text style={styles.ratingCountText}>({numberOfRatings} Review)</Text>

    </View>
  );
  const [currentPage, setCurrentPage] = useState(0);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const currentIndex = Math.round(contentOffset.x / windowWidth);
    setCurrentPage(currentIndex);
  };



  //next screen
  const navigation = useNavigation();

  const handleAddTocart = () => {
    console.log('nhấn được rồi nè !')
  };



  return (
    <View style={{ height: '100%' }}>

      <ScrollView>
        <View style={styles.header}>
          <Image style={styles.icon} source={require('../asset/image/back.png')} />
          <Text style={styles.name}>Nike Air Max 270 Rea...</Text>
          <Image style={styles.icon} source={require('../asset/image/search.png')} />
          <Image style={styles.icon} source={require('../asset/image/list.png')} />
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
              {slideshow.map((product, index) => (
                <View key={product.id} style={styles.slide}>
                  <Image source={product.img} style={styles.image} />
                  <Text style={styles.imageText}>{product.mau}</Text>
                </View>
              ))}
            </ScrollView>
            <View style={styles.pagination}>
              {slideshow.map((_, index) => (
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
            <Text style={styles.product}>Nike Air Zoom Pegasus 36 Miami</Text>
            <TouchableOpacity onPress={handleImagePress}>
              <Image
                source={imageSource}
                style={{ width: 45, height: 40, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.marginlefft}>
            <View>
              <CustomRatingBar numberOfRatings={10} />
            </View>
            <Text style={styles.price}>$299,43</Text>
            <Text style={styles.textsize}>Select Size</Text>
            <View style={styles.sizeContainer}>
              <ScrollView
                horizontal
                contentContainerStyle={styles.sizeScrollViewContent}
                showsHorizontalScrollIndicator={false}
              >
                {sortedSizes.map((size, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.sizeCircle,
                      { borderColor: selectedSize === size ? '#1C1C1C' : '#EBF0FF' },
                    ]}
                    onPress={() => setSelectedSize(size)}
                  >
                    <Text
                      style={[
                        styles.sizeText,
                        { color: selectedSize === size ? '#223263' : '#223263' },
                      ]}
                    >
                      {size}
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
                {availableColors.map((color, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.colorCircle,
                      { backgroundColor: color },
                    ]}
                    onPress={() => setSelectedColor(color)}
                  >
                    {selectedColor === color && <View style={styles.selectedColorDot}></View>}
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <Text style={styles.textsize}>Specification</Text>
            <View>
              <Text style={styles.comment}>Style:</Text>
              <Text style={styles.comment2}>The Nike Air Max 270 React ENG combines a full-length React foam midsole with a 270 Max Air unit for unrivaled comfort and a striking visual experience.</Text>
            </View>
            <View style={{ flexDirection: 'row', width: windowWidth }}>
              <Text style={styles.textsize}>Review Product</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Productreviews' as never)}>
                <Text style={styles.textsize2}>See More</Text>
              </TouchableOpacity>

            </View>
            <CustomRatingBar numberOfRatings={10} />
            <View style={{ height: 'auto', alignItems: 'center' }}>
              {filteredReviews.map((review) => (
                <View key={review.id} style={styles.reviewContainer}>
                  <View style={styles.reviewHeader}>
                    <Image source={{ uri: review.user.image }} style={styles.userImage} />
                    <View style={styles.userInfo}>
                      <Text style={styles.userName}>{review.user.name}</Text>
                      <View style={styles.starRating}>
                        <Text style={styles.reviewStars}>{'⭐'.repeat(review.stars)}</Text>
                      </View>
                    </View>
                  </View>
                  {review.comment && <Text style={styles.reviewComment}>{review.comment}</Text>}
                  {review.commentImage && (
                    <View style={styles.commentImagesContainer}>
                      {Array.isArray(review.commentImage) && review.commentImage.map((imageURL, index) => (
                        <Image
                          key={index}
                          source={{ uri: imageURL }}
                          style={styles.CommentImage}
                        />
                      ))}
                    </View>
                  )}
                  <View style={styles.reviewFooter}>
                    <Text style={styles.reviewDateTime}>{`${review.date} at ${review.time}`}</Text>
                  </View>
                </View>
              ))}
            </View>

            <View>
              <Text style={styles.textsize}>You Might Also Like</Text>
              <View style={styles.productList}>
                <ScrollView
                  horizontal
                  contentContainerStyle={styles.sizeScrollViewContent}
                  showsHorizontalScrollIndicator={false}
                >
                  {products.map((product) => (
                    <TouchableOpacity key={product.id} style={styles.productItem}>
                      <Image source={product.image} style={styles.productImage} />
                      <Text style={styles.productName}>{product.name}</Text>
                      <Text style={styles.productPrice}>${product.price}</Text>
                      <View style={styles.sale}>
                        <Text style={styles.productOldPrice}>${product.oldPrice}</Text>
                        <Text style={styles.textsale}> 24% Off</Text>
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
          onPress={() => handleAddTocart()}
        >
          <LinearGradient colors={['#46CAF3', '#68B1D9']} style={{ borderRadius: 10 }}>
            <Text style={styles.addtocartButtonText}>Add to cart</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>

  );
}

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
    justifyContent: 'space-between',
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
    marginTop: 30,
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
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  productImage: {
    width: 130,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 20,
    padding: 8,
  },
  productName: {
    fontSize: 16,
    marginTop: 10,
    color: '#223263',
    marginBottom: 8,
    fontWeight: "700"
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
    flexDirection: 'row',
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
    backgroundColor: '#EBF0FF',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'black',
  },

});
const products = [
  {
    id: 1,
    image: require('../asset/image/hong.png'),
    name: 'FS - Nike Air Max 270 React...',
    price: '299,43',
    oldPrice: '534,33',
  },
  {
    id: 2,
    image: require('../asset/image/tui.png'),
    name: 'FS - QUILTED MAXI CROS...',
    price: '299,43',
    oldPrice: '534,33',
  },
  {
    id: 3,
    image: require('../asset/image/trang.png'),
    name: 'FS - Nike Air Max 270 React...',
    price: '299,43',
    oldPrice: '534,33',
  },
  {
    id: 4,
    image: require('../asset/image/xanhbien.png'),
    name: 'FS - Nike Air Max 270 React...',
    price: '299,43',
    oldPrice: '534,33',
  },
  {
    id: 5,
    image: require('../asset/image/den.png'),
    name: 'FS - Nike Air Max 270 React...',
    price: '299,43',
    oldPrice: '534,33',
  },
];
const slideshow = [
  {
    id: '1',
    img: require('../asset/image/do.png'),
    mau: 'do',
  },
  {
    id: '2',
    img: require('../asset/image/den.png'),
    mau: 'den',
  },
  {
    id: '3',
    img: require('../asset/image/hong.png'),
    mau: 'hong',
  },
  {
    id: '4',
    img: require('../asset/image/trang.png'),
    mau: 'trang',
  },
  {
    id: '5',
    img: require('../asset/image/xanhbien.png'),
    mau: 'xanhbien',
  },
  {
    id: '6',
    img: require('../asset/image/xanhbien.png'),
    mau: 'xanhbien',
  },
  {
    id: '7',
    img: require('../asset/image/xanhbien.png'),
    mau: 'xanhbien',
  },
];

const reviewsData = [
  {
    id: 1,
    stars: 5,
    user: {
      name: 'James Lawson',
      image: 'https://bom.so/BIMgHb', // User's profile image URL
    },
    date: '2023-08-24',
    time: '14:30',
    comment: 'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
    commentImage: ['https://bom.so/BIMgHb'], // Comment image URL (optional)
  },
];