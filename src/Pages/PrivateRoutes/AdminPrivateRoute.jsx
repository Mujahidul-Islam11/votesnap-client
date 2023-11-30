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
    return (
      <span className="loading loading-bars loading-lg flex justify-center items-center mx-auto"></span>
    );
  }
  if (user && userRole === "Admin") {
    return children;
  }
  return navigate("/Login");
};

export default AdminPrivateRoute;
