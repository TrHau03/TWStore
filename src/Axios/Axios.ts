import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
<<<<<<< HEAD
        baseURL: 'http://192.168.0.101:3000/'
=======
        baseURL: 'http://192.168.1.8:3000/'
>>>>>>> main
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