import React, { useContext } from "react";
import ContainerLayout from "../../reusedComponents/ContainerLayout";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthLayout/AuthancationContext";
import Swal from "sweetalert2";

const AddNewClass = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const CreateNewClass = (data) => {
    const newClass = { ...data, status: "Pending", TotalStudent:0, Feedback: '',enrollstudent: [] };
    fetch("http://localhost:5000/createnewclass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Create new class successfully!',
                showConfirmButton: false,
                timer: 1500
              });
              reset();
        }
      });
  };

  return (
    <ContainerLayout>
      <div >
        <div className="p-10">
          <h1 className="text-2xl font-bold font-Inter">Create New Class</h1>
          <form onSubmit={handleSubmit(CreateNewClass)} className="mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input
                  {...register("ClassName", { required: true })}
                  className="w-full border-b text-sm outline-none px-3 py-1"
                  placeholder="Class Name"
                  type="text"
                  name="ClassName"
                  id="name"
                />
                {errors.ClassName?.type === "required" && (
                  <p className="text-xs mt-1 text-red-500" role="alert">
                    Class Name is required
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("InstractorName", { required: true })}
                  className="w-full text-sm border-b outline-none px-3 py-1"
                  value={user?.displayName}
                  type="text"
                  name="InstractorName"
                  id="InstractorName"
                />
                {errors.InstractorName?.type === "required" && (
                  <p className="text-xs mt-1 text-red-500" role="alert">
                    Instractor Name is required
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <div>
                <input
                  {...register("instractorEmail", { required: true })}
                  className="w-full border-b text-sm outline-none px-3 py-1"
                  value={user?.email}
                  type="email"
                  name="instractorEmail"
                  id="InstractorEmail"
                />
                {errors.instractorEmail?.type === "required" && (
                  <p className="text-xs mt-1 text-red-500" role="alert">
                    Instractor Email is required
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("aviableseats", { required: true })}
                  className="w-full text-sm border-b outline-none px-3 py-1"
                  placeholder="Aviable Seats"
                  type="number"
                  name="aviableseats"
                  id="aviableseats"
                />
                {errors.aviableseats?.type === "required" && (
                  <p className="text-xs mt-1 text-red-500" role="alert">
                    Aviable seats is required
                  </p>
                )}
              </div>
            </div>
            <div className="mt-5">
              <input
                {...register("price", { required: true })}
                className="w-full text-sm border-b outline-none px-3 py-1"
                placeholder="price"
                type="text"
                name="price"
                id="price"
              />
              {errors.price?.type === "required" && (
                <p className="text-xs mt-1 text-red-500" role="alert">
                  price is required
                </p>
              )}
            </div>
            <div className="mt-5">
              <input
                {...register("thumbnail", { required: true })}
                placeholder="Thumbnail URL"
                className="w-full text-sm border-b outline-none px-3 py-1"
                type="text"
                name="thumbnail"
                id="thumbnail"
              />
              {errors.thumbnail?.type === "required" && (
                <p className="text-xs mt-1 text-red-500" role="alert">
                  Thumbnail is required
                </p>
              )}
            </div>
            <input
              className="w-full mt-5 font-Inter bg-primary py-2 font-bold text-white rounded-md"
              type="submit"
              value="Create New Class"
            />
          </form>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default AddNewClass;
