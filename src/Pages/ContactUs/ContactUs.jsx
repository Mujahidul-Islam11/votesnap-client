import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <div className="mx-auto">
      <Helmet>
     <title>Contact Us</title>
  </Helmet>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div>
            <form className="md:w-1/2 lg:ml-10">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="w-1/2">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Email:</span>{" "}
              web.dev.dinar@gmail.com
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Phone:</span> 01889112836
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
