import React from "react";
import ComponentTitle from "../../../UI/ComponentTitle";

const Partners = () => {
  return (
    <div className="w-full py-14 ">
      {/* Heading Section */}
      <ComponentTitle title={"Our Partners"} desc={"Our online survey creator is used globally by corporations, universities, governments, and individuals."}/>

      {/* Logos Section */}
      <div className="max-w-6xl mx-6 md:mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 items-center p-8 md:p-16 mt-10 border rounded-md shadow-md">
        <img src="https://public.surveyplanet.com/images/customers/amazon.svg" alt="Amazon" className="h-12 object-contain" />
        <img src="https://public.surveyplanet.com/images/customers/american_red_cross.svg" alt="American Red Cross" className="h-12 object-contain" />
        <img src="https://public.surveyplanet.com/images/customers/hilton.svg" alt="Hilton" className="h-12 object-contain" />
        <img src="https://public.surveyplanet.com/images/customers/nasa.svg" alt="Nasa" className="h-12 object-contain" />
        <img src="https://public.surveyplanet.com/images/customers/stanford.svg" alt="Stanford university" className="h-12 object-contain" />
        <img src="https://public.surveyplanet.com/images/customers/walt_disney.svg" alt="Walt Disney" className="h-12 object-contain" />
      </div>
    </div>
  );
};

export default Partners;
