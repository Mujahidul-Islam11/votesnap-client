import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'https://yoo-survey-server.vercel.app'
})

const AxiosSecure = () => {
    return axiosSecure
};

export default AxiosSecure;