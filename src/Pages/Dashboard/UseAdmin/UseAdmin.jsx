import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthConext } from "../../../AuthProvider/AuthProvider";
import AxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";

const UseAdmin = () => {
    const {user} = useContext(AuthConext)
    const axiosSecure = AxiosSecure()
  const { data: userRole = [], isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "role"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res?.data.role;
    },
  });
  return [userRole, isAdminLoading]
};

export default UseAdmin;
// https://yoo-survey-server.vercel.app/users/admin/web.dev.dinar@gmail.com