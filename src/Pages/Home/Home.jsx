/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import FAQSection from "../FaqSection/FaqSection";
import AxiosSecure from "../../Hooks/AxiosSecure/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SurveysCard from "../Dashboard/SurveysCard/SurveysCard";
import { NavLink } from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  const axiosSecure = AxiosSecure();
  // eslint-disable-next-line no-unused-vars

  const { data: published = [], refetch } = useQuery({
    queryKey: ["published"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/surveyor`);
      return res.data;
    },
  });
  return (
    <div className="">
      <Helmet>
        <title>VoteSnap</title>
      </Helmet>
      <Banner></Banner>
      <div className="my-7 md:my-14">
        <h3 className="text-3xl  md:text-5xl font-bold text-center mb-2 md:mb-4">
          Surveys<span className="text-[#2F71FF]">!</span>
        </h3>
        <p className="text-sm md:text-xl text-center text-gray-600">Explore the latest surveys</p>
        <div className="grid md:grid-cols-3 my-10 gap-6 px-4 md:gap-6">
          {published?.slice(0, 3).map((sur) => (
            <SurveysCard
              key={sur._id}
              survey={sur}
              refetch={refetch}
            ></SurveysCard>
          ))}
        </div>
        <NavLink to={'/surveys'}>
          <button className="btn btn-primary bg-[#2F71FF] text-white my-2 md:my-4 mx-auto flex justify-center">
            Explore More
          </button>
        </NavLink>
      </div>
      <FAQSection></FAQSection>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
