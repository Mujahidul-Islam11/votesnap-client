import { useContext } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { AuthConext } from "../../AuthProvider/AuthProvider";

const PricingCard = () => {
  const { user } = useContext(AuthConext);
  return (
    <div>
      <Helmet>
        <title>Pricing | buy premium membership</title>
      </Helmet>
      <header>
        <h3 className="text-3xl  md:text-5xl font-bold text-center mb-2 md:mb-4">
          Pay <span className="text-[#2F71FF]">Out!</span>
        </h3>
        <p className="text-sm md:text-xl text-center text-gray-600">
          Explore latest features, be a pro user
        </p>
      </header>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Pro User Membership</div>
          <p className="text-gray-700 text-base">
            Unlock premium features and insights with our Pro User membership.
          </p>
          <div className="mt-4">
            <ul className="list-disc list-inside">
              <li>Access to advanced analytics</li>
              <li>Participate in exclusive surveys</li>
              <li>Comment on surveys</li>
            </ul>
          </div>
          <div className="mt-4 font-bold text-xl">$33.4/month</div>
        </div>

        <div className="px-6 py-4">
          <NavLink
            to={user ? "/payment" : "/login"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Pay Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
