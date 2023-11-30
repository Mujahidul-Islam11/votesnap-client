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

  const yesVote = published.filter((item) => item.yesVoted);
  const noVote = published.filter((item) => item.noVoted);
  const likeVote = published.filter((item) => item.likeCount);
  const dislikeVote = published.filter((item) => item.dislikeCount);
  return (
    <div>
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
