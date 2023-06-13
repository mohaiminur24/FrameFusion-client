import React, { useEffect, useState } from "react";
import SectionTitle from "../../../reusedComponents/SectionTitle";
import AxiosFetch from "../../../CustomHook/AxiosFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const PopularInstructors = () => {
  const [popularInstractor, setPopularInstractor] = useState(null);
  const axiosSecure = AxiosFetch();
  useEffect(() => {
    axiosSecure("/popularinstractor").then((res) =>
      setPopularInstractor(res.data)
    );
  }, []);

  console.log(popularInstractor);
  return (
    <div>
      <SectionTitle
        title="Popular Instructors"
        description="Photograph instructors are experienced professionals who have a deep understanding of photography and possess the ability to teach and guide aspiring photographers. They play a crucial role in helping students develop their technical skills, artistic vision."
      />
      <div className="py-2">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination,Autoplay]}
          className="mySwiper"
        >
            {
                popularInstractor && popularInstractor.map((ins,index)=>{
                    return (
                        <>
                        <SwiperSlide>
                          <div className="p-5 border rounded-md shadow-sm grid grid-cols-1 md:grid-cols-2 gap-5">
                            <img className="w-full h-52 rounded-md" src={ins.photo} alt="" />
                            <div className="w-full font-Raleway">
                              <h1 className="text-lg font-bold">{ins.name}</h1>
                              <h1><span className="font-inter font-semibold">Email:</span> {ins.email}</h1>
                              <h1><span className="font-inter font-semibold">Phone:</span> {ins.phone}</h1>
                              <h1><span className="font-inter font-semibold">Gender:</span> {ins.gender}</h1>
                              <h1><span className="font-inter font-semibold">Address:</span> {ins.address}</h1>
                            </div>
                          </div>
                        </SwiperSlide>
                        </>
                    );
                })
            }
        </Swiper>
      </div>
    </div>
  );
};

export default PopularInstructors;
