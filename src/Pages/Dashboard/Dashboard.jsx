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
import { useState } from "react";

const Dashboard = () => {
  let [userRole] = UseAdmin();
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="relative lg:flex text-black container mx-auto">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <header className="block lg:hidden bg-gradient-to-r from-[#2f71ffbf] to-[#2F71FF] text-white px-4 py-2 font-semibold flex items-center gap-4">
        <button
          onClick={() => setDrawer(!drawer)}
          className="text-white text-xl mt-1"
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>{" "}
        Dashboard
      </header>
      {drawer && (
        <div className="absolute z-50 block lg:hidden md:w-60 shadow-lg h-screen">
          {userRole === "Surveyor" && (
            <ul
              onClick={() => setDrawer(false)}
              className="menu border-x h-screen bg-blue-400 text-white"
            >
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
            </ul>
          )}
          {userRole === "Admin" && (
            <ul
              onClick={() => setDrawer(false)}
              className="menu border-x h-screen bg-blue-400 text-white"
            >
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
            <ul
              onClick={() => setDrawer(false)}
              className="menu border-x h-screen bg-blue-400 text-white"
            >
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
            <ul
              onClick={() => setDrawer(false)}
              className="menu border-x h-screen bg-blue-400 text-white"
            >
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
      )}
      <div className="hidden lg:block w-80 h-screen">
        {userRole === "Surveyor" && (
          <ul className="menu border-x h-screen bg-blue-400 text-white">
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
          </ul>
        )}
        {userRole === "Admin" && (
          <ul className="menu border-x h-screen bg-blue-400 text-white">
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
          <ul className="menu border-x h-screen bg-blue-400 text-white">
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
          <ul className="menu border-x h-screen bg-blue-400 text-white">
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
