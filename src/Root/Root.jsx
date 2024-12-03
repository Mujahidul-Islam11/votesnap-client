import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-24 md:pt-28">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
