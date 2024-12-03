import React from 'react';
import AxiosSecure from '../../../Hooks/AxiosSecure/AxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ComponentTitle from '../../../UI/ComponentTitle';
import SurveysCard from '../../Dashboard/SurveysCard/SurveysCard';
import { NavLink } from 'react-router-dom';

const PopularSurveys = () => {
    const axiosSecure = AxiosSecure();

  const { data: published = [], refetch } = useQuery({
    queryKey: ["published"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/surveyor`);
      return res.data;
    },
  });

    return (
        <div className="my-7 md:my-14 max-w-7xl mx-auto md:px-12">
        <ComponentTitle titleFirst={"Popular "} titleLast={"Surveys"} desc={"Explore the latest surveys"} />
        <div className="grid md:grid-cols-3 my-10 gap-6 px-4 md:gap-6">
          {published?.slice(0, 3).map((sur) => (
            <SurveysCard
              key={sur._id}
              survey={sur}
              refetch={refetch}
            />
          ))}
        </div>
        <NavLink to={'/surveys'}>
          <button className="btn btn-primary bg-[#2F71FF] text-white border-none hover:bg-[#2f71ffbf] my-2 md:my-4 mx-auto flex justify-center shadow-lg">
            Explore More
          </button>
        </NavLink>
      </div>
    );
};

export default PopularSurveys;