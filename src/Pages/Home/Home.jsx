/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import FAQSection from "../FaqSection/FaqSection";
import Surveys from "../Dashboard/Surveys/Surveys";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>VoteSnap</title>
      </Helmet>
      <Banner></Banner>
      <div>
        <h3 className="text-3xl  md:text-5xl font-bold text-center mb-4 md:mb-6">
          Surveys<span className="text-[#2F71FF]">!</span>
        </h3>
        <p className="text-xl text-center">Explore the latest surveys</p>
        <Surveys></Surveys>
      </div>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;
