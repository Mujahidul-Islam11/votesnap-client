/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import UseAdmin from "../Dashboard/UseAdmin/UseAdmin";
import { AuthConext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";


const SurveyorPrivateRoute = ({children}) => {
    const navigate = useNavigate()
    const [userRole, isAdminLoading] = UseAdmin();


    const {user, loading} = useContext(AuthConext)
    if(loading || isAdminLoading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user && userRole === 'Surveyor'){
       return children
    }
    return navigate('/Login')
};

export default SurveyorPrivateRoute;