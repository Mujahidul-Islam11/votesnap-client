/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import AxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import { AuthConext } from "../../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import swal from "sweetalert";
import SurveysCard from "../SurveysCard/SurveysCard";

const Surveys = () => {
  const axiosSecure = AxiosSecure();
  // eslint-disable-next-line no-unused-vars
  const { user } = useContext(AuthConext);
  const { data: published = [], refetch } = useQuery({
    queryKey: ["published"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/surveyor`);
      return res.data;
    },
  });

  return (
    <div>
      <div className="flex justify-between bg-gray-300 py-3 px-6">
        <h3 className="text-xl font-bold flex gap-3 items-center">
          <HiAdjustmentsVertical /> Filter
        </h3>
        <div>
        <div className="flex items-center">
          <label className="block text-xl mr-2 font-medium mb-2">
            Category
          </label>
          <select
            name="category"
            className="select bg-white select-bordered w-full max-w-xs"
          >
            <option selected>Technology</option>
            <option>Entertainment</option>
            <option>Science</option>
            <option>Sports</option>
            <option>Education</option>
            <option>Travel</option>
            <option>Fashion</option>
          </select>
        </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 my-10 gap-6">
        {published?.map((sur) => (
          <SurveysCard
            key={sur._id}
            survey={sur}
            refetch={refetch}
          ></SurveysCard>
        ))}
      </div>
    </div>
  );
};

export default Surveys;
