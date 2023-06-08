import React from "react";

const LoadingPage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-250px)] flex flex-col justify-center items-center">
      <div className="w-20 h-20 border-8 rounded-full border-red-500 border-dashed animate-spin"></div>
      <span className="mt-2 font-Cinzel animate-pulse">Loading....</span>
    </div>
  );
};

export default LoadingPage;
