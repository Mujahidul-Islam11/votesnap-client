const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/HGv5JGy/Checklist-Customizable-Semi-Flat-Illustrations-Pana-Style.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Empower Your Voice, Shape the Future!</h1>
          <p className="mb-5">
          Welcome to Yoo Survey, where your opinions matter. Explore a world of surveys, polls, and insights, and be part of a community that values your voice. 
          Explore Surveys Now
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    
  );
};

export default Banner;
