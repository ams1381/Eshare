import axios from "axios";

export const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    }
});
axiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
},async (error) => {
    return Promise.reject(error);
})