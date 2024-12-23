/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthConext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import UseAdmin from "../Dashboard/UseAdmin/UseAdmin";

const AdminPrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const [userRole, isAdminLoading] = UseAdmin();

  const { user, loading } = useContext(AuthConext);
  if (loading || isAdminLoading) {
    return <div className="flex justify-center h-screen items-center"><div className="relative w-14 h-14 flex items-center justify-center"><div className="w-5 h-5 animate-[ping_2s_linear_infinite] border rounded-full border-sky-600"></div><div className="w-14 h-14 animate-[ping_2s_linear_3s_infinite] border rounded-full border-sky-600 absolute"></div></div></div>
  }
  if (user && userRole === "Admin") {
    return children;
  }
  return navigate("/Login");
};

export default AdminPrivateRoute;
