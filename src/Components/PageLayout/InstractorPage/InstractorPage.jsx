import React, { useEffect, useState } from "react";
import ContainerLayout from "../../reusedComponents/ContainerLayout";
import DaynamicTitle from "../../reusedComponents/DaynamicTitle";
import SecondaryButton from "../../reusedComponents/SecondaryButton";
import LoadingPage from "../../reusedComponents/LoadingPage";

const InstractorPage = () => {
  const [instractors, setInstractors] = useState(null);
  const [loadininstractor, setLoadinInstractor] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/allinstractor")
      .then((res) => res.json())
      .then((data) => {
        setInstractors(data);
        setLoadinInstractor(false);
      });
  }, []);

  if (loadininstractor) {
    return <LoadingPage />;
  }

  return (
    <ContainerLayout>
      <DaynamicTitle>Instractor</DaynamicTitle>
      <h1 className="font-Raleway font-bold">All instractor is here:</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-4 xl:grid-cols-5 mt-5">
        {instractors &&
          instractors.map((instractor,index) => {
            return (
              <div key={index} className="border p-5 rounded-md shadow-md space-y-2 font-Raleway">
                <img className="w-full h-72" src={instractor.photo} alt="" />
                <div>
                  <h1 className="font-Inter font-semibold">
                    {instractor.name}
                  </h1>
                  <h2 className="text-sm">Email: {instractor.email}</h2>
                  <p className="text-xs font-Cinzel opacity-50">
                    {instractor.address}
                  </p>
                </div>
                <SecondaryButton text="View Classes" />
              </div>
            );
          })}
      </div>
    </ContainerLayout>
  );
};

export default InstractorPage;
