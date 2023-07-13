import React from "react";
import About from "../../components/HomePage/About";
import Begin from "../../components/HomePage/Begin";
import PlayVideo from "../../components/HomePage/PlayVideo";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Img from "../../assets/img/icon/testimonial.png";
import User from "../../assets/img/testmonial/Homepage_testi.png";

import "swiper/css";
import Loader from "../../components/Loader";

export default () => {
  return (
    <div>
      <Loader />
      <div className="about_page">
        <div className="bg_img">
          <div className="text-center text-[#fff] font-bold text-[50px]">
            About Us
          </div>
        </div>
        <div className="mt-[100px]">
          <About />
        </div>
        <div className="mt-[50px]">
          <Begin />
        </div>
        <div className="mt-[50px]">
          <PlayVideo />
        </div>
        <div className="my-[150px]">
          <div className=" mt-[100px] px-[20px] md:px-[40px] lg:px-[80px]">
            <Swiper className="mySwiper" loop={true} rewind={true}>
              <SwiperSlide>
                <div>
                  <div className="flex justify-center">
                    <img src={Img} alt="" />
                  </div>
                  <div className="text-[20px] mt-[20px] md:text-[30px] text-[#00233f] font-semibold text-center">
                    Logisti Group is a representative logistics operator
                    providing full range of ser of customs clearance and
                    transportation worl.
                  </div>
                  <div className="flex gap-[15px] mt-[20px] items-center justify-center">
                    <div>
                      <img src={User} alt="" />
                    </div>
                    <div>
                      <p className="text-[16px] text-[#014B85]">Jessya Inn</p>
                      <p className="text-[16px] text-[#014B85] font-semibold">
                        Co Founder
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="flex justify-center">
                    <img src={Img} alt="" />
                  </div>
                  <div className="text-[20px] mt-[20px] md:text-[30px] text-[#00233f] font-semibold text-center">
                    Logisti Group is a representative logistics operator
                    providing full range of ser of customs clearance and
                    transportation worl.
                  </div>
                  <div className="flex gap-[15px] mt-[20px] items-center justify-center">
                    <div>
                      <img src={User} alt="" />
                    </div>
                    <div>
                      <p className="text-[16px] text-[#014B85]">Jessya Inn</p>
                      <p className="text-[16px] text-[#014B85] font-semibold">
                        Co Founder
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
