import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import { Helmet } from "react-helmet";
import "../../../index.css";
import PieChart from "../PieChart/PieChart";

const SurveyResponse = () => {
  const axiosSecure = AxiosSecure();
  const { data: votingData = [] } = useQuery({
    queryKey: ["voting"],
    queryFn: async () => {
      const res = await axiosSecure(`/vote`);
      return res.data;
    },
  });
  const yesVote = votingData.filter((item) => item.vote === "Yes");
  const noVote = votingData.filter((item) => item.vote === "No");
  return (
    <div className="overflow-x-auto mx-10 mt-6 h-screen survey-response">
      <Helmet>
        <title>Dashboard || Survey Response</title>
      </Helmet>
      <h3 className="text-center mt-6 font-bold text-xl">survey responses</h3>
      <div className="mt-6">
        <table className="table">
          {/* head */}
          <thead className="bg-gradient-to-r from-[#2f71ff77] to-[#2f71ffcb] text-black">
            <tr>
              <th>#</th>
              <th>User Email</th>
              <th>User Name</th>
              <th>Category</th>
              <th>Vote</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {votingData?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-semibold">{item.email}</div>
                    </div>
                  </div>
                </td>
                <td>{item.userName}</td>
                <td>{item.category}</td>
                <td>{item.vote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PieChart yesVote={yesVote} noVote={noVote}/>
    </div>
  );
};

export default SurveyResponse;
