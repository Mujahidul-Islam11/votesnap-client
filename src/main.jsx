import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root/Root.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import Login from "./Pages/Login/Login.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import ParticipationHistory from "./Pages/Dashboard/ParticipationHistory/ParticipationHistory.jsx";
import UserManagment from "./Pages/Dashboard/UserManagment/UserManagment.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SurveyManagment from "./Pages/Dashboard/SurveyManagement/SurveyManagment.jsx";
import CreateSurvey from "./Pages/Dashboard/CreateSurvey/CreateSurvey.jsx";
import ManageSurveys from "./Pages/Dashboard/ManageSurveys/ManageSurveys.jsx";
import AdminFeedBack from "./Pages/Dashboard/AdminFeedBack/AdminFeedBack.jsx";
import SurveyDetails from "./Pages/Dashboard/SurveyDetails/SurveyDetails.jsx";
import PrivateRoute from "./Pages/PrivateRoutes/PrivateRoute.jsx"
import AdminPrivateRoute from "./Pages/PrivateRoutes/AdminPrivateRoute.jsx";
import SurveyorPrivateRoute from "./Pages/PrivateRoutes/SurveyorPrivateRoute.jsx";
import UserProfile from "./Pages/Dashboard/UserProfile/UserProfile.jsx";
import Edit from "./Pages/Dashboard/Edit/Edit.jsx";
import PricingCard from "./Pages/Pricing/PricingCard.jsx";
import Payment from "./Pages/Payment/Payment.jsx";
import PaymentHistory from "./Pages/Dashboard/PaymentHistory/PaymentHistory.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import SurveyResponse from "./Pages/Dashboard/SurveyResponse/SurveyResponse.jsx";
import Analytics from "./Pages/Dashboard/Analytics/Analytics.jsx";
import UserFeedBack from "./Pages/Dashboard/UserFeedBack/UserFeedBack.jsx";
import Surveys from "./Pages/Surveys/Surveys.jsx";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/SignUp",
        element: <SignUp/>,
      },
      {
        path: "/Login",
        element: <Login/>,
      },
      {
        path: "/contactUs",
        element: <ContactUs/>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs/>,
      },
      {
        path: "/surveys",
        element: <Surveys/>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><SurveyDetails/></PrivateRoute>
      },
      {
        path: "/pricing",
        element: <PrivateRoute><PricingCard/></PrivateRoute>
      },
      {
        path: "/payment",
        element: <PrivateRoute><Payment/></PrivateRoute>
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "mostVotedSurveys",
        element: <ParticipationHistory></ParticipationHistory>,
      },
      {
        path: "userManagement",
        element: <AdminPrivateRoute><UserManagment></UserManagment></AdminPrivateRoute>,
      },
      {
        path: "surveyManagement",
        element: <AdminPrivateRoute><SurveyManagment></SurveyManagment></AdminPrivateRoute>,
      },
      {
        path: "paymentOverview",
        element: <AdminPrivateRoute><PaymentHistory></PaymentHistory></AdminPrivateRoute>,
      },
      {
        path: "analytics",
        element: <AdminPrivateRoute><Analytics></Analytics></AdminPrivateRoute>,
      },
      {
        path: "createSurvey",
        element: <SurveyorPrivateRoute><CreateSurvey></CreateSurvey></SurveyorPrivateRoute>,
      },
      {
        path: "manageSurveys",
        element: <SurveyorPrivateRoute><ManageSurveys></ManageSurveys></SurveyorPrivateRoute>,
      },
      {
        path: "userFeedback",
        element: <SurveyorPrivateRoute><UserFeedBack></UserFeedBack></SurveyorPrivateRoute>,
      },
      {
        path: "adminFeedback",
        element: <SurveyorPrivateRoute><AdminFeedBack></AdminFeedBack></SurveyorPrivateRoute>,
      },
      {
        path: "surveyResponse",
        element: <SurveyorPrivateRoute><SurveyResponse></SurveyResponse></SurveyorPrivateRoute>,
      },
      {
        path: "edit/:id",
        element: <SurveyorPrivateRoute><Edit></Edit></SurveyorPrivateRoute>,
      },
      {
        path: "profile",
        element: <UserProfile></UserProfile>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div>
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
