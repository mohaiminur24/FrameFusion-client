import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import PrimaryButton from "../../../reusedComponents/PrimaryButton";

const SliderLayout = () => {
  return (
    <div>
      <>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center font-Inter gap-5 p-10">
                <img className="mx-auto h-80" src="https://www.sicces.co.in/dreamzone/wp-content/uploads/2021/09/Photography-Course-Dreamzone-Lucknow.png" />
                <div className="space-y-2 w-11/12 mx-auto text-center md:text-left">

                    <h1 className="text-lg md:text-2xl font-Cinzel font-bold">The Majestic Wilderness: Capturing the untamed beauty of nature in all its glory</h1>
                    <p className="text-xs opacity-50">Embark on a visual journey through untouched landscapes, where towering mountains, cascading waterfalls, and lush forests invite you to witness the awe-inspiring power and serenity of the natural world</p>

                    <PrimaryButton text="Chosse Your Favourite Class" direction="/classes"></PrimaryButton>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center font-Inter gap-5 p-10">
                <img className="mx-auto h-80" src="https://cdn-danbi.nitrocdn.com/bszjlVBoTtGEeAKeTMwxdtYeBQaqvxyR/assets/images/optimized/rev-3f28a2c/wp-content/uploads/2018/04/portrait_jp.png" />
                <div className="space-y-2 w-11/12 mx-auto text-center md:text-left">

                    <h1 className="text-lg md:text-2xl font-Cinzel font-bold">Portraits of Resilience: A glimpse into the human spirit that shines brightest in the face of adversity</h1>
                    <p className="text-xs opacity-50"> Delve into a series of powerful portraits that depict individuals who have overcome immense challenges, their unwavering determination and strength shining through their eyes, reminding us of the indomitable human spirit</p>

                    <PrimaryButton text="Chosse Your Favourite Class" direction="/classes"></PrimaryButton>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center font-Inter gap-5 p-10">
                <img className="mx-auto h-80" src="https://www.wildlifephoto.com/wp-content/uploads/2015/08/willbl1.png" />
                <div className="space-y-2 w-11/12 mx-auto text-center md:text-left">

                    <h1 className="text-lg md:text-2xl font-Cinzel font-bold">Wonders of the Microcosmos: Revealing the hidden beauty and intricate details of the unseen world</h1>
                    <p className="text-xs opacity-50">Explore a captivating collection of macro photography, where tiny subjects such as delicate flowers, intricate insects, and crystalline water droplets unveil a breathtaking world that often goes unnoticed by the naked eye</p>

                    <PrimaryButton text="Chosse Your Favourite Class" direction="/classes"></PrimaryButton>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center font-Inter gap-5 p-10">
                <img className="mx-auto h-80" src="https://www.tgcindia.com/course/photography-course/assets/images/new/header-img.png" />
                <div className="space-y-2 w-11/12 mx-auto md:ml-0 text-center md:text-left">

                    <h1 className="text-lg md:text-2xl font-Cinzel font-bold">Unveiling the vibrant tapestry of color, culture, and creativity within the city streets</h1>
                    <p className="text-xs opacity-50">Immerse yourself in the captivating world of street photography, where bustling cityscapes, expressive graffiti, eclectic fashion, and diverse faces come together to create an urban symphony of art, culture, and human connection</p>

                    <PrimaryButton text="Chosse Your Favourite Class" direction="/classes"></PrimaryButton>
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default SliderLayout;
