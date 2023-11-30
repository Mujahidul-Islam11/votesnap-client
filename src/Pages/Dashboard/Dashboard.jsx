import {
  FaChartBar,
  FaHome,
  FaListUl,
  FaMoneyBill,
  FaUserCircle,
  FaEdit,
  FaComments,
  FaExclamationCircle,
  FaUser,
} from "react-icons/fa";
import { MdSettings } from 'react-icons/md';
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "./UseAdmin/UseAdmin";
import { useContext } from "react";
import { AuthConext } from "../../AuthProvider/AuthProvider";

const Dashboard = () => {
  let [userRole] = UseAdmin();
  const {user} = useContext(AuthConext)

  return (
    <div className="flex border container mx-auto">
      <div className="w-64 min-h-screen bg-gradient-to-b from-[#E4CDFB] via-[#E4CDFB] to-[#D1BDF6]">
        <ul className="menu">
          {userRole === "Surveyor" && (
            <>
              <li>
                <NavLink to={"/dashboard/createSurvey"}>
                  <FaEdit></FaEdit>
                  Create Survey
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/adminFeeback"}>
                  <FaExclamationCircle></FaExclamationCircle>
                  Admin Feedback
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/userFeedback"}>
                  <FaComments></FaComments>
                  User Feedback
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/surveyResponse"}>
                  <FaChartBar></FaChartBar>
                  Survey Response
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageSurveys"}>
                  <MdSettings></MdSettings>
                  Manage Surveys
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to={"/dashboard/profile"}>
                  <FaUser></FaUser>
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"}>
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <ul className="menu">
          {userRole === "Admin" && (
            <>
              <li>
                <NavLink to={"/dashboard/userManagement"}>
                  <FaUserCircle></FaUserCircle>
                  User Management
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/surveyManagement"}>
                  <FaListUl></FaListUl>
                  Survey Management
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/paymentOverview"}>
                  <FaMoneyBill></FaMoneyBill>
                  Payment Overview
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/analytics"}>
                  <FaChartBar></FaChartBar>
                  Analytics
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to={"/"}>
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/profile"}>
                  <FaUser></FaUser>
                  Profile
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <ul className="menu">
          {user=== 'User' && (
            <>
              <li>
                <NavLink to={"/"}>
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/profile"}>
                  <FaUser></FaUser>
                  Profile
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
