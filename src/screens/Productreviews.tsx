import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';


const windowWidth = Dimensions.get('window').width;

export default function ProductReviews() {

  const [selectedStar, setSelectedStar] = useState<number | null>(null);

  const handleStarFilter = (star: number | null) => {
    setSelectedStar(star);
  };

  const filteredReviews = selectedStar
    ? reviewsData.filter((review) => review.stars === selectedStar)
    : reviewsData;



  const starFilterButtons = [
    { label: 'All Reviews', star: null },
    { label: '1 Star', star: 1 },
    { label: '2 Stars', star: 2 },
    { label: '3 Stars', star: 3 },
    { label: '4 Stars', star: 4 },
    { label: '5 Stars', star: 5 },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.icon} source={require('../asset/image/back.png')} />
        <Text style={styles.name}>5 Reviews</Text>
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



      <View>
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
              <Image source={{ uri: review.commentImage }} style={styles.commentImage} />
            )}
            <View style={styles.reviewFooter}>
              <Text style={styles.reviewDateTime}>{`${review.date} at ${review.time}`}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 70,
    backgroundColor: 'white',
  },
  icon: {
    width: 24,
    height: 24,
  },
  reviewContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    width: windowWidth,
    height: 200,
    backgroundColor: 'white',
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  userImage: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  starRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewContent: {
    marginBottom: 5,
  },
  reviewComment: {
    marginBottom: 5,
    fontStyle: 'italic',
  },
  commentImage: {
    width: '25%',
    height: 50,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  reviewFooter: {
    marginTop: 5,
  },
  reviewDateTime: {
    color: '#888',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    margin: 10,
    backgroundColor: '#EAEAEA',
  },
  selectedStarButton: {
    backgroundColor: '#FFD700',
  },
  starButtonText: {
    color: '#333',
    fontWeight: '600',
  },
  ReviewContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  reviewStars: {
    fontSize: 18,
  },
  ReviewContent: {
    marginTop: 5,
  },
  starImage: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
});


const reviewsData = [
  {
    id: 1,
    stars: 5,
    user: {
      name: 'John Doe',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/2250px-Love_Heart_symbol.svg.png', // User's profile image URL
    },
    date: '2023-08-25',
    time: '14:30',
    comment: 'Great product!',
    commentImage: 'https://giaymt.com.vn/wp-content/uploads/2022/10/giay-the-thao-nu-MY861-3.jpg', // Comment image URL (optional)
  },
  {
    id: 2,
    stars: 4,
    user: {
      name: 'John Doe',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/2250px-Love_Heart_symbol.svg.png', // User's profile image URL
    },
    date: '2023-08-25',
    time: '14:30',
    comment: 'Great product!',
    commentImage: 'https://giaymt.com.vn/wp-content/uploads/2022/10/giay-the-thao-nu-MY861-3.jpg', // Comment image URL (optional)
  },
  {
    id: 3,
    stars: 3,
    user: {
      name: 'John Doe',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/2250px-Love_Heart_symbol.svg.png', // User's profile image URL
    },
    date: '2023-08-25',
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
