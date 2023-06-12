import React, { useContext, useEffect, useState } from "react";
import ContainerLayout from "../../reusedComponents/ContainerLayout";
import AxiosFetch from "../../CustomHook/AxiosFetch";
import UserRole from "../../CustomHook/UserRole";
import { AuthContext } from "../../AuthLayout/AuthancationContext";
import Swal from "sweetalert2";

const Classes = () => {
  const [classes, setClasses] = useState(null);
  const { user } = useContext(AuthContext);
  const axiosSecure = AxiosFetch();
  const [userpower] = UserRole();
  const loadallclasses = async () => {
    const result = await axiosSecure("/loadallapproveclasses");
    setClasses(result.data);
  };
  useEffect(() => {
    loadallclasses();
  }, []);

  // Manage student enroll class is here
  const manageenrollclass = async (EnrollClass) => {
    const beforeaddedclass = JSON.parse(localStorage.getItem(user.email));
    if(beforeaddedclass){
      const findclass = beforeaddedclass.find(cls=> cls._id == EnrollClass._id);
      if(findclass){
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Already saved this class!',
          showConfirmButton: false,
          timer: 1500
        });
        return;
      }
    };
    
    if(beforeaddedclass){
      const Enrolledclass = [...beforeaddedclass,{_id:EnrollClass._id,ClassName:EnrollClass.ClassName,InstractorName:EnrollClass.InstractorName,instractorEmail:EnrollClass.instractorEmail,price:EnrollClass.price,thumbnail:EnrollClass.thumbnail }];
      localStorage.setItem(user.email, JSON.stringify(Enrolledclass));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Class has been saved',
        showConfirmButton: false,
        timer: 1500
      });
    }else{
      const Enrolledclass = [{_id:EnrollClass._id,ClassName:EnrollClass.ClassName,InstractorName:EnrollClass.InstractorName,instractorEmail:EnrollClass.instractorEmail,price:EnrollClass.price,thumbnail:EnrollClass.thumbnail }]
      localStorage.setItem(user.email, JSON.stringify(Enrolledclass));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Class has been saved',
        showConfirmButton: false,
        timer: 1500
      });
    };
  };
  return (
    <ContainerLayout>
      <h1 className="text-sm font-Inter mb-4">All classes are here:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
        {classes &&
          classes.map((cls, index) => {
            return (
              <>
                <div
                  key={index + 23}
                  className={`space-y-3 rounded-md shadow-md p-3 border ${
                    parseInt(cls?.aviableseats) === 0 && "bg-red-300"
                  }`}
                >
                  <img
                    className="w-full h-72 rounded-sm shadow-sm"
                    src={cls?.thumbnail}
                    alt=""
                  />
                  <div className="text-sm font-Raleway">
                    <h1 className="font-Inter font-bold text-base text-primary mb-1">
                      {cls?.ClassName}
                    </h1>
                    <h1>
                      <span className="font-Inter font-semibold">
                        Instractor Name:
                      </span>{" "}
                      <span>{cls?.InstractorName}</span>
                    </h1>
                    <h1>
                      <span className="font-Inter font-semibold">
                        Total Student:
                      </span>{" "}
                      <span>{cls?.TotalStudent}</span>
                    </h1>
                    <h1>
                      <span className="font-Inter font-semibold">Contact:</span>{" "}
                      <span>{cls?.instractorEmail}</span>
                    </h1>
                    <h1>
                      <span className="font-Inter font-semibold">
                        Aviable Seats:
                      </span>{" "}
                      <span>{cls?.aviableseats}</span>
                    </h1>
                    <h1>
                      <span className="font-Inter font-semibold">Price:</span>{" "}
                      <span>${cls?.price}</span>
                    </h1>
                  </div>
                  <button
                    onClick={() => manageenrollclass(cls)}
                    className="px-5 py-2 bg-primary font-Inter font-bold text-white text-sm shadow-md rounded-md disabled:opacity-30"
                    disabled={
                      parseInt(cls?.aviableseats) === 0 ||
                      (userpower !== "student" && true)
                    }
                  >
                    Enroll Now
                  </button>
                </div>
              </>
            );
          })}
      </div>
    </ContainerLayout>
  );
};

export default Classes;
