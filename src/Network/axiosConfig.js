import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
});

// Add a request interceptor

axiosInstance.interceptors.request.use(function (config) {

    // Show Loader
    console.log('request', config);
    config.headers['Authorization']= 'Bearer nklmdsf544354dsfdsf5434f';
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Hide Loader
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});