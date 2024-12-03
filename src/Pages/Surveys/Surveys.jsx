/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import AxiosSecure from "../../Hooks/AxiosSecure/AxiosSecure";
import { AuthConext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import SurveysCard from "../Dashboard/SurveysCard/SurveysCard";
import { Helmet } from "react-helmet";
import ComponentTitle from "../../UI/ComponentTitle";

const Surveys = () => {
  const [sliceBtn, setSliceBtn] = useState(6);

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

  // slice method (dynamically)

  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Surveys | explore surveys</title>
      </Helmet>
      <ComponentTitle titleFirst={"Surveys"} desc={"Explore unlimited surveys in vote snap"}/>
      <div className="grid md:grid-cols-3 my-10 gap-6 px-4 md:gap-6">
        {published?.slice(0, sliceBtn).map((sur) => (
          <SurveysCard
            key={sur._id}
            survey={sur}
            refetch={refetch}
          ></SurveysCard>
        ))}
      </div>
      <button
        onClick={() => setSliceBtn(sliceBtn > 6 ? sliceBtn - 3 : sliceBtn + 3)}
        className="btn btn-primary bg-[#2F71FF] text-white border-none hover:bg-[#2f71ffbf] my-2 md:my-4 mx-auto flex justify-center shadow-lg"
      >
        {sliceBtn > 6 ? "Load Less" : "Load More"}
      </button>
    </div>
  );
};

export default Surveys;
