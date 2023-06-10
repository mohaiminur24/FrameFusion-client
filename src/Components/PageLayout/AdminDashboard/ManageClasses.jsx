import React, { useState } from "react";
import LoadAllClasses from "../../CustomHook/LoadAllClasses";
import { useForm } from "react-hook-form";
import ContainerLayout from "../../reusedComponents/ContainerLayout";
import Swal from "sweetalert2";
import AxiosFetch from "../../CustomHook/AxiosFetch";
import { ImCross } from "react-icons/im";

const ManageClasses = () => {
  const [refetch, classes] = LoadAllClasses();
  const [modaldata, setModalData] = useState(null);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosSecure = AxiosFetch();
  const findmodaldata = (id) => {
    const data = classes.find((items) => items._id == id);
    setModalData(data);
  };

  // handle class denied fuction is here
  const handleclassstatusdenie = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make it denied!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axiosSecure.post("/changeclassstatus", {
          status: "denied",
          id,
        });
        if (result.data.modifiedCount) {
          Swal.fire("denied!", "Your class has been denied.", "success");
          refetch();
        }
      }
    });
  };

  // handle class approve functin is here
  const handleclassstatusapprove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make it Approve!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axiosSecure.post("/changeclassstatus", {
          status: "Approve",
          id,
        });
        if (result.data.modifiedCount) {
          Swal.fire("Approve!", "Your Class has been Approve.", "success");
          refetch();
        }
      }
    });
  };

  // handle give feedback funtion is here
  const handlegivefeedback = async (data) => {
    const result = await axiosSecure.post(
      `/setfeedbackadmin?Feedback=${data.Feedback}&id=${modaldata._id}`
    );
    if (result.data.modifiedCount) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Feedback has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      refetch();
    }
  };

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
                            {cls?.Feedback && (
                              <button className="text-red-500">Feedback</button>
                            )}
                          </td>
                          <td className="flex justify-start items-center gap-2">
                            <button
                              onClick={() => handleclassstatusdenie(cls._id)}
                              disabled={cls?.status !== "Pending" && true}
                              className="px-5 disabled:opacity-30 py-2 border rounded-md"
                            >
                              Denie
                            </button>
                            <button
                              onClick={() => handleclassstatusapprove(cls._id)}
                              disabled={cls?.status !== "Pending" && true}
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
          <form onClick={handleSubmit(handlegivefeedback)}>
            <textarea
              {...register("Feedback", { required: true })}
              placeholder="Give feedback about this class"
              className="border outline-none p-5 text-sm w-full mt-5 rounded-md"
              name="Feedback"
              id="feedback"
              cols="30"
              rows="5"
            ></textarea>
            {errors.Feedback?.type === "required" && (
              <p className="my-2 text-xs text-red-500" role="alert">
                Feedback is required
              </p>
            )}
            <input
              className="px-5 py-2 mt-2 disabled:opacity-30 bg-primary text-white border rounded-md hover:bg-primaryHover"
              type="submit"
              value="Send Feedback"
            />
          </form>

          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button
              style={{
                height: "auto",
                background: "transparent",
                borderRadius: "50%",
                position: "absolute",
                top: 5,
                right: 5,
                border: "none",
              }}
              className="btn text-red-500"
            >
              <ImCross />
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default ManageClasses;
