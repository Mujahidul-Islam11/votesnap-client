import React from 'react';
import { NavLink } from 'react-router-dom';

const SurveyProSection = () => {
    return (
        <div className="relative bg-[#5849AF] bg-opacity-80 text-white py-24 px-8">
            {/* Content */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
                {/* Text Section */}
                <div className="max-w-lg">
                    <h2 className="text-3xl font-bold mb-4">Make your best survey with Pro</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        SurveyPlanet offers many free survey tools to everyone; including unlimited surveys,
                        unlimited questions, and unlimited responses. However, SurveyPlanet Pro users enjoy
                        additional tools like exporting, branching, and non-branded surveys.
                    </p>
                    <NavLink to={"/pricing"}>
                    <button className="bg-transparent text-white border border-white flex gap-2 font-semibold px-12 py-3 rounded-md shadow-md hover:bg-[#433793] hover:border-none hover:gap-3 transition duration-300">
                        Pro features <span>→</span>
                    </button>
                    </NavLink>
                </div>
                {/* Illustration Section */}
                <div className="relative self-end">
                    <img
                        src="https://public.surveyplanet.com/images/illustrations/illustration_01a-1.png"
                        alt="Illustration"
                        className="-mb-32 -ml-12 w-80 md:w-96"
                    />
                </div>
            </div>
        </div>
    );
};

export default SurveyProSection;