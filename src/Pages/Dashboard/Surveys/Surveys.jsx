/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import AxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import { AuthConext } from "../../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

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
      <div
        className="grid md:grid-cols-4 gap-6"
      >
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
