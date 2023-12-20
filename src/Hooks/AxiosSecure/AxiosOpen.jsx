import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://yoo-survey-server.vercel.app'
})

const AxiosOpen = () => {
    return axiosPublic
};

export default AxiosOpen;
