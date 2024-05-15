/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthConext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const navigate = useNavigate()
    const {user, loading} = useContext(AuthConext)
    if(loading){
        return <span className="loading loading-bars loading-lg text-center mx-auto items-center flex justify-center"></span>
    }
    if(user){
       return children
    }
    return navigate('/Login')
};

export default PrivateRoute;