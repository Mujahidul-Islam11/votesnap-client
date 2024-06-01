/* eslint-disable react/no-unescaped-entities */


const AboutUs = () => {
  return (
    <div className="bg-white py-16 px-10 my-7 md:my-14">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">About VoteSnap</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Our Mission</h3>
            <p className="text-gray-600">
              At VoteSnap, our mission is to provide a seamless and user-friendly platform for conducting polls and surveys. We believe in the power of data-driven decision-making and aim to empower individuals and organizations with valuable insights.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Why Choose VoteSnap?</h3>
            <p className="text-gray-600">
              VoteSnap is designed with simplicity in mind. Whether you're a student conducting research or a business seeking customer feedback, our platform offers intuitive tools to create, distribute, and analyze surveys effortlessly.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Contact Us</h3>
          <p className="text-gray-600">
            Have questions or suggestions? Feel free to reach out to us at <span className="text-blue-500">support@yoosurvey.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
