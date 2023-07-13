import React from "react";
import Img from "../../../assets/img/service/support-img.jpg";

export default () => {
  return (
    <div>
      <div className="about mt-[150px] lg:flex lg:gap-[60px] lg:justify-between lg:items-center px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="about_item">
          <div>
            <div className="support">
              <img
                src={Img}
                alt=""
                className="w-[385px] md:w-[690px] lg:w-[450px] xl:w-[500px]"
              />
              <div className="support_border"></div>
              <div className="support_since">since 1992</div>
            </div>
          </div>
        </div>
        <div className="about_item">
          <div className="text-[16px] text-[#ffb400]">ABOUT OUR COMPANY</div>
          <div className="text-[30px] w-[385px] md:w-auto md:text-[49px] text-[#191d34] font-semibold">
            We are Go Trip Ravels Support Company
          </div>
          <div className="text-[#506172] text-[16px] mt-[30px] w-[385px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </div>
          <div className="flex flex-col gap-[20px] mt-[30px]">
            <div className="flex gap-[10px] w-[385px] md:w-auto">
              <input
                type="checkbox"
                checked
                className="w-[20px]"
                name=""
                id=""
              />
              <p className="text-[#666666]">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex gap-[10px] w-[385px] md:w-auto">
              <input
                checked
                type="checkbox"
                className="w-[20px]"
                name=""
                id=""
              />
              <p className="text-[#666666]">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex gap-[10px] w-[385px] md:w-auto">
              <input
                checked
                type="checkbox"
                className="w-[20px]"
                name=""
                id=""
              />
              <p className="text-[#666666]">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex gap-[10px] w-[385px] md:w-auto ">
              <input
                checked
                type="checkbox"
                className="w-[20px]"
                name=""
                id=""
              />
              <p className="text-[#666666]">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="mt-[40px]">
            <button className="border-btn">About Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};
