import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthConext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";
// import UseAdmin from "../Dashboard/UseAdmin/UseAdmin";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthConext);
  // const [userRole] = UseAdmin()

  const handleLogOut = () => {
    LogOut().then().catch();
    swal("Good Job", "Successfully logged out", "success");
  };
  const links = (
    <>
      <li className="ml-2">
        <NavLink to={"/"}>
          <a>Home</a>
        </NavLink>
      </li>
      {
        user && <li className="ml-2">
        <NavLink to={"/surveys"}>
          <a>Surveys</a>
        </NavLink>
      </li>
      }
      <li className="ml-2">
        <NavLink to={"/contactUs"}>
          <a>Contact Us</a>
        </NavLink>
      </li>
      {!user && <li className="ml-2">
        <NavLink to={"/aboutUs"}>
          <a>About Us</a>
        </NavLink>
      </li>}
      {
        user &&
        <li className="ml-2">
        <NavLink to={"/pricing"}>
          <a>Pricing</a>
        </NavLink>
      </li>
      }
      {user &&
        <li className="ml-2">
          <NavLink to={'/dashboard/profile'}>
            <a>Dashboard</a>
          </NavLink>
        </li>
      }
    </>
  );
  return (
    <div className="navbar text-gray-900 container mx-auto max-w-screen-xl">
      <div className="navbar-start py-2">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <NavLink to={"/"}>
          <div className="text-xl flex items-center cursor-pointer">
              <img
                src="https://i.postimg.cc/CLhjNvgJ/676-removebg-preview.png"
                alt=""
                className="w-28 h-20"
              />{" "}
          </div>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div className="flex items-center gap-3">
              <h2 className="font-semibold hidden md:flex">{user?.displayName}</h2>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </label>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
              >
                <li>
                <h2 className="font-bold block md:hidden">{user?.displayName}</h2>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <NavLink to={"/Login"}>
            <button className="btn  hover:bg-[#8BE8E5] hover:text-white">Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
