import React from "react";
import { NavLink } from "react-router-dom";

const SecondaryButton = ({ text, direction }) => {
  return (
    <NavLink to={direction}>
      <button className="px-5 py-2 text-sm border rounded-md text-black shadow-sm hover:bg-base-200 mt-2">
        {text}
      </button>
    </NavLink>
  );
};

export default SecondaryButton;
