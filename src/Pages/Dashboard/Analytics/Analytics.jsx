import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import SurveyorPieChart from "../SurveyorPieChart/SurveyorPieChart";

const Analytics = () => {
  const axiosSecure = AxiosSecure();
  const { data: published = [], refetch } = useQuery({
    queryKey: ["published"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/surveyor`);
      return res.data;
    },
  });

  const yesVote = published.reduce((total,item) => total + item.yesVoted, 0);
  const noVote = published.reduce((total,item) => total + item.noVoted, 0);
  const likeVote = published.reduce((total,item) => total + item.likeCount, 0);
  const dislikeVote = published.reduce((total,item) => total + item.dislikeCount, 0);
  return (
    <div className="flex justify-center md:my-36">
      <SurveyorPieChart
        yesVote={yesVote}
        noVote={noVote}
        likeVote={likeVote}
        dislikeVote={dislikeVote}
      ></SurveyorPieChart>
    </div>
  );
};

export default Analytics;
