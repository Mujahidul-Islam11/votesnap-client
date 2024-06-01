import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <div className="mx-auto">
      <Helmet>
     <title>Contact Us</title>
  </Helmet>
      <div className="container mx-auto my-7 md:my-14">
      <h3 className="text-3xl  md:text-5xl font-bold text-center mb-2 md:mb-4">
          Contact <span className="text-[#2F71FF]">Us!</span>
        </h3>
        <p className="text-sm md:text-xl text-center text-gray-600">Let us know your words</p>
        <div className="flex justify-center gap-6 mt-6">
          <div className="bg-white p-6">
          <h2 className="text-3xl text-center mb-4"><ion-icon name="location-outline"></ion-icon></h2>
          <h2 className="text-xl text-gray-600">Bangladesh, Chattogram</h2>
          </div>
          <div className="bg-white p-6">
          <h2 className="text-3xl text-center mb-4"><ion-icon name="call-outline"></ion-icon></h2>
          <h2 className="text-xl text-gray-600">+01495254323</h2>
          </div>
          <div className="bg-white p-6">
          <h2 className="text-3xl text-center mb-4"><ion-icon name="mail-outline"></ion-icon></h2>
          <h2 className="text-xl text-gray-600">VoteSnap@gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
