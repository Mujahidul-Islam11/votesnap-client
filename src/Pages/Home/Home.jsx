/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import FAQSection from "../FaqSection/FaqSection";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>VoteSnap</title>
      </Helmet>
      <Banner></Banner>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;
