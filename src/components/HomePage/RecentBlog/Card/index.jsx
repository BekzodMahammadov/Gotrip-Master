import React from "react";

export default ({ img }) => {
  return (
    <div>
      <div className="recent_blog_card w-[385px] md:w-[330px] lg:w-[420px] xl:w-[550px] mx-auto mb-[30px]">
        <div className="h-[350px] overflow-hidden">
          <img src={img} className="w-full " alt="" />
        </div>
        <div className="flex justify-between  xl:py-[30px]">
          <div className="w-[100px] h-[89px] bg-[#014b85] mt-[-60px] md:mt-[-100px] lg:mt-[-40px]  xl:mt-[0] flex justify-center items-center">
            <p className="text-[#fff] text-[25px] flex flex-col">
              <p>24</p> <p className="text-[16px]"> Now</p>
            </p>
          </div>
          <div className="p-[20px] xl:p-[37px]  flex flex-col gap-[15px] mt-[-140px] md:mt-[-170px] lg:mt-[-120px] xl:mt-[-80px]  bg-[#fff]">
            <p className="text-[#506172] text-[16px]">| Traveling</p>
            <p className="text-[#191d34] text-[19px] lg:text-[24px] font-semibold">
              Tips For Taking A Long-Term <br /> Trip With Kids.
            </p>
            <p className="text-[14px] text-[#3a3a3a] font-normal uppercase">
              <a href="#">Read More {">>"}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
