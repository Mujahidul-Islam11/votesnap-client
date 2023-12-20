/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";

import { NavLink } from "react-router-dom";
import AxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";

import { useContext } from "react";
import { AuthConext } from "../../../AuthProvider/AuthProvider";

const SurveysCard = ({ survey, refetch }) => {
  const { user } = useContext(AuthConext);
  const axiosSecure = AxiosSecure();

  console.log(survey._id);
 
  const { data: commentsData = [] } = useQuery({
    queryKey: ["comment"],
    queryFn: async () => {
      const res = await axiosSecure.get("/comments", {
        surveyId: survey.surveyId,
      });
      return res.data;
    },
  });

  

  return (
    <div className="card bg-white text-black  shadow-xl h-[]">
      <div className="card-body">
        <h2 className="card-title">{survey.title}</h2>
        <p className="">Published At : {survey.publishedDate}</p>
        <p>{survey.description}</p>
        <p className="font-semibold border py-2 px-2 my-4">
          Category: {survey.category}
        </p>
        <NavLink to={`/details/${survey._id}`}>
          <button className="btn w-full btn-primary bg-[#8BE8E5] hover:text-white">Details</button>
        </NavLink>
      </div>
    </div>
  );
};

export default SurveysCard;
