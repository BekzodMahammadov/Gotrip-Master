import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Img from "../../../assets/img/icon/testimonial.png";
import User from "../../../assets/img/testmonial/Homepage_testi.png";

import "swiper/css";

export default () => {
  return (
    <>
      <div className="testimonials mt-[100px] px-[20px] md:px-[40px] lg:px-[80px]">
        <Swiper className="mySwiper" loop={true} rewind={true}>
          <SwiperSlide>
            <div>
              <div className="flex justify-center">
                <img src={Img} alt="" />
              </div>
              <div className="text-[20px] mt-[20px] md:text-[30px] text-[#00233f] font-semibold text-center">
                Logisti Group is a representative logistics operator providing
                full range of ser of customs clearance and transportation worl.
              </div>
              <div className="flex gap-[15px] mt-[20px] items-center justify-center">
                <div>
                  <img src={User} alt="" />
                </div>
                <div>
                  <p className="text-[16px] text-[#fff]">Jessya Inn</p>
                  <p className="text-[16px] text-[#fff] font-semibold">
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
                Logisti Group is a representative logistics operator providing
                full range of ser of customs clearance and transportation worl.
              </div>
              <div className="flex gap-[15px] mt-[20px] items-center justify-center">
                <div>
                  <img src={User} alt="" />
                </div>
                <div>
                  <p className="text-[16px] text-[#fff]">Jessya Inn</p>
                  <p className="text-[16px] text-[#fff] font-semibold">
                    Co Founder
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
