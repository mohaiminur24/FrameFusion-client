import React, { useState } from "react";
import ContainerLayout from "../../reusedComponents/ContainerLayout";
import PrimaryButton from "../../reusedComponents/PrimaryButton";
import SecondaryButton from "../../reusedComponents/SecondaryButton";
import LoadInstractorClass from "../../CustomHook/LoadInstractorClass";
import AxiosFetch from "../../CustomHook/AxiosFetch";
import Swal from "sweetalert2";
import DaynamicTitle from "../../reusedComponents/DaynamicTitle";
import { Fade } from "react-awesome-reveal";

const MyClasses = () => {
  const [refetch, classes] = LoadInstractorClass();
  const axiosSecure = AxiosFetch();
  const [feedbackdata, setFeedbackData] = useState(null);
  const handleDeleteClass = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axiosSecure.delete(`/deleteclass?id=${id}`);
        refetch();
        if (result.data.deletedCount) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };

  const handlefeedback = (id)=>{
    const find = classes.find(clss=> clss._id == id);
    setFeedbackData(find); 
  };

  return (
    <>
      <ContainerLayout>
        <DaynamicTitle>Class</DaynamicTitle>
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
                            <Fade delay={1e3} cascade damping={1e-1} className="font-bold">{cls?.ClassName}</Fade>
                            <h2 className="text-xs opacity-50">
                              Email : <span>{cls.instractorEmail}</span>
                            </h2>
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
                            {cls?.Feedback && (
                              <button onClick={() => {window.my_modal_1.showModal(),handlefeedback(cls._id)}} className="text-red-500">Feedback</button>
                            )}
                          </td>
                          <td className="flex justify-start items-center gap-5">
                            <PrimaryButton
                              text="Edit"
                              direction={`../updateclass/${cls._id}`}
                            />
                            <button onClick={() => handleDeleteClass(cls._id)}>
                              <SecondaryButton text="Delete" />
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

      {/* feedback modal is here */}
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <div>
            <h1 className="text-2xl font-Inter font-bold mb-4">Feebaback about <span className="text-primary">{feedbackdata?.ClassName}</span></h1>
              <p className="text-sm text-red-500 border rounded-sm p-5">{feedbackdata?.Feedback}</p>
          </div>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default MyClasses;
