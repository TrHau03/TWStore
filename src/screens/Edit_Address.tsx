import { StyleSheet, Text, View, TextInput, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Header from '../component/Header/Header'
import Button from '../component/Button/Button'
import { SelectList } from 'react-native-dropdown-select-list'

interface Add {
    id: number;
    name: string;
}


const renderItem = ({ item }: any): React.JSX.Element => {
    const { id, name } = item;

    return <View style={styles.Title}>
        <Text style={styles.txtTitle}>{item.name}</Text>
        <View style={styles.input}>
            <TextInput style={styles.txtInput} />
        </View>
    </View>
};

const Edit_Address = () => {
    const country = [
        { key: '1', value: 'United States' },
        { key: '2', value: 'United Kingdom' },
        { key: '3', value: 'VietNamese' },
    ]

    const [selected, setSelected] = React.useState("");

    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={styles.line}></View>

            <View style={styles.Title}>
                <Text style={styles.txtTitle}>Country or region</Text>
                <SelectList
                    setSelected={setSelected}
                    data={country}
                    save="value"
                    placeholder='VietNamese'
                    defaultOption={{ key: 1, value: 'VietNamese' }}
                    boxStyles={{ borderRadius: 5 }}
                />
            </View>

            <FlatList
                data={Data}
                renderItem={renderItem}
            />

            <Button />

        </ScrollView>
    )
}

export default Edit_Address

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: "#9098B1",
        borderRadius: 5,
    },

    txtInput: {
        color: '#9098B1',
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21.60,
        letterSpacing: 0.50,
        marginLeft: 15,
    },

    txtTitle: {
        color: '#223263',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.50,
        paddingBottom: 10,
    },

    Title: {
        padding: 10,
    },

    line: {
        height: 1,
        backgroundColor: '#9098B1',
        width: '100%',
        marginTop: 30,
    },
    container: {
        width: '100%',
        height: '100%',
        paddingTop: 20,
    }
})

const Data: Add[] = [
    {
        id: 1,
        name: 'First Name'
    },
    {
        id: 2,
        name: 'Last Name'
    },
    {
        id: 3,
        name: 'Street Address'
    },
    {
        id: 4,
        name: 'Street Address 2 (Optional)'
    },
    {
        id: 5,
        name: 'City'
    },
    {
        id: 6,
        name: 'State/Province/Region'
    },
    {
        id: 7,
        name: 'Zip Code'
    },
    {
        id: 8,
        name: 'Phone Number'
    },
]