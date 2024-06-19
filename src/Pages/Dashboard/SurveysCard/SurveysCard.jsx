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
    <div className="card bg-white text-black shadow-md md:shadow-xl py-4 border">
      <div className="card-body">
        <div className="flex justify-between">
        <span className="badge bg-[#2F71FF] text-[14px] font-extrabold text-white">{survey.category}</span>
        <h2 className="inline-block text-[#2F71FF]">{survey.publishedDate}</h2>
        </div>
        <h2 className="card-title">{survey.title}</h2>
        <p>{survey.description}</p>
        <NavLink to={user ? `/details/${survey._id}`: '/login'}>
          <button className="btn w-full btn-primary bg-[#2F71FF] text-white border-none hover:bg-[#2f71ffbf] mt-6">Details</button>
        </NavLink>
      </div>
    </div>
  );
};

export default SurveysCard;
