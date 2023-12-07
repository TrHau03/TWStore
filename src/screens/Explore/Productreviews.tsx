import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { HEIGHT } from '../../utilities/utility';
import routes from '../../component/constants/routes';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackScreenEnumExplore } from '../../component/Root/RootStackExplore';
import AxiosInstance from '../../Axios/Axios';

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
const windowWidth = Dimensions.get('window').width;

export default function ProductReviews() {

  const route = useRoute();
  const [listComment, setlistComment] = useState<[]>();
  const { id } = route.params as { id: any };


  const [selectedStar, setSelectedStar] = useState<number | null>(null);

  const handleStarFilter = (star: number | null) => {
    setSelectedStar(star);
  };

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
  const sortedReviews = sortReviewsByDateTime(filteredReviews);



  const starFilterButtons = [
    { label: 'All Review', star: null },
    { label: ' 1', star: 1 },
    { label: ' 2', star: 2 },
    { label: ' 3', star: 3 },
    { label: ' 4', star: 4 },
    { label: ' 5', star: 5 },
  ];


  const fetchCommentbyIdProduct = async (id: string) => {
    const response = await AxiosInstance().get(`comment/getCommentbyIdProduct/${id}`);
    setlistComment(response.data);
  }
  const handleAddComment = () => {
    console.log('nhấn được rồi nè !')
  };


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

      <ScrollView style={{ marginBottom: HEIGHT * 0.09 }}>

        <View>
          <View style={styles.header}>
            <Text style={styles.name}>{reviewCount} Reviews</Text>
          </View>

          <ScrollView horizontal
            contentContainerStyle={styles.starfilter}
            showsHorizontalScrollIndicator={false}
          >
            {starFilterButtons.map((button) => (
              <TouchableOpacity
                key={button.label}
                style={[
                  styles.starButton,
                  selectedStar === button.star && styles.selectedStarButton,
                ]}
                onPress={() => handleStarFilter(button.star)}
              >
                <Image
                  source={{ uri: starImages[button.star || 0] }}
                  style={styles.starImage}
                />
                <Text style={styles.starButtonText}>{button.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>



          <View style={{ height: 'auto', alignItems: 'center' }}>
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
        </View>
      </ScrollView>
      <View style={styles.addCommentButtonContainer}>
        <TouchableOpacity
          style={styles.addCommentButton}
          onPress={() => handleAddComment()}
        >
          <LinearGradient colors={['#46CAF3', '#68B1D9']} style={{ borderRadius: 10 }}>
            <Text style={styles.addCommentButtonText}>Write Review</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  addCommentButtonContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    width: windowWidth - 20,
    borderRadius: 10,
  },
  addCommentButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
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
  reviewContainer: {
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
  name: {
    fontSize: 22,
    lineHeight: 24,
    fontFamily: 'poppins',
    fontWeight: '700',
    color: '#223263',
    marginLeft: 20,
  },
  starfilter: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  starButton: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    margin: 10,
    borderColor: '#EBF0FF',
    borderWidth: 2,
    alignItems: 'center',
  },
  selectedStarButton: {
    backgroundColor: '#9098B1',
  },
  starButtonText: {
    color: '#1C1C1C',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 18,
  },
  ReviewContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  reviewStars: {
    fontSize: 15,
  },
  ReviewContent: {
    marginTop: 5,
  },
  starImage: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  commentImagesContainer: {
    flexDirection: 'row',
  },
  CommentImage: {
    width: '20%',
    height: 80,
    resizeMode: 'cover',
    borderRadius: 20,
    marginBottom: 20,
    margin: 10,
  },
});


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
  {
    id: 2,
    stars: 4,
    user: {
      name: 'Laura Octavian',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/2250px-Love_Heart_symbol.svg.png', // User's profile image URL
    },
    date: '2023-08-25',
    time: '14:30',
    comment: 'Great product!',
    commentImage: ['https://giaymt.com.vn/wp-content/uploads/2022/10/giay-the-thao-nu-MY861-3.jpg', 'https://bom.so/BIMgHb'] // Comment image URL (optional)
  },
  {
    id: 4,
    stars: 4,
    user: {
      name: 'Laura Octavian',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/2250px-Love_Heart_symbol.svg.png', // User's profile image URL
    },
    date: '2023-08-27',
    time: '15:30',
    comment: 'Great product!',
    commentImage: ['https://giaymt.com.vn/wp-content/uploads/2022/10/giay-the-thao-nu-MY861-3.jpg', 'https://bom.so/BIMgHb'] // Comment image URL (optional)
  },
  {
    id: 5,
    stars: 3,
    user: {
      name: 'Jhonson Bridge',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/2250px-Love_Heart_symbol.svg.png', // User's profile image URL
    },
    date: '2023-08-27',
    time: '14:30',
    comment: 'Great product!',
    commentImage: null, // Comment image URL (optional)
  },
];
const starImages = [
  'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png', // 0 Stars
  'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png', // 1 Star
  'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png', // 2 Stars
  'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png', // 3 Stars
  'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png', // 4 Stars
  'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png', // 5 Stars
];
