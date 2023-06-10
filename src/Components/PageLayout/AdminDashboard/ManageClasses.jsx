import React, { useState } from "react";
import LoadAllClasses from "../../CustomHook/LoadAllClasses";
import PrimaryButton from "../../reusedComponents/PrimaryButton";
import SecondaryButton from "../../reusedComponents/SecondaryButton";
import ContainerLayout from "../../reusedComponents/ContainerLayout";

const ManageClasses = () => {
  const [refetch, classes] = LoadAllClasses();
  const [modaldata, setModalData] = useState(null);
  const findmodaldata = (id)=>{
    const data = classes.find(items => items._id == id);
    setModalData(data);
  }

  return (
    <>
      <ContainerLayout>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
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
                        <tr key={cls._id}>
                          <td>{index + 1}</td>
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
                            <h2 className="text-xs opacity-50">
                              Email : <span>{cls.instractorEmail}</span>
                            </h2>
                            <button
                              onClick={() => {
                                window.my_modal_1.showModal();
                                findmodaldata(cls._id);
                              }}
                              className="text-xs px-3 py-1 border rounded-md mt-2 bg-base-200"
                            >
                              Give Feedback
                            </button>
                          </td>
                          <td className="font-inter text-xs">
                            <h1 className="font-semibold">
                              Total Students:{" "}
                              <span className="font-normal">
                                {cls?.TotalStudent}
                              </span>
                            </h1>
                            <h1 className="font-semibold">
                              Aviable Seats:{" "}
                              <span className="font-normal">
                                {cls?.aviableseats}
                              </span>
                            </h1>
                            <h1 className="font-semibold">
                              Price:{" "}
                              <span className="font-normal">${cls?.price}</span>
                            </h1>
                          </td>
                          <td>
                            <h1 className="text-sm">{cls?.status}</h1>
                          </td>
                          <td className="flex justify-start items-center gap-2">
                            <button
                              disabled={!cls?.status === "Pending" && true}
                              className="px-5 disabled:opacity-30 py-2 border rounded-md"
                            >
                              Denie
                            </button>
                            <button
                              disabled={!cls?.status === "Pending" && true}
                              className="px-5 py-2 disabled:opacity-30 bg-primary text-white border rounded-md"
                            >
                              Approve
                            </button>
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

      {/* Feedback Modal from here */}
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Give Feedback</h3>
          <h1 className="text-sm font-Raleway">{modaldata?.ClassName}</h1>
          <form>
            <textarea placeholder="Give feedback about this class" className="border outline-none p-5 text-sm w-full mt-5 rounded-md" name="Feedback" id="feedback" cols="30" rows="10"></textarea>
            <input className="px-5 py-2 disabled:opacity-30 bg-primary text-white border rounded-md hover:bg-primaryHover" type="submit" value="Send Feedback" />
          </form>
          
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default ManageClasses;
