import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../AuthLayout/AuthancationContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { createuserbygoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handlegoogleLogin = () => {
    createuserbygoogle()
      .then((res) => {
        const user = res.user;
        const newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          phone: user.phoneNumber,
          address: "",
          gender: "",
          role: "student",
        };
        fetch("http://localhost:5000/createnewuserbygoogle", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.avilable) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Login user Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from);
            } else if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Create New user Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from);
            };
          });
      })
      .catch(() => {
        Swal.fire(
          "Something Wrong?",
          "Something went Wrong try again!",
          "question"
        );
      });
  };
  return (
    <div className="mt-5 w-full md:w-3/5">
      <div className="flex justify-center items-center gap-5">
        <hr className="w-full" />
        or
        <hr className="w-full" />
      </div>
      <button
        onClick={handlegoogleLogin}
        className="flex justify-center gap-3 items-center mt-3 border px-5 py-2 rounded-full"
      >
        <FcGoogle className="text-2xl" />{" "}
        <span className="text-sm">Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
