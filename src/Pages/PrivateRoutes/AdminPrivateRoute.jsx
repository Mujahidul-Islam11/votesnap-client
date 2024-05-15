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
      <span className="loading loading-bars loading-lg text-center mx-auto items-center flex justify-center"></span>
    );
  }
  if (user && userRole === "Admin") {
    return children;
  }
  return navigate("/Login");
};

export default AdminPrivateRoute;
