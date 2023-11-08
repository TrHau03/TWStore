import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'Le Trung Hau',
    userName: '@Haule',
    gender: 'Male',
    birthdate: '10-12-2003',
    email: 'hault2003@gmail.com',
    phone: '0345625243',
    image: 'https://scontent.xx.fbcdn.net/v/t39.30808-6/329926999_619168540016905_551067399906215730_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YZfjgM7zgEYAX8ersXn&_nc_ht=scontent.fhan3-5.fna&oh=00_AfBP2sdERBsjf-12y7HvPJBZFnwCnNdbmTLkXd8Bhbx6QA&oe=652CCA4B&_nc_fr=fhan3c05',
    password: '123abc'
};

const profileSlice = createSlice({
    name: 'profileSlice',
    initialState,
    reducers: {
        setImage: (state, action) => {
            state.image = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setPhoneNumber: (state, action) => {
            state.phone = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setBirthdate: (state, action) => {
            state.birthdate = action.payload;
        },
        setName:(state, action) => {
            state.name = action.payload;
        },
    },
});

export const {
    setImage,
    setGender,
    setPhoneNumber,
    setPassword,
    setEmail,
    setBirthdate,
    setName,
} = profileSlice.actions;

export default profileSlice.reducer;
