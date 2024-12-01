// eslint-disable-next-line no-unused-vars
/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";
import FAQSection from "./FaqSection/FaqSection";
import Banner from "./Banner/Banner";
import NewsLetter from "./Subscribe/NewsLetter";
import PopularSurveys from "./PopularSurveys/PopularSurveys";

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Free Online Survey Maker | Unlimited Surveys | Vote snap</title>
      </Helmet>
      <Banner />
      <PopularSurveys/>
      <FAQSection />
      <NewsLetter />
    </>
  );
};

export default Home;
