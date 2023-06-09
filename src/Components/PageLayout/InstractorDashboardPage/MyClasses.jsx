import React from "react";
import ContainerLayout from "../../reusedComponents/ContainerLayout";
import PrimaryButton from "../../reusedComponents/PrimaryButton";
import SecondaryButton from "../../reusedComponents/SecondaryButton";
import { NavLink } from "react-router-dom";

const MyClasses = () => {
  return (
    <ContainerLayout>
      <div className="mt-5">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="">
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
              <tr>
                <td>1</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-2@56w.png" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h1>Name is here</h1>
                </td>
                <td>
                  <h1>Aviable Seats: 30</h1>
                  <h1>Price : 495</h1>
                </td>
                <td>
                  <h1>Pending</h1>
                </td>
                <td className="flex justify-start items-center gap-5">
                  <PrimaryButton text="Edit" />
                  <SecondaryButton text="Delete" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default MyClasses;
