import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import AxiosFetch from "../../CustomHook/AxiosFetch";
import Swal from "sweetalert2";

const UpdateClass = () => {
  const {id} = useParams();
  const axiosSecure = AxiosFetch();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 const fetch=async()=>{
    const result =await axiosSecure(`/singleclassload?id=${id}`);
    setData(result.data)
};
useEffect(()=>{
    fetch();
},[])

const handleupdateclass = async(data) =>{
    const result = await axiosSecure.post(`/updateclassbyinstractor?id=${id}`,{data});
    console.log(result.data.matchedCount)
    if(result.data.modifiedCount){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'class update Succefully',
            showConfirmButton: false,
            timer: 1500
          })
          navigate("/Dashboard/instractorclasses")
    }else if(result.data.matchedCount && !(result.data.modifiedCount)){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No change Detacted!',
            showConfirmButton: false,
            timer: 1500
          })
    }
}


  return (
    <div className="w-6/12 mx-auto">
      <form onSubmit={handleSubmit(handleupdateclass)} className="w-full mt-5">
        <h1 className="text-2xl font-bold font-Inter mb-5">Updated Class</h1>
        <div className="w-full">
          <label className="font-inter mb-1 font-semibold">Class name</label>
          <input
            {...register("ClassName", { required: true })}
            className="w-full border-b text-sm outline-none px-3 py-1"
            defaultValue={data?.ClassName}
            type="text"
            name="ClassName"
            id="name"
          />
          {errors.ClassName?.type === "required" && (
            <p className="text-xs mt-1 text-red-500" role="alert">
              Class Name is not update
            </p>
          )}
        </div>

        <div className="mt-5">
          <label className="font-inter mb-1 font-semibold">Aviable Seats</label>
          <input
            {...register("aviableseats", { required: true })}
            className="w-full text-sm border-b outline-none px-3 py-1"
            defaultValue={data?.aviableseats}
            type="number"
            name="aviableseats"
            id="aviableseats"
          />
          {errors.aviableseats?.type === "required" && (
            <p className="text-xs mt-1 text-red-500" role="alert">
              Aviable seats is not update
            </p>
          )}
        </div>
        <div className="mt-5">
          <label className="font-inter mb-1 font-semibold">Price</label>
          <input
            {...register("price", { required: true })}
            className="w-full text-sm border-b outline-none px-3 py-1"
            defaultValue={data?.price}
            type="text"
            name="price"
            id="price"
          />
          {errors.price?.type === "required" && (
            <p className="text-xs mt-1 text-red-500" role="alert">
              price is not update
            </p>
          )}
        </div>
        <div className="mt-5">
          <label className="font-inter mb-1 font-semibold">Thumbnail</label>
          <input
            {...register("thumbnail", { required: true })}
            defaultValue={data?.thumbnail}
            className="w-full text-sm border-b outline-none px-3 py-1"
            type="text"
            name="thumbnail"
            id="thumbnail"
          />
          {errors.thumbnail?.type === "required" && (
            <p className="text-xs mt-1 text-red-500" role="alert">
              Thumbnail is not update
            </p>
          )}
        </div>
        <input
          className="w-full mt-5 font-Inter bg-primary py-2 font-bold text-white rounded-md"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default UpdateClass;
