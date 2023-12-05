import { StyleSheet, Text, View, TextInput, Image, Pressable, ScrollView, FlatList, SectionList, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CompositeNavigationProp, NavigationProp, useIsFocused, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamListHome, RootStackScreenEnumHome } from '../../component/Root/RootStackHome';
import { BG_COLOR, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities/utility';
import { RootTabParamList, RootTabScreenENum } from '../../component/BottomNavigation/RootTab/RootTab';
import { RootStackParamListExplore, RootStackScreenEnumExplore } from '../../component/Root/RootStackExplore';
import { COLORS } from '../../utilities';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitialListProduct } from '../../Redux/silces/Silces';
import AxiosInstance from '../../Axios/Axios';
import { RootStackScreenEnumOffer } from '../../component/Root/RootStackOffer';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { listRecommended } from '../../Redux/silces/HomeSelector';



const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
    const isFocused = useIsFocused();

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
const HomeScreen = () => {
    const navigation = useNavigation<NavigationProps>();

    const [imgActive, setimgActive] = useState(0);

    const [click, setClick] = useState<boolean>(false);

    const [enableFlatlist, setEnableFlatlist] = useState<boolean>(false);

    console.log('render');




    const [images, setImages] = useState<[]>([]);
    const [brand, setBrand] = useState<[]>([]);
    const listProduct = useSelector(listRecommended);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInitialListProduct());
        const fetchBanner = async () => {
            const response = await AxiosInstance().get(`banner/getAllBanner`);
            setImages(response.data.banner);
 
            
        }
        const fetchBrand = async () => {
            const response = await AxiosInstance().get(`brand/getAllBrand`);
            setBrand(response.data)
        }
        if (isFocused) {
            fetchBrand();
            fetchBanner();
        }
    }, [isFocused])
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


    const renderItem = ({ item }: { item: { name: string, linkIcon: string } }) => (
        <View style={styles.item}>
            <View style={styles.bodericon}>
                <Image style={{ width: 50, height: 50 }} source={{ uri: item.linkIcon }} />
            </View>
            <Text style={styles.textname}>{item.name}</Text>
        </View>
    );


    const renderItem3 = ({ item }: any) => {
        return (
            <Pressable style={styles.itemsale2} onPress={() => navigation.navigate('Explore', { screen: RootStackScreenEnumExplore.Productdetail, params: { id: item._id } })}>
                <Image style={styles.imageproduct} source={{ uri: item.image[0] }} />
                <View style={{ marginTop: 20, rowGap: 15 }}>
                    <Text style={styles.nameproduct}>{item.productName}</Text>
                </View>
                <View style={styles.stylesaleoff}>
                    <Text style={styles.price}>${item.price}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.strikethrough}>$534,33</Text>
                        <Text style={styles.saleoff}>24% Off</Text>
                    </View>
                </View>
            </Pressable>
        )
    }
    return (
        <SafeAreaView>
            <ScrollView horizontal={false} style={{ paddingHorizontal: 20, paddingTop: 15 }} scrollEnabled={!enableFlatlist}
                onScroll={({ nativeEvent }) => {
                    if (isCloseToBottom(nativeEvent)) {
                        setEnableFlatlist(true);
                    } else {
                        setEnableFlatlist(false);
                    }
                }}>
                <View style={styles.top}>
                    <View style={(!click) ? styles.headerLeft : [styles.headerLeft, { borderColor: 'blue' }]}
                    >
                        <Icon name='search' size={22} />
                        <TextInput
                            placeholder="Search here"
                            style={styles.TextSearch}
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

                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={() => navigation.navigate(RootStackScreenEnumHome.NotificationScreen)}>
                        <Icon name="notifications-outline" size={25} />
                    </TouchableOpacity>
                </View>

            </View>
            <ScrollView horizontal={false} scrollEnabled={true} showsVerticalScrollIndicator={false} stickyHeaderIndices={[2]} scrollEventThrottle={16}>
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
                            images.map((e: any, index) =>
                                <Pressable onPress={() => navigation.navigate(RootStackScreenEnumOffer.OfferScreen)} key={e._id}>
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

                    <Pressable>
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
                    <Text style={styles.textcategory}>Brand</Text>
                    <View style={styles.listcategory}>
                        <FlatList
                            data={brand}
                            horizontal
                            nestedScrollEnabled={true}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.name}
                        />
                    </View>
                </View>


                <View style={styles.listgrid}>
                    <Image style={styles.imgrecomended} source={require('../../asset/image/recomendedProduct.png')} />
                    <FlatList
                        style={{ height: 490, marginTop: 10, marginBottom: 70 }}
                        nestedScrollEnabled={true}
                        scrollEnabled={enableFlatlist}
                        showsVerticalScrollIndicator={false}
                        data={data2}
                        renderItem={renderItem3}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        columnWrapperStyle={styles.columnWrapper}
                    />
                </View>
                <FlatList
                    scrollEnabled={false}
                    contentContainerStyle={{ alignItems: 'center' }}
                    style={{ maxWidth: WIDTH, marginBottom: 45, marginTop: 10 }}
                    showsVerticalScrollIndicator={false}
                    data={listProduct}
                    renderItem={renderItem3}
                    keyExtractor={(item: any) => item._id.toString()}
                    numColumns={2}
                    columnWrapperStyle={{ columnGap: 10 }}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        height: '100%',
        alignItems: 'center',
    },
    TextSearch: {
        justifyContent: 'center',
        marginLeft: 10
    },
    headerLeft: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        borderColor: '#EBF0FF',
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
        width: WIDTH * 0.9,
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
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },

    textcategory: {
        alignSelf: 'flex-start',
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
        fontSize: 16
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
        height: 240,
        marginTop: 15,
    },

    itemsale: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 240,
        width: 140,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#EBF0FF',
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
    },

    price: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#4464C4',
    },

    stylesaleoff: {
        position: 'absolute',
        bottom: 10,
        alignItems: 'center'
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
        marginTop: 10,
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
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: 240,
        width: 165,
        marginRight: 9,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'black',
        justifyContent: 'space-around',
        marginLeft: 5,
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