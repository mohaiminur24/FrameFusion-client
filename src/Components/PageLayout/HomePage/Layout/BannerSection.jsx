import React from "react";

const BannerSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="border-r p-5">
        <h1 className="md:text-5xl font-Cinzel">FOR THE <br /> SIMPLY JOYFUL <br /> MOMENTS</h1>
        <p className="text-sm mt-5 font-Inter">In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content.</p>
        <button className="px-10 py-3 bg-slate-600 mt-3 rounded-sm shadow-sm text-white"><a href="https://www.linkedin.com/in/mohaiminur-mernstack/" target="black">Visit us</a></button>
      </div>
      <img
        className="w-4/5 mx-auto rounded-md shadow-sm"
        src="https://images.pexels.com/photos/3773478/pexels-photo-3773478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
};

export default BannerSection;
