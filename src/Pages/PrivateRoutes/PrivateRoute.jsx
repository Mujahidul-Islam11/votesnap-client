/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthConext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const navigate = useNavigate()
    const {user, loading} = useContext(AuthConext)
    if(loading){
        return <div className="flex justify-center h-screen items-center"><div className="relative w-14 h-14 flex items-center justify-center"><div className="w-5 h-5 animate-[ping_2s_linear_infinite] border rounded-full border-sky-600"></div><div className="w-14 h-14 animate-[ping_2s_linear_3s_infinite] border rounded-full border-sky-600 absolute"></div></div></div>
    }
    if(user){
       return children
    }
    return navigate('/Login')
};

export default PrivateRoute;