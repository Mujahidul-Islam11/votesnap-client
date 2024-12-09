// eslint-disable-next-line no-unused-vars
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SurveysCard from "../Dashboard/SurveysCard/SurveysCard";
import { Helmet } from "react-helmet";
import ComponentTitle from "../../UI/ComponentTitle";
import AxiosOpen from "../../Hooks/AxiosSecure/AxiosOpen";

const Surveys = () => {
  const [sliceBtn, setSliceBtn] = useState(6);

  const axiosPublic = AxiosOpen();
  const { data: published = [], refetch } = useQuery({
    queryKey: ["published"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/surveyor`);
      return res.data;
    },
  });

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
