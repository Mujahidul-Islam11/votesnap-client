import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    // <div
    //   className="hero min-h-screen "
    //   style={{
    //     backgroundImage:
    //       "url(https://i.ibb.co/HGv5JGy/Checklist-Customizable-Semi-Flat-Illustrations-Pana-Style.jpg)",
    //   }}
    // >
    //   <div className="hero-overlay bg-opacity-70"></div>
    //   <div className="hero-content text-center text-neutral-content">
    //     <div className="max-w-md">
    //       <h1 className="mb-5 text-5xl font-bold">Empower Your Voice, Shape the Future!</h1>
    //       <p className="mb-5">
    //       Welcome to VoteSnap, where your opinions matter. Explore a world of surveys, polls, and insights, and be part of a community that values your voice.
    //       Explore Surveys Now
    //       </p>
    //       <NavLink to={'/Login'}>
    //       <button className="btn btn-primary">Get Started</button>
    //       </NavLink>
    //     </div>
    //   </div>
    // </div>
    <div className="hero min-h-screen text-white " style={{
      backgroundImage:
        'url("https://i.ibb.co/d2fRNfS/Everything-You-must-Know-About-Market-Research.jpg")',
      backgroundSize: "cover",
    }}>
      <div className="hero-content bg-black bg-opacity-50 h-full flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/HGv5JGy/Checklist-Customizable-Semi-Flat-Illustrations-Pana-Style.jpg"
          className="max-w-sm rounded-full shadow-2xl shadow-[#8BE8E5]"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Empower Your Voice, Shape the Future!
          </h1>
          <p className="py-6">
            Welcome to VoteSnap, where your opinions matter. Explore a world of
            surveys, polls, and insights, and be part of a community that values
            your voice. Explore Surveys Now
          </p>
          <button className="btn btn-primary bg-[#8BE8E5]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
