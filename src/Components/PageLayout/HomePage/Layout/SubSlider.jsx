import React from "react";
import SectionTitle from "../../../reusedComponents/SectionTitle";

const SubSlider = () => {
  return (
    <div>
      <SectionTitle title="Instagram" />
      <div className="grid grid-cols-5">
        <img
          src="https://images.pexels.com/photos/3119709/pexels-photo-3119709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/3016462/pexels-photo-3016462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/3756684/pexels-photo-3756684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/3290060/pexels-photo-3290060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/3136340/pexels-photo-3136340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default SubSlider;
