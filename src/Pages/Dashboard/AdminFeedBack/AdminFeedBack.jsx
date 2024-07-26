import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import { useContext} from "react";
import { AuthConext } from "../../../AuthProvider/AuthProvider";
import AdminFeedTable from "./AdminFeedTable";
import { Helmet } from "react-helmet";

const AdminFeedBack = () => {
  const axiosSecure = AxiosSecure();
  const { user } = useContext(AuthConext);
  const { data: unPublished = [] } = useQuery({
    queryKey: ["unPublished"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/unPublished/${user.email}`);
      return res.data;
    },
  });


  return (
    <div>
      <Helmet>
        <title>Dashboard || Admin Feedback</title>
      </Helmet>
      <h3 className="text-center mt-6  font-bold text-2xl">Admin's Feedback</h3>
      <div className="overflow-x-auto mx-10 mt-6">
        <table className="table">
          {/* head */}
          <thead className="bg-gradient-to-r from-[#2f71ff77] to-[#2f71ffcb] text-black">
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Survey Title</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {unPublished?.map((survey, index) => <AdminFeedTable index={index} key={survey._id} survey={survey}></AdminFeedTable>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminFeedBack;
