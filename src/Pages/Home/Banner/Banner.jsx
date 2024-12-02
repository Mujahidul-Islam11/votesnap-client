import Lottie from "react-lottie";
import animationData from "../../../../public/survey-banner.json"


const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
  };

  return (
    <div className="pb-6 border-b">
      <div className="max-w-7xl mx-auto px-6 md:px-8 bg-transparent flex flex-col lg:flex-row-reverse justify-center items-center">
        <div className="md:w-[800px]">
        <Lottie options={defaultOptions}></Lottie>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-dc">
            Empower Your Voice, Shape the <span className="text-[#2F71FF]">Future!</span>
          </h1>
          <p className="py-6 md:text-3xl text-sdc font-light">
          Create free online surveys <br /> with unlimited questions and responses!
          </p>
          <button className="btn btn-primary bg-[#2F71FF] px-8 md:px-12 text-white border-none hover:bg-[#2f71ffbf] flex items-center gap-2">Get Started <span className=" text-lg font-semibold">&#8594;</span></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
