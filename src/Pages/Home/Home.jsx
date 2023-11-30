/* eslint-disable react/no-unescaped-entities */
import Banner from "../Banner/Banner";
import HowItWorksSection from "../HowItWorksSection/HowItWorksSection";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="my-10">
                <HowItWorksSection></HowItWorksSection>
            </div>
        </div>
    );
};

export default Home;