import React from "react";
import ContainerLayout from "../../reusedComponents/ContainerLayout";
import PrimaryButton from "../../reusedComponents/PrimaryButton";
import SecondaryButton from "../../reusedComponents/SecondaryButton";
import { useContext } from "react";
import { AuthContext } from "../../AuthLayout/AuthancationContext";
import LoadInstractorClass from "../../CustomHook/LoadInstractorClass";

const MyClasses = () => {
  const [refetch, classes] = LoadInstractorClass();

  const handleDeleteClass = (id) =>{
      console.log(id);
  }

  return (
    <ContainerLayout>
      <div className="mt-5">
        <div className="overflow-x-auto">
          <table className="table font-Raleway">
            {/* head */}
            <thead className="font-inter">
              <tr>
                <th>Index</th>
                <th>Image</th>
                <th>Name</th>
                <th>Details</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {classes &&
                classes.map((cls, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={cls?.thumbnail} />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h1 className="font-bold">{cls?.ClassName}</h1>
                          <h2 className="text-xs opacity-50">Email : <span>{cls.instractorEmail}</span></h2>
                        </td>
                        <td className="font-inter text-xs">
                          <h1 className="font-semibold">Total Students: <span className="font-normal">{cls?.TotalStudent}</span></h1>
                          <h1 className="font-semibold">Aviable Seats: <span className="font-normal">{cls?.aviableseats}</span></h1>
                          <h1 className="font-semibold">Price: <span className="font-normal">${cls?.price}</span></h1>
                          
                        </td>
                        <td>
                          <h1 className="text-sm">{cls?.status}</h1>
                          {cls?.Feedback && <button className="text-red-500">Feedback</button>}
                          
                        </td>
                        <td className="flex justify-start items-center gap-5">
                          <PrimaryButton text="Edit" />
                          <button onClick={()=>handleDeleteClass(cls._id)}><SecondaryButton text="Delete" /></button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default MyClasses;
