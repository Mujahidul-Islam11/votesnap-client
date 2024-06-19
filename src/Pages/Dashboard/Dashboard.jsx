import {
  FaChartBar,
  FaHome,
  FaListUl,
  FaMoneyBill,
  FaUserCircle,
  FaEdit,
  FaExclamationCircle,
  FaUser,
} from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "./UseAdmin/UseAdmin";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  let [userRole] = UseAdmin();

  return (
    <div className="flex text-black container mx-auto">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="w-80 h-screen">
      {userRole === "Surveyor" && (   <ul className="menu border-x h-screen bg-blue-300">
          
            <>
              <li className="text-lg">
                <NavLink to={"/dashboard/createSurvey"}>
                  <FaEdit></FaEdit>
                  Create Survey
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to={"/dashboard/adminFeeback"}>
                  <FaExclamationCircle></FaExclamationCircle>
                  Admin Feedback
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to={"/dashboard/userFeedback"}>
                  <FaExclamationCircle></FaExclamationCircle>
                  User Feedback
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to={"/dashboard/surveyResponse"}>
                  <FaChartBar></FaChartBar>
                  Survey Response
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to={"/dashboard/manageSurveys"}>
                  <MdSettings></MdSettings>
                  Manage Surveys
                </NavLink>
              </li>
              <div className="divider"></div>
              <li className="text-lg">
                <NavLink to={"/dashboard/profile"}>
                  <FaUser></FaUser>
                  Profile
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to={"/"}>
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
            </>
          
        </ul>)}
        {userRole === "Admin" && ( <ul className="menu border-x h-screen bg-blue-300">
          
            <>
              <li className="text-lg">
                <NavLink to={"/dashboard/userManagement"}>
                  <FaUserCircle></FaUserCircle>
                  User Management
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to={"/dashboard/surveyManagement"}>
                  <FaListUl></FaListUl>
                  Survey Management
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to={"/dashboard/paymentOverview"}>
                  <FaMoneyBill></FaMoneyBill>
                  Payment Overview
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to={"/dashboard/analytics"}>
                  <FaChartBar></FaChartBar>
                  Analytics
                </NavLink>
              </li>
              <div className="divider"></div>
              <li className="text-lg">
                <NavLink to={"/"}>
                  <FaHome></FaHome>
                  Home 
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to={"/dashboard/profile"}>
                  <FaUser></FaUser>
                  Profile
                </NavLink>
              </li>
            </>
        </ul>
          )}
          {userRole === "User" && (
        <ul className="menu border-x h-screen bg-blue-300">
            <>
              <li className="text-lg">
                <NavLink to={"/"}>
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to={"/dashboard/profile"}>
                  <FaUser></FaUser>
                  Profile
                </NavLink>
              </li>
            </>
        </ul>
          )}
          {userRole === "Pro User" && (
        <ul className="menu border-x h-screen bg-blue-300">
            <>
              <li className="text-lg">
                <NavLink to={"/"}>
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
              <li className="text-lg">
                <NavLink to={"/dashboard/profile"}>
                  <FaUser></FaUser>
                  Profile
                </NavLink>
              </li>
            </>
        </ul>
          )}
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
