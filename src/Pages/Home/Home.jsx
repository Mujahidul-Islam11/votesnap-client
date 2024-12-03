// eslint-disable-next-line no-unused-vars
/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";
import FAQSection from "./FaqSection/FaqSection";
import Banner from "./Banner/Banner";
import NewsLetter from "./Subscribe/NewsLetter";
import PopularSurveys from "./PopularSurveys/PopularSurveys";
import Partners from "./Partners/Partners";

const Home = () => {

  return (
    <div className="space-y-14 md:space-y-24">
      <Helmet>
        <title>Free Online Survey Maker | Unlimited Surveys | Vote snap</title>
      </Helmet>
      <Banner />
      <Partners/>
      <PopularSurveys/>
      <FAQSection />
      <NewsLetter />
    </div>
  );
};

export default Home;
