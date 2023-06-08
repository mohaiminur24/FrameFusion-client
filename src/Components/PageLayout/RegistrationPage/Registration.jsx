import React, { useContext, useState } from "react";
import ContainerLayout from "../../reusedComponents/ContainerLayout";
import DaynamicTitle from "../../reusedComponents/DaynamicTitle";
import Lottie from "react-lottie";
import loginLottie from "../../../assets/93385-login.json";
import {
  HiEye,
  HiEyeOff,
  HiLockClosed,
  HiOutlineLocationMarker,
  HiOutlineMailOpen,
  HiPhone,
  HiPhotograph,
  HiUserCircle,
} from "react-icons/Hi";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import SocialLogin from "../../reusedComponents/SocialLogin";
import { AuthContext } from "../../AuthLayout/AuthancationContext";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const [vissiblePass, setVissiblePass] = useState(false);
  const { CreateNewUser } = useContext(AuthContext);
  const [disabledButton, setDisabledButton] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  

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
  const handleRegistrationForm = (data) => {

    
    setErrorMessage(null);
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if(data.password.length < 6){
      setErrorMessage("Password must have more then 6 letter");
      return;
    }else if(!isContainsUppercase.test(data.password)){
      setErrorMessage('Password must have a Capital letter');
      return;
    }else if((!isContainsSymbol.test(data.password))){
      setErrorMessage('Password must have a special caracter');
      return;
    };


    if (data.password !== data.confrimpassword) {
      Swal.fire(
        "Password Issue",
        "Your Password Not Matching with Confrim Password!",
        "question"
      );
      setErrorPass(true);
      return;
    } else {
      setErrorPass(false);
    }
    setDisabledButton(true);
    CreateNewUser(data.email, data.password).then((res) => {
      const user = res.user;
      updateProfile(user, {
        displayName: data.name,
        photoURL: data.photo,
      }).then(() => {
        const newUser = { name: data.name, email: data.email, photo: data.photo, phone: data.phone,address: data.address, gender: data.Gender, role: "student" };
        fetch("http://localhost:5000/createnewuser", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Account Create successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
              setDisabledButton(false);
            }
          });
      });
    });
  };

  return (
    <ContainerLayout>
      <DaynamicTitle>Registration</DaynamicTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
        <div className="w-3/5 mx-auto">
          <Lottie options={defaultOptions}></Lottie>
        </div>
        <div className="p-10">
          <h1 className="text-2xl font-bold font-Inter">Create Account</h1>
          <form
            onSubmit={handleSubmit(handleRegistrationForm)}
            className=" mt-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
              <div>
                <div className="border-b flex items-center gap-5">
                  <HiUserCircle className="opacity-50" />
                  <input
                    {...register("name", { required: true })}
                    className="w-full text-sm outline-none px-3 py-1"
                    placeholder="Your Name"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                {errors.name?.type === "required" && (
                  <p className="text-xs mt-2 text-red-500" role="alert">
                    Name is required
                  </p>
                )}
              </div>
              <div>
                <div className="border-b flex items-center gap-5">
                  <HiPhotograph className="opacity-50" />
                  <input
                    {...register("photo", { required: true })}
                    className="w-full text-sm outline-none px-3 py-1"
                    placeholder="Photo URL"
                    type="text"
                    name="photo"
                    id="photo"
                  />
                </div>
                {errors.photo?.type === "required" && (
                  <p className="text-xs mt-5 text-red-500" role="alert">
                    photo url is required
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <div className="border-b flex mt-5 items-center gap-5">
                  <HiPhone className="opacity-50" />
                  <input
                    {...register("phone", { required: true })}
                    className="w-full text-sm outline-none px-3 py-1"
                    placeholder="Phone Number"
                    type="tel"
                    name="phone"
                    id="phone"
                  />
                </div>
                {errors.phone?.type === "required" && (
                  <p className="text-xs mt-2 text-red-500" role="alert">
                    Phone is required
                  </p>
                )}
              </div>

              <div>
                <div className="border-b flex mt-5 items-center gap-5">
                  <HiOutlineMailOpen className="opacity-50" />
                  <input
                    {...register("email", { required: true })}
                    className="w-full text-sm outline-none px-3 py-1"
                    placeholder="Email Address"
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
              </div>
            </div>

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
            </div>
            {errors.password?.type === "required" && (
              <p className="text-xs mt-2 text-red-500" role="alert">
                Password is required
              </p>
            )}

            <div className="border-b flex items-center gap-5 mt-5">
              <HiLockClosed className={errorPass && "text-red-500"} />
              <input
                {...register("confrimpassword", { required: true })}
                className={`w-full text-sm outline-none px-3 py-1 ${
                  errorPass && "text-red-500"
                }`}
                placeholder="Confrim Password"
                type={vissiblePass ? "text" : "password"}
                name="confrimpassword"
                id="confrimpassword"
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
            {errors.confrimpassword?.type === "required" && (
              <p className="text-xs mt-2 text-red-500" role="alert">
                Confrim Password is required
              </p>
            )}

            <div className="border-b flex mt-5 items-center gap-5">
              <HiOutlineLocationMarker className="opacity-50" />
              <input
                {...register("address", { required: true })}
                className="w-full text-sm outline-none px-3 py-1"
                placeholder="Your Address"
                type="text"
                name="address"
                id="address"
              />
            </div>
            {errors.address?.type === "required" && (
              <p className="text-xs mt-2 text-red-500" role="alert">
                Address is required
              </p>
            )}

            <div className="mt-5 font-Inter text-sm">
              <label className="block mb-1 font-bold" htmlFor="gender">
                Gender
              </label>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <input
                    {...register("Gender", { required: true })}
                    className=""
                    type="radio"
                    name="Gender"
                    id="malegender"
                    value="Male"
                  />
                  <label htmlFor="gender">Male</label>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    {...register("Gender", { required: true })}
                    type="radio"
                    name="Gender"
                    id="femalegender"
                    value="Female"
                  />
                  <label htmlFor="gender">Female</label>
                </div>
              </div>
            </div>
            {errors.Gender?.type === "required" && (
              <p className="text-xs mt-2 text-red-500" role="alert">
                Gender is required
              </p>
            )}

            <p className="mt-3 text-xs text-red-500">{errorMessage}</p>

            <input
              className="px-8 font-Inter font-bold text-white outline-none rounded-sm shadow-md hover:bg-primaryHover py-2 disabled:opacity-30 bg-primary mt-5"
              type="submit"
              value="Register"
              disabled={disabledButton}
            />
            <div className="text-xs mt-5 font-Inter">
              Already i have an Account ?
              <NavLink to="/loginPage">
                <button className="text-primary hover:text-primaryHover">
                  Login account
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

export default Registration;
