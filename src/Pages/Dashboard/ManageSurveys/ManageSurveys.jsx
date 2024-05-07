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
    <div className="grid md:grid-cols-4 gap-6 mx-10 py-6">
      <Helmet>
        <title>Dashboard || Manage Survey</title>
      </Helmet>
      {
        surveysData?.map(item=> <div key={item._id} className="bg-white card px-4 py-2 card-compact  shadow-xl">
        <div className="card-body ">
          <h2 className="card-title">{item.title}</h2>
          <p className="underline">Published Date : {item.publishedDate}</p>
          <p className="font-bold">Category : {item.category}</p>
          <p>{item.description}</p>
          <NavLink to={`/dashboard/edit/${item._id}`}>
          <div className="card-actions justify-start">
            <button className="btn btn-primary"><FaEdit></FaEdit></button>
          </div>
          </NavLink>
        </div>
      </div>)
      }
    </div>
  );
};

export default ManageSurveys;
