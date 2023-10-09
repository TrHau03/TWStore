import { StyleSheet, Text, View, TextInput, Image, Pressable, ScrollView, FlatList, SectionList, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { CompositeNavigationProp, NavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamListHome, RootStackScreenEnumHome } from '../../component/Root/RootStackHome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BG_COLOR, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities/utility';
import { RootTabParamList, RootTabScreenENum } from '../../component/BottomNavigation/RootTab/RootTab';
import { RootStackParamListExplore, RootStackScreenEnumExplore } from '../../component/Root/RootStackExplore';


const renderItem = ({ item }: { item: { id: string, name: string, icon: any } }) => (
    <View style={styles.item}>
        <View style={styles.bodericon}>
            {/* <Image style={styles.Icon} source={item.icon} /> */}
            <Icon name={item.icon} size={26} />
        </View>
        <Text style={styles.textname}>{item.name}</Text>
    </View>
);

const renderItem2 = ({ item }: { item: { id: string, name: string, image: any } }) => {
    return (
        < View style={styles.itemsale} >
            <Image style={styles.imageproduct} source={{ uri: item.image }} />
            <Text style={styles.nameproduct}>{item.name}</Text>

            <Text style={styles.price}>$299,43</Text>
            <View style={styles.stylesaleoff}>
                <Text style={styles.strikethrough}>$534,33</Text>
                <Text style={styles.saleoff}>24% Off</Text>
            </View>
        </View >
    )
}

const renderItem3 = ({ item }: { item: { id: string, name: string, image: any } }) => {
    return (
        <View style={styles.itemsale2}>
            <Image style={styles.imageproduct} source={{ uri: item.image }} />
            <Text style={styles.nameproduct}>{item.name}</Text>
            {/* <Image style={styles.imga} source={require('../asset/img/a.png')} /> */}
            <Text style={styles.price}>$299,43</Text>
            <View style={styles.stylesaleoff}>
                <Text style={styles.strikethrough}>$534,33</Text>
                <Text style={styles.saleoff}>24% Off</Text>
            </View>
        </View>
    )

}
type NavigationProps = StackNavigationProp<RootStackParamListHome, RootStackScreenEnumHome>
type BottomNavigationProp = CompositeNavigationProp<NavigationProp<RootTabParamList>, StackNavigationProp<RootStackParamListExplore>>;
const HomeScreen = () => {
    const navigation = useNavigation<NavigationProps>();
    const navigationOtherTab = useNavigation<BottomNavigationProp>();

    const [imgActive, setimgActive] = useState(0);

    const [click, setClick] = useState<boolean>(false);


    console.log('render');




    const onChange = (nativeEvent: any) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide >= 0) {
                setimgActive(slide);
            }
        }
    }
    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }: any) => {
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    }
    const TextInputAni = Animated.createAnimatedComponent(TextInput);
    const animatedValue = useRef(new Animated.Value(0)).current;
    const animatedSearch = {
        transform: [
            {
                scaleX: animatedValue.interpolate({
                    inputRange: [0, 50],
                    outputRange: [1, 0],
                    extrapolate: 'clamp'
                })
            }
        ]
    }
    return (
        <SafeAreaView style={{ width: WIDTH, paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_TOP, backgroundColor: BG_COLOR }}>
            <View style={styles.top}>
                <View style={(!click) ? styles.headerLeft : [styles.headerLeft, { borderColor: 'blue' }]}
                >
                    <Icon name='search' size={22} />
                    <TextInputAni
                        placeholder="Search here"
                        style={[styles.TextSearch, animatedSearch]}
                        onFocus={() => setClick(true)}
                        onBlur={() => setClick(false)}

                    />
                </View>

                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={() => navigation.navigate(RootStackScreenEnumHome.FavoriteScreen)}>
                        <Icon name="heart-outline" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate(RootStackScreenEnumHome.NotificationScreen)}>
                        <Icon name="notifications-outline" size={25} />
                    </TouchableOpacity>
                </View>

            </View>
            <ScrollView horizontal={false} scrollEnabled={true} showsVerticalScrollIndicator={false} stickyHeaderIndices={[7]} onScroll={(e) => {
                const offsetY = e.nativeEvent.contentOffset.y;
                animatedValue.setValue(offsetY)
            }} scrollEventThrottle={16}>
                <View style={styles.topslide}>

                    <ScrollView
                        nestedScrollEnabled={true}
                        onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        horizontal
                        style={styles.slide}
                    >
                        {
                            images.map((e, index) =>
                                <Pressable onPress={() => navigation.navigate(e.nameScreen as never)} key={e.nameScreen}>
                                    <Image
                                        resizeMode='stretch'
                                        style={styles.slide}
                                        source={{ uri: e.image }}
                                    />
                                </Pressable>
                            )
                        }
                    </ScrollView>

                    <View style={styles.warpdot}>
                        {
                            images.map((e, index) =>
                                <Text
                                    key={e.nameScreen}
                                    style={imgActive == index ? styles.dotactive : styles.dot}
                                >●</Text>
                            )
                        }
                    </View>

                </View>

                <View style={styles.category}>

                    <Text style={styles.textcategory}>Category</Text>

                    <Pressable onPress={() => navigationOtherTab.navigate(RootStackScreenEnumExplore.ExploreScreen)}>
                        <Text style={styles.textcategory}>
                            More Category
                        </Text>
                    </Pressable>

                </View>

                <View style={styles.listcategory}>
                    <FlatList
                        data={data}
                        horizontal
                        nestedScrollEnabled={true}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.name}
                    />
                </View>

                <View style={styles.flashsale}>

                    <Text style={styles.textflashsale}>Flash Sale</Text>

                    <Pressable>
                        <Text style={styles.textflashsale2}>
                            See More
                        </Text>
                    </Pressable>

                </View>

                <View style={styles.listflastsale}>
                    <FlatList
                        data={data2}
                        horizontal
                        nestedScrollEnabled={true}
                        renderItem={renderItem2}
                        keyExtractor={(item) => item.id}
                    />
                </View>

                <View style={styles.megasale}>
                    <Text style={styles.textflashsale}>Mega Sale</Text>
                    <Pressable>
                        <Text style={styles.textflashsale2}>
                            See More
                        </Text>
                    </Pressable>
                </View>

                <View style={styles.listflastsale}>
                    <FlatList
                        nestedScrollEnabled={true}
                        data={data2}
                        horizontal
                        renderItem={renderItem2}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <View style={styles.listgrid}>
                    <Image style={styles.imgrecomended} source={require('../../asset/image/recomendedProduct.png')} />
                </View>
                <FlatList
                    scrollEnabled={false}
                    style={{ width: WIDTH, marginBottom: 45, marginTop: 10 }}
                    showsVerticalScrollIndicator={false}
                    data={data2}
                    renderItem={renderItem3}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },

    favorite: {
        width: 24,
        height: 24,
    },

    notification: {
        width: 24,
        height: 24,
    },

    pressable: {
        width: 24,
        height: 24,
    },
    headerRight: {
        paddingLeft: 10,
        gap: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    TextSearch: {
        justifyContent: 'center',
        marginLeft: 10,
        paddingVertical: 0
    },
    headerLeft: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        borderColor: '#e1dede',
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%',
        height: '85%'
    },
    topslide: {
        width: '100%',
    },

    slide: {
        height: WIDTH * 0.5,
        width: WIDTH,
        borderRadius: 6,
    },

    warpdot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center',
    },

    dotactive: {
        margin: 3,
        color: 'black'
    },

    dot: {
        margin: 3,
        color: 'white'
    },

    category: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },

    textcategory: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#223263'
    },

    listcategory: {
        height: 100,
    },

    item: {
        marginRight: 22,
        alignItems: 'center',
    },

    Icon: {
        width: 26,
        height: 26,
    },

    textname: {
        fontSize: 12
    },

    bodericon: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 90,
        borderColor: '#EBF0FF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    flashsale: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textflashsale: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#BF0202'
    },

    textflashsale2: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black'
    },

    listflastsale: {
        height: WIDTH * 0.7,
        marginTop: 5,
        marginBottom: 5
    },

    itemsale: {
        height: 240,
        width: 140,
        marginRight: 9,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#EBF0FF',
        justifyContent: 'space-around',
    },

    imageproduct: {
        alignSelf: 'center',
        width: 72,
        height: 72,
    },

    nameproduct: {
        fontWeight: 'bold',
        fontSize: 13,
        color: '#223263',
        width: 110,
        marginLeft: 15
    },

    price: {
        fontWeight: 'bold',
        fontSize: 13,
        color: '#4464C4',
        marginLeft: 15
    },

    stylesaleoff: {
        flexDirection: 'row'
    },

    strikethrough: {
        textDecorationLine: 'line-through',
        fontSize: 10,
        marginRight: 12,
        marginLeft: 15
    },

    saleoff: {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#FB7181'
    },

    megasale: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },

    imgrecomended: {
        width: '100%',
        borderRadius: 5,
    },

    imga: {
        marginLeft: 15
    },

    columnWrapper: {
        justifyContent: 'flex-start',
    },

    listgrid: {
    },

    itemsale2: {
        height: 240,
        width: WIDTH * 0.42,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'black',
        justifyContent: 'space-around',
        marginBottom: 5,


    }

})
const images = [
    {
        image: 'https://thietke6d.com/wp-content/uploads/2021/03/Mau-banner-quang-cao-dep-1.png',
        nameScreen: 'OfferScreen'
    },
    {
        image: 'https://intphcm.com/data/upload/banner-thoi-trang-tuoi.jpg',
        nameScreen: 'CartScreen'
    },
    {
        image: 'https://dojeannam.com/wp-content/uploads/2017/09/BANNER-KHAI-TRUONG-DOJEANNAM.jpg',
        nameScreen: 'PaymentScreen'
    },
    {
        image: 'https://intphcm.com/data/upload/banner-thoi-trang.jpg',
        nameScreen: 'BankTransferScreen'
    },
]
const data = [
    { id: '1', name: 'Man Shirt', icon: 'shirt-sharp' },
    { id: '2', name: 'Dress', icon: 'shirt-sharp' },
    { id: '3', name: 'Man Work', icon: 'shirt-sharp' },
    { id: '4', name: 'Woman Bag', icon: 'shirt-sharp' },
    { id: '5', name: 'Man Shoes', icon: 'shirt-sharp' },
];

const data2 = [
    { id: '1', name: 'FS - Nike Air Max 270 React...', image: 'http://dummyimage.com/72x72.png/dddddd/000000' },
    { id: '2', name: 'FE - QUILTED MAXI CROS...', image: 'http://dummyimage.com/72x72.png/dddddd/000000' },
    { id: '3', name: 'FA - Nike Air Max 350 React...', image: 'http://dummyimage.com/72x72.png/dddddd/000000' },
    { id: '4', name: 'FA - Nike Air Max 350 React...', image: 'http://dummyimage.com/72x72.png/dddddd/000000' },
    { id: '5', name: 'FA - Nike Air Max 350 React...', image: 'http://dummyimage.com/72x72.png/dddddd/000000' },
    { id: '6', name: 'FA - Nike Air Max 350 React...', image: 'http://dummyimage.com/72x72.png/dddddd/000000' },
];