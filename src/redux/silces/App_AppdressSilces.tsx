import { createSlice , PayloadAction  } from '@reduxjs/toolkit';



const initialState = {
    provinces: '',
    districts: '',
    wards: '',
    detailwards: '',
    phone: '',

}
const AppdressSlice = createSlice({
    name: 'AppdressSlice',
    initialState,
    reducers: {
        setProvinces: (state, action) => {
            state.provinces = action.payload;
        },
        setDistricts: (state, action) => {
            state.districts = action.payload;
        },
        setWard: (state, action) => {
            state.wards = action.payload;
        },
        setDetailWard: (state, action) => {
            state.detailwards = action.payload;
        },
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
    },
});

export const { setProvinces, setDistricts, setWard , setDetailWard , setPhone} = AppdressSlice.actions;


export default AppdressSlice.reducer;   

