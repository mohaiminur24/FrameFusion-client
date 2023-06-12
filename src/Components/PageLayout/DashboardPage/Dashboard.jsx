import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome, AiOutlineHistory, AiTwotoneBank, AiTwotonePushpin } from "react-icons/ai";
import UserRole from "../../CustomHook/UserRole";

const Dashboard = () => {
  const [userpower] = UserRole();

  const instractorNavLink = (
    <div className="space-y-1">
      <li>
        <NavLink to="/" className="flex justify-start gap-5 items-center"><AiFillHome className="text-lg" /><button>Home</button></NavLink>
      </li>
      <li>
        <NavLink to="instractorclasses" className={({isActive})=> isActive && "text-primary"} ><span className="flex justify-start gap-5 items-center"><AiTwotoneBank className="text-lg"/><button>My Classes</button></span></NavLink>
      </li>
      <li>
        <NavLink to="addnewclass" className={({isActive})=> isActive && "text-primary"}><span className="flex justify-start gap-5 items-center"><AiTwotonePushpin className="text-lg"/><button>Add New Class</button></span></NavLink>
      </li>
    </div>
  );
  const AdminNavLink = (
    <div>
      <li>
        <NavLink to="/" className="flex justify-start gap-5 items-center"><AiFillHome className="text-lg" /><button>Home</button></NavLink>
      </li>
      <li>
        <NavLink to="manageclasses" className={({isActive})=> isActive && "text-primary"} ><span className="flex justify-start gap-5 items-center"><AiTwotoneBank className="text-lg"/><button>Manage Classes</button></span></NavLink>
      </li>
      <li>
        <NavLink to="manageusers" className={({isActive})=> isActive && "text-primary"}><span className="flex justify-start gap-5 items-center"><AiTwotonePushpin className="text-lg"/><button>Manage User</button></span></NavLink>
      </li>
    </div>
  );
  const StudentNavLink = (
    <div>
      <li>
        <NavLink to="/" className="flex justify-start gap-5 items-center"><AiFillHome className="text-lg" /><button>Home</button></NavLink>
      </li>
      <li>
        <NavLink to="myselectclass" className={({isActive})=> isActive && "text-primary"} ><span className="flex justify-start gap-5 items-center"><AiTwotoneBank className="text-lg"/><button>Enroll Classes</button></span></NavLink>
      </li>
      <li>
        <NavLink to="manageusers" className={({isActive})=> isActive && "text-primary"}><span className="flex justify-start gap-5 items-center"><AiOutlineHistory className="text-lg"/><button>Payment History</button></span></NavLink>
      </li>
    </div>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet/>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className=" font-Inter font-semibold text-sm p-10 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="mb-5">
            <h1 className="text-2xl font-bold">Frame <span className="text-primary">Fusion</span></h1>
            <p className="font-normal text-xs">{userpower}</p>
          </div>
          {userpower === "admin" ? AdminNavLink : userpower === 'instractor' ? instractorNavLink : StudentNavLink}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
