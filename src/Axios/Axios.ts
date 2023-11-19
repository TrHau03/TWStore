import axios from 'axios';


const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL: 'https://twstore-97af27ad5b67.herokuapp.com/'
    });

    return axiosInstance;
};

export default AxiosInstance;