import React from "react";
import ContainerLayout from "../../reusedComponents/ContainerLayout";
import SliderLayout from "./Layout/SliderLayout";
import { Container } from "postcss";
import PopularClass from "./Layout/PopularClass";
import PopularInstructors from "./Layout/PopularInstructors";

const HomePage = () => {
  return (
    <div>
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
    </div>
  );
};

export default HomePage;
