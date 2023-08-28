import { StyleSheet, Text, View, TextInput, Image, Pressable, ScrollView, FlatList, SectionList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const images = [
    'https://thietke6d.com/wp-content/uploads/2021/03/Mau-banner-quang-cao-dep-1.png',
    'https://intphcm.com/data/upload/banner-thoi-trang-tuoi.jpg',
    'https://dojeannam.com/wp-content/uploads/2017/09/BANNER-KHAI-TRUONG-DOJEANNAM.jpg',
    'https://intphcm.com/data/upload/banner-thoi-trang.jpg'
]

const HomeScreen = () => {

    const [imgActive, setimgActive] = useState(0);

    const onChange = (nativeEvent: any) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide >= 0) {
                setimgActive(slide);
            }
        }
    }

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
        console.log(item.image);
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

    return (
        <ScrollView horizontal={false}>
            <View style={styles.top}>

                <View>
                    {/* <Image style={styles.search} source={require('../asset/img/Search.png')} /> */}
                    <Icon name='search' style={styles.search} size={22} />
                    <TextInput
                        style={styles.textinputsecrch}
                        placeholder="Search Here" >
                    </TextInput>
                </View>

                <Pressable style={styles.pressable}>
                    {/* <Image style={styles.favorite} source={require('../asset/img/Favorite.png')} /> */}
                    <Icon name='shirt-sharp' size={24} />
                </Pressable>

                <Pressable style={styles.pressable}>
                    <Icon name='notifications-outline' size={24} />
                    {/* <Image style={styles.notification} source={require('../asset/img/Notification.png')} /> */}
                </Pressable>

            </View>

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
                            <Image
                                key={e}
                                resizeMode='stretch'
                                style={styles.slide}
                                source={{ uri: e }}
                            />
                        )
                    }
                </ScrollView>

                <View style={styles.warpdot}>
                    {
                        images.map((e, index) =>
                            <Text
                                key={e}
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
                    data={data2}
                    horizontal
                    renderItem={renderItem2}
                    keyExtractor={(item) => item.id}
                />
            </View>

            <Image style={styles.imgrecomended} source={require('../asset/image/recomendedProduct.png')} />

            <View style={styles.listgrid}>
                <FlatList
                    style={{ height: 550 }}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    data={data2}
                    renderItem={renderItem3}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                />
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    top: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textinputsecrch: {
        width: 263,
        height: 46,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#D9E2FF',
        paddingLeft: 45,
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

    search: {
        width: 24,
        height: 24,
        position: 'absolute',
        top: 11,
        left: 10,
    },

    topslide: {
        marginLeft: 20,
        marginRight: 20
    },

    slide: {
        height: 205,
        width: 354,
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
        margin: 20,
    },

    textcategory: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#223263'
    },

    listcategory: {
        height: 100,
        marginLeft: 20,
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
        marginLeft: 20,
        marginRight: 20,
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
        marginLeft: 20,
        marginTop: 15,
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
        marginLeft: 15,
        width: 72,
        height: 72
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
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },

    imgrecomended: {
        marginTop: 10,
        marginLeft: 20,
    },

    imga: {
        marginLeft: 15
    },

    columnWrapper: {
        justifyContent: 'flex-start',
    },

    listgrid: {
        marginLeft: 20,
        marginRight: 20,
    },

    itemsale2: {
        height: 240,
        width: 165,
        marginRight: 9,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#EBF0FF',
        justifyContent: 'space-around',
    }

})