import { useQuery } from "@tanstack/react-query";
import AxiosSecure from '../AxiosSecure/AxiosSecure';


const UseSurveyAdmin = () => {
    const axiosSecure = AxiosSecure()

    const {data: surveys=[], refetch} = useQuery({
        queryKey:['status'],
        queryFn: async()=>{
           const res = await axiosSecure.get('/surveys')
            return res.data
        }
    })
    return [surveys, refetch]
};

export default UseSurveyAdmin;