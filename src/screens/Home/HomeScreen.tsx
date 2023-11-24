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
import { COLORS } from '../../utilities';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitialListProduct } from '../../redux/silces/Silces';
import AxiosInstance from '../../Axios/Axios';
import { RootStackScreenEnumOffer } from '../../component/Root/RootStackOffer';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';


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

const renderItem3 = ({ item }: any) => {
    return (
        <View style={styles.itemsale2}>
            <Image style={styles.imageproduct} source={{ uri: item.image[0] }} />
            <View style={{ marginTop: 20, rowGap: 15 }}>
                <Text style={styles.nameproduct}>{item.productName}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.stylesaleoff}>
                    <Text style={styles.strikethrough}>$534,33</Text>
                    <Text style={styles.saleoff}>24% Off</Text>
                </View>
            </View>
        </View>
    )

}
type NavigationProps = StackNavigationProp<RootStackParamListHome, RootStackScreenEnumHome>
type BottomNavigationProp = CompositeNavigationProp<NavigationProp<RootTabParamList>, StackNavigationProp<RootStackParamListExplore>>;
const HomeScreen = (props: any) => {
    const navigationTab = props.navigation;
    const navigation = useNavigation<NavigationProps>();
    const navigationOtherTab = useNavigation<BottomNavigationProp>();

    const [imgActive, setimgActive] = useState(0);

    const [textInputStatus, setTextInputStatus] = useState<boolean>(false);

    const [textInputSearch, setTextInputSearch] = useState<string>('');

    const [images, setImages] = useState<[]>([]);

    const dispatch = useDispatch();
    const listProduct = useSelector((state: any) => state.SlicesReducer.listProduct);
    useEffect(() => {
        dispatch(fetchInitialListProduct());
        const fetchBanner = async () => {
            const response = await AxiosInstance().get(`banner/getAllBanner`);
            console.log(response.data.data);

            setImages(response.data.data);
        }
        fetchBanner();
    }, [])
    const onChange = (nativeEvent: any) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide >= 0) {
                setimgActive(slide);
            }
        }
    }

    return (
        <SafeAreaView style={{ width: WIDTH, paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_TOP, backgroundColor: BG_COLOR }}>
            <View style={styles.top}>
                <View style={(!textInputStatus) ? styles.headerLeft : [styles.headerLeft, { borderColor: COLORS.gray }]}>
                    <Icon name='search' size={22} />
                    <TextInput
                        placeholder="Search here"
                        style={[styles.TextSearch]}
                        onFocus={() => setTextInputStatus(true)}
                        onBlur={() => setTextInputStatus(false)}
                        onChangeText={setTextInputSearch}
                        value={textInputSearch}
                    />
                    {(textInputStatus) ?
                        <Pressable style={{ position: 'absolute', right: 5, backgroundColor: '#dbd9d9', borderRadius: 5 }}
                            onPress={() => setTextInputSearch('')}
                        >
                            <Icon name='close' size={14} />
                        </Pressable>
                        : null}
                </View>

                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={() => navigation.navigate(RootStackScreenEnumHome.NotificationScreen)}>
                        <Icon name="notifications-outline" size={25} />
                    </TouchableOpacity>
                </View>

            </View>
            <ScrollView horizontal={false} scrollEnabled={true} showsVerticalScrollIndicator={false} stickyHeaderIndices={[7]} onScroll={(e) => {
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
                            images.map((e: any, index) =>
                                <Pressable onPress={() => navigationTab.navigate(RootStackScreenEnumOffer.OfferScreen)} key={e._id}>
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
                            images.map((e: any, index) =>
                                <Text
                                    key={e._id}
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
                    contentContainerStyle={{ alignItems: 'center' }}
                    style={{ maxWidth: WIDTH, marginBottom: 45, marginTop: 10 }}
                    showsVerticalScrollIndicator={false}
                    data={listProduct}
                    renderItem={renderItem3}
                    keyExtractor={(item) => item._id.toString()}
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
        position: 'absolute',
        right: 0
    },
    TextSearch: {
        width: WIDTH / 2,
        justifyContent: 'center',
        marginLeft: 10,
        paddingVertical: 0,
    },
    headerLeft: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        borderColor: '#e1dede',
        alignItems: 'center',
        flexDirection: 'row',
        width: '85%',
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
        fontSize: 15,
        color: '#4464C4',
        marginLeft: 15
    },

    stylesaleoff: {
        flexDirection: 'row'
    },

    strikethrough: {
        textDecorationLine: 'line-through',
        fontSize: 15,
        marginRight: 12,
        marginLeft: 15
    },

    saleoff: {
        fontWeight: 'bold',
        fontSize: 13,
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


    listgrid: {
    },

    itemsale2: {
        paddingVertical: 10,
        height: 240,
        width: WIDTH / 2.5,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'black',
        marginBottom: 5,
    }

})
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