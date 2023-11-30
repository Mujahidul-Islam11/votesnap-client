/* eslint-disable react/no-unescaped-entities */
import Banner from "../Banner/Banner";
import FAQSection from "../FaqSection/FaqSection";
import HowItWorksSection from "../HowItWorksSection/HowItWorksSection";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="my-10">
                <HowItWorksSection></HowItWorksSection>
            </div>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;