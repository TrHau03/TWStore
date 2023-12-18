import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL: 'http://twstore.onrender.com/'
    });
    axiosInstance.interceptors.request.use(
        async (config: any) => {
            const token = await AsyncStorage.getItem('token');
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;