import React from "react";
import ContainerLayout from "../../reusedComponents/ContainerLayout";
import SliderLayout from "./Layout/SliderLayout";
import { Container } from "postcss";
import PopularClass from "./Layout/PopularClass";
import PopularInstructors from "./Layout/PopularInstructors";
import DaynamicTitle from "../../reusedComponents/DaynamicTitle";
import Contactus from "./Layout/Contactus";

const HomePage = () => {
  return (
    <div>
      <DaynamicTitle>Home</DaynamicTitle>
      {/* Slider section from here */}
      <ContainerLayout>
        <SliderLayout />
      </ContainerLayout>
      {/* Popular class section from here */}
      <ContainerLayout>
        <PopularClass />
      </ContainerLayout>
      {/* Popular Instructors section from here */}
      <ContainerLayout>
        <PopularInstructors/>
      </ContainerLayout>
      {/* contact us section from here */}
      <ContainerLayout>
        <Contactus/>
      </ContainerLayout>
    </div>
  );
};

export default HomePage;
