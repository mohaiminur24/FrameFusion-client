import React, { useContext, useState } from "react";
import ContainerLayout from "../../reusedComponents/ContainerLayout";
import DaynamicTitle from "../../reusedComponents/DaynamicTitle";
import Lottie from "react-lottie";
import loginLottie from "../../../assets/111594-login.json";
import {
  HiEye,
  HiEyeOff,
  HiLockClosed,
  HiOutlineMailOpen,
} from "react-icons/Hi";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../reusedComponents/SocialLogin";
import { AuthContext } from "../../AuthLayout/AuthancationContext";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [vissiblePass, setVissiblePass] = useState(false);
  const { handleLoginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //lottie file defuault function is here
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // form handle function is here
  const handleLoginForm = (data) => {
    handleLoginUser(data.email, data.password)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login user successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate(from);
      })
      .catch(() => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something went wrong!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <ContainerLayout>
      <DaynamicTitle>Login</DaynamicTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
        <div className="w-3/5 mx-auto">
          <Lottie options={defaultOptions}></Lottie>
        </div>
        <div className="px-10">
          <h1 className="text-2xl font-bold font-Inter">Login Account</h1>
          <form onSubmit={handleSubmit(handleLoginForm)} className=" mt-10">
            <div className="border-b flex items-center gap-5">
              <HiOutlineMailOpen className="opacity-50" />
              <input
                {...register("email", { required: true })}
                className="w-full text-sm outline-none px-3 py-1"
                placeholder="Enter Email Address"
                type="email"
                name="email"
                id="email"
              />
            </div>
            {errors.email?.type === "required" && (
              <p className="text-xs mt-2 text-red-500" role="alert">
                Email is required
              </p>
            )}

            <div className="border-b flex items-center gap-5 mt-5">
              <HiLockClosed />
              <input
                {...register("password", { required: true })}
                className="w-full text-sm outline-none px-3 py-1"
                placeholder="Password"
                type={vissiblePass ? "text" : "password"}
                name="password"
                id="password"
              />
              <div>
                {vissiblePass ? (
                  <span
                    className="text-red-500"
                    onClick={() => setVissiblePass(false)}
                  >
                    <HiEyeOff />
                  </span>
                ) : (
                  <span
                    className="text-green-500"
                    onClick={() => setVissiblePass(true)}
                  >
                    <HiEye />
                  </span>
                )}
              </div>
            </div>
            {errors.password?.type === "required" && (
              <p className="text-xs mt-2 text-red-500" role="alert">
                Password is required
              </p>
            )}
            <input
              className="px-8 font-Inter font-bold text-white outline-none rounded-sm shadow-md hover:bg-primaryHover disabled:opacity-50 py-2 bg-primary mt-8"
              type="submit"
              value="Login"
            />
            <div className="text-xs mt-5 font-Inter">
              I don't have an Account ?{" "}
              <NavLink to="/registration">
                <button className="text-primary hover:text-primaryHover">
                  Create an account
                </button>
              </NavLink>
            </div>
          </form>
          <SocialLogin />
        </div>
      </div>
    </ContainerLayout>
  );
};

export default LoginPage;
