import React, { useContext } from "react";
import ContainerLayout from "../../reusedComponents/ContainerLayout";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthLayout/AuthancationContext";

const AddNewClass = () => {
    const {user} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const CreateNewClass = (data) => {
    console.log(data);
  };

  return (
    <ContainerLayout>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img
          className="w-4/5 mx-auto"
          src="https://petapixel.com/assets/uploads/2023/04/illustration-of-a-woman-learning-photography.png"
          alt=""
        />
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
            </div>
            <div className="mt-5">
              <label className="font-inter font-semibold mb-1">Thumbnail</label>
              <input
                {...register("thumbnail", { required: true })}
                className="w-full text-sm outline-none px-3 py-1"
                type="file"
                name="thumbnail"
                id="thumbnail"
              />
            </div>
            <input className="w-full mt-5 font-Inter bg-primary py-2 font-bold text-white rounded-md" type="submit" value="Create New Class" />
          </form>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default AddNewClass;
