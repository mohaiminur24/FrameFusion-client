import React, { useEffect, useState } from "react";
import ContainerLayout from "../../reusedComponents/ContainerLayout";
import AxiosFetch from "../../CustomHook/AxiosFetch";
import PrimaryButton from "../../reusedComponents/PrimaryButton";
import { NavLink } from "react-router-dom";

const Classes = () => {
  const [classes, setClasses] = useState(null);
  const axiosSecure = AxiosFetch();
  const loadallclasses = async () => {
    const result = await axiosSecure("/loadallapproveclasses");
    setClasses(result.data);
  };
  useEffect(() => {
    loadallclasses();
  }, []);
  return (
    <ContainerLayout>
      <h1 className="text-sm font-Inter mb-4">All classes are here:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
        {classes &&
          classes.map((cls, index) => {
            return (
              <>
                <div key={index+23} className="space-y-3 rounded-md shadow-md p-3 border">
                    <img className="w-full h-72 rounded-sm shadow-sm" src={cls?.thumbnail} alt="" />
                    <div className="text-sm font-Raleway">
                        <h1 className="font-Inter font-bold text-base text-primary mb-1">{cls?.ClassName}</h1>
                        <h1><span className="font-Inter font-semibold">Instractor Name:</span> <span>{cls?.InstractorName}</span></h1>
                        <h1><span className="font-Inter font-semibold">Total Student:</span> <span>{cls?.TotalStudent}</span></h1>
                        <h1><span className="font-Inter font-semibold">Contact:</span> <span>{cls?.instractorEmail}</span></h1>
                        <h1><span className="font-Inter font-semibold">Aviable Seats:</span> <span>{cls?.aviableseats}</span></h1>
                        <h1><span className="font-Inter font-semibold">Price:</span> <span>${cls?.price}</span></h1>
                    </div>
                    <PrimaryButton text="Now Enroll"/>
                </div>
              </>
            );
          })}
      </div>
    </ContainerLayout>
  );
};

export default Classes;
