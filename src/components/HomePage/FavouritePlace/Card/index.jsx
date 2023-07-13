import React from "react";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

export default ({ img }) => {
  return (
    <div>
      <div className="favourite_card mx-auto rounded border mb-[20px]  border-[#F0F1F2] w-[385px] md:w-[320px] lg:w-[270px] xl:w-[370px]">
        <div className="h-[310px] overflow-hidden">
          <img src={img} className="w-full h-full" alt="" />
        </div>
        <div className="p-[24px]">
          <div className="flex gap-[7px]">
            <p className="text-[20px] text-[#ffa800]">
              <BsStarFill />
            </p>
            <p className="text-[#939ca3] text-[16px]">8.0 Superb</p>
          </div>
          <div className="text-[#072740] text-[23px] font-semibold cursor-pointer">
            The Dark Forest Adventure
          </div>
          <div className="flex items-center gap-[5px] mt-[5px] pb-[20px]">
            <p className="text-[#4cafa4] text-[20px] font-semibold">$1870 </p>
            <p className="text-[#99a1a7] text-[16px] font-semibold">
              / Per Person
            </p>
          </div>
          <hr />
          <div className="text-[#9da5ab] flex items-center gap-5 mt-[20px]">
            <p className="flex items-center gap-1">
              <AiOutlineClockCircle />3 Days
            </p>
            <p className="flex items-center gap-1">
              <MdLocationOn />
              Los Angeles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
