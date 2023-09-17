import axios from 'axios';


const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL: 'http://192.168.100.96:3000/'
    });

    return axiosInstance;
};

export default AxiosInstance;