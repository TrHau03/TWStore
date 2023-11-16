import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../component/Header/Header';
import ButtonBottom from '../../component/Button/Button';
import { setBirthdate } from '../../redux/silces/ProfileSilces';

const Birthday = () => {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Chuyển đổi giá trị ngày về định dạng ngày/tháng/năm
    const formatDateString = (dateString: string) => {
        const dateObject = new Date(dateString);
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0
        const year = dateObject.getFullYear();

        // Đảm bảo rằng ngày và tháng luôn có 2 chữ số bằng cách thêm '0' nếu cần
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;

        return `${formattedDay}-${formattedMonth}-${year}`;
    };


    const handleBirthdateSelection = (value: Date) => {
        setSelectedDate(value); // Cập nhật selectedDate với ngày đã chọn
        setOpen(false);
    };

    const saveBirthdate = () => {
        // Chuyển ngày đã chọn thành chuỗi định dạng ngày/tháng/năm
        const dateString = formatDateString(selectedDate.toISOString());

    };

    return (
        <View style={styles.container}>
            <Header hideBack title='BirthDay' />
            <View style={styles.line}></View>
            <View style={styles.Birthday}>
                <Text style={styles.txtBirthday}>Your Birthday</Text>
                <View style={styles.input}>
                    <Text style={styles.txtInput}>
                        {formatDateString(selectedDate.toISOString())} {/* Hiển thị ngày đã chọn */}
                    </Text>
                    <Pressable onPress={() => setOpen(true)} style={{ paddingRight: 10 }}>
                        <Icon name='calendar' size={30} color='#434343' />
                    </Pressable>
                </View>
                <DatePicker
                    modal
                    mode='date'
                    open={open}
                    date={selectedDate}
                    onConfirm={handleBirthdateSelection}
                    onCancel={() => {
                        setOpen(false);
                    }}
                />
            </View>
            <View style={{ width: '100%', position: 'absolute', bottom: 10 }}>
                <Pressable onPress={() => saveBirthdate}>
                    <ButtonBottom title='Save' />
                </Pressable>
            </View>
        </View>
    );
};

export default Birthday;

const styles = StyleSheet.create({
    input: {
        width: 'auto',
        height: 50,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#9098B1',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center', 
        gap: 30,
    },
    txtInput: {
        width: '80%',
        color: '#9098B1',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '700',
        letterSpacing: 0.5,
        paddingHorizontal: 15,
    },
    txtBirthday: {
        color: '#223263',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.5,
        paddingBottom: 10,
        alignSelf: 'flex-start',
    },
    Birthday: {
        alignItems: 'center',
        marginTop: 20,
        width: '90%',
    },
    line: {
        height: 0.5,
        backgroundColor: '#ADA8A8',
        width: '120%',
        marginTop: 20,
        position: 'relative',
        right: 20,
    },
    txtTitle: {
        color: '#223263',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 24,
        letterSpacing: 0.08,
    },
    title: {
        flexDirection: 'row',
    },
    container: {
        height: '80%',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
});
