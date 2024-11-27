import Lottie from "react-lottie";
import animationData from "../../../public/survey-banner.json"


const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
  };

  return (
    <div className="hero max-w-7xl mx-auto md:px-12 text-gray-900 md:py-14 xl:py-16">
      <div className="hero-content bg-transparent h-full flex-col lg:flex-row-reverse">
        <Lottie options={defaultOptions}></Lottie>
        <div>
          <h1 className="max-w-2xl text-4xl md:text-5xl xl:text-6xl font-extrabold">
            Empower Your Voice, Shape the <span className="text-[#2F71FF]">Future!</span>
          </h1>
          <p className="py-6 md:text-lg lg:text-xl">
            Welcome to VoteSnap, where your opinions matter. Explore a world of
            surveys, polls, and insights, and be part of a community that values
            your voice. Explore surveys now!
          </p>
          <button className="btn btn-primary bg-[#2F71FF] text-white border-none hover:bg-[#2f71ffbf]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
