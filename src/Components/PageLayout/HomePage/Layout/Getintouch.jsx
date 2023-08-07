import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineLink } from "react-icons/ai";

const Getintouch = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center font-Inter shadow-sm p-10">
      <div className="md:border-r border-black w-full h-auto py-5">
        <h1 className="font-Cinzel">Get in touch</h1>
        <p className="font-bold">mohaiminur24@gmail.com</p>
      </div>
      <div className="md:border-r border-black w-full h-auto py-5 font-bold">
        Because every picture should be unique. Making your special day. We will
        make a wonderful story
      </div>
      <div>
        <h1 className="font-Cinzel">Contact with us</h1>
        <div className="flex justify-center gap-2 text-2xl mt-2">
          <a href="">
            <AiFillLinkedin />
          </a>
          <a href="">
            <AiFillGithub />
          </a>
          <a href="">
            <AiOutlineLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
