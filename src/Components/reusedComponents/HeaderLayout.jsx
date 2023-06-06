import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthLayout/AuthancationContext";
import DaynamicTitle from "./DaynamicTitle";
import PrimaryButton from "./PrimaryButton";

const HeaderLayout = () => {
  const { user } = useContext(AuthContext);

  const navmenu = (
    <>
      <li>
        <NavLink to="/" className={({isActive})=> isActive && 'text-primary'}>
          <button>Home</button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/instructors" className={({isActive})=> isActive && 'text-primary'}>
          <button>Instructors</button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/classes" className={({isActive})=> isActive && 'text-primary'}>
          <button>Classes</button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className={({isActive})=> isActive && 'text-primary'}>
          <button>Dashboard</button>
        </NavLink>
      </li>
      <li className="ml-10">
        <PrimaryButton text="Login" direction="/loginPage" />
      </li>
    </>
  );

  return (
    <div className="shadow-sm bg-base-100 z-40">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start font-Raleway">
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
              className="menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-40 bg-opacity-70"
            >
              {navmenu}
            </ul>
          </div>
          <h1 className="font-Inter font-bold">Frame<span className="text-primary">Fusion</span></h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal flex justify-center items-center gap-5 font-semibold text-sm">
            {navmenu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
