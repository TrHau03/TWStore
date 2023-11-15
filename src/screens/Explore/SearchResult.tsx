import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { CompositeNavigationProp, CompositeScreenProps, useNavigation } from '@react-navigation/native';
import { RootStackParamListHome, RootStackScreenEnumHome } from '../../component/Root/RootStackHome';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList, RootTabScreenENum } from '../../component/BottomNavigation/RootTab/RootTab';



interface Category {
    id: number;
    img: any;
    name: string;
}
const SearchResult = () => {

    const [click, setClick] = useState<boolean>(false);

    return (
        <View style={styles.container} >
            <View style={styles.group}>
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
                    <TouchableOpacity>
                        <Icon name="filter-outline" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="funnel-outline" size={25} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20 }}>
                <Text style={styles.quantity}> 145 Result</Text>
                <Text style={styles.category}> Man Shoes </Text>
            </View>
            
        </View>

    );
};

export default SearchResult;

const styles = StyleSheet.create({
    category: {
        color: '#223263',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21.60,
        letterSpacing: 0.50,
        wordWrap: 'break-word'
    },

    quantity: {
        color: '#9098B1',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21.60,
        letterSpacing: 0.50,
        wordWrap: 'break-word'
    },

    TextSearch: {
        justifyContent: 'center',
        marginLeft: 20
    },
    imageSearch: {
        width: 20,
        height: 20
    },
    headerRight: {
        paddingLeft: 10,
        gap: 15,
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
    },

    headerLeft: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        borderColor: '#EBF0FF',
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%',
        height: '100%'
    },
    group: {
        flexDirection: 'row',
        width: '100%',
        height: 50,

    },
    container: {
        paddingTop: 10,
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#fff'
    }
});

const DataMan: Category[] = [
    {
        id: 1,
        img: require('../../asset/image/iconCategory.png'),
        name: 'Red Apple',
    },
    {
        id: 2,
        img: require('../../asset/image/iconCategory.png'),
        name: 'Orginal',
    },
    {
        id: 3,
        img: require('../../asset/image/iconCategory.png'),
        name: 'Avocado',
    },
    {
        id: 4,
        img: require('../../asset/image/iconCategory.png'),
        name: 'Strawberry',
    },
    {
        id: 5,
        img: require('../../asset/image/iconCategory.png'),
        name: 'Orginal',
    },
    {
        id: 6,
        img: require('../../asset/image/iconCategory.png'),
        name: 'Red Apple',
    },
];

const DataWoman: Category[] = [
    {
        id: 1,
        img: require('../../asset/image/iconCategory.png'),
        name: 'Red Apple',
    },
    {
        id: 2,
        img: require('../../asset/image/iconCategory.png'),
        name: 'Orginal',
    },
    {
        id: 3,
        img: require('../../asset/image/iconCategory.png'),
        name: 'Avocado',
    },
    {
        id: 4,
        img: require('../../asset/image/iconCategory.png'),
        name: 'Strawberry',
    },
    {
        id: 5,
        img: require('../../asset/image/iconCategory.png'),
        name: 'Orginal',
    },
    {
        id: 6,
        img: require('../../asset/image/iconCategory.png'),
        name: 'Red Apple',
    },
];
