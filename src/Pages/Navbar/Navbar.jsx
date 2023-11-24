import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links =(
        <>
        <li><NavLink to={'/'}><a>Home</a></NavLink></li>
        <li><NavLink to={'/surveys'}><a>Surveys</a></NavLink></li>
        <li><NavLink to={'/createSurvey'}><a>Create Survey</a></NavLink></li>
        <li><NavLink to={'/pricing'}><a>Pricing</a></NavLink></li>
        </>
    )
    return (
        <div className="navbar bg-[#E4CDFB]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            links
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
{
    links
}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;