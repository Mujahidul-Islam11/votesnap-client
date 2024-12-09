import axios from "axios";
import { useContext } from "react";
import { AuthConext } from "../../AuthProvider/AuthProvider";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
    // baseURL: 'https://yoo-survey-server.vercel.app'
})

const AxiosSecure = () => {
    const { logOut } = useContext(AuthConext);

    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config
    }, (err) => {
        return Promise.reject(err)
    })

    axiosSecure.interceptors.response.use((response) => {
        return response
    }, (err) => {
        const status = err.response.status;
        if (status === 401 || status === 403) {
            logOut()
        }
        return Promise.reject(err)
    })

    return axiosSecure
};

export default AxiosSecure;