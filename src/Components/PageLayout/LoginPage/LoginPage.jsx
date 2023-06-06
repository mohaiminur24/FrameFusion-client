import React, { useState } from "react";
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

const LoginPage = () => {
  const [vissiblePass, setVissiblePass] = useState(false);

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
  const handleLoginForm = event =>{
    event.preventDefault();
  }

  return (
    <ContainerLayout>
      <DaynamicTitle>Login</DaynamicTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
        <div className="w-3/5 mx-auto">
          <Lottie options={defaultOptions}></Lottie>
        </div>
        <div className="px-10">
          <h1 className="text-2xl font-bold font-Inter">Login Account</h1>
          <form onSubmit={handleLoginForm} className=" mt-10">
            <div className="border-b flex items-center gap-5">
              <HiOutlineMailOpen className="opacity-50" />
              <input
                className="w-full text-sm outline-none px-3 py-1"
                placeholder="Enter Email Address"
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div className="border-b flex items-center gap-5 mt-5">
              <HiLockClosed />
              <input
                className="w-full text-sm outline-none px-3 py-1"
                placeholder="Password"
                type={vissiblePass ? "text" : "password"}
                name="password"
                id="password"
              />
              <div>
                {vissiblePass ? (
                  <button className="text-red-500" onClick={() => setVissiblePass(false)}>
                    <HiEyeOff />
                  </button>
                ) : (
                  <button className="text-green-500" onClick={() => setVissiblePass(true)}>
                    <HiEye />
                  </button>
                )}
              </div>
            </div>
            <input className="px-8 font-Inter font-bold text-white outline-none rounded-sm shadow-md hover:bg-primaryHover disabled:opacity-50 py-2 bg-primary mt-8" type="submit" value="Login" />
          </form>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default LoginPage;
