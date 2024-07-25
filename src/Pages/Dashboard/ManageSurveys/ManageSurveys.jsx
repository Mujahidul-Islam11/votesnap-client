/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { AuthConext } from "../../../AuthProvider/AuthProvider";
import AxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const ManageSurveys = () => {
  const axiosSecure = AxiosSecure();
  // eslint-disable-next-line no-unused-vars
  const { user } = useContext(AuthConext);

  const { data: surveysData = [] } = useQuery({
    queryKey: ["surs"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/surs/${user?.email}`);
      return res.data;
    },
  });
console.log(surveysData)
  return (
    <div className="flex flex-col justify-center items-center ">
      {surveysData.length> 0 && <header>
        <h3 className="text-3xl font-semibold my-4">Manage your surveys</h3>
      </header>}
      <Helmet>
        <title>Dashboard || Manage Survey</title>
      </Helmet>
      {surveysData.length > 0 ? <div className="grid md:grid-cols-4 gap-6 mx-10 py-6 my-auto">
      {
        surveysData?.map(item=> <div key={item._id} className="bg-white card px-4 py-2 card-compact  shadow-xl">
        <div className="card-body ">
          <h2 className="card-title">{item.title}</h2>
          <p className="underline">Published Date : {item.publishedDate}</p>
          <p className="font-bold">Category : {item.category}</p>
          <p>{item.description}</p>
          <NavLink to={`/dashboard/edit/${item._id}`}>
          <div className="card-actions justify-start">
            <button className="btn btn-primary bg-blue-500 hover:bg-blue-600 border-none text-white"><FaEdit></FaEdit></button>
          </div>
          </NavLink>
        </div>
      </div>) 
      }
    </div> : <div className="my-20 md:my-56">
        <h3 className="text-2xl text-center font-semibold mb-6">You haven't created any surveys yet</h3>
        <NavLink to={"/dashboard/createSurvey"}>
        <button
          type="submit"
          className="flex justify-center mx-auto md:w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Create Survey
        </button>
        </NavLink>
      </div>}
    </div>
  );
};

export default ManageSurveys;
