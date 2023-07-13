import React from "react";

export default ({ img, title }) => {
  return (
    <div>
      <div className="begin_card py-[44px] w-full md:w-[150px] lg:w-[210px] xl:w-[270px] border border-[#DAFCEF] transition-all  hover:shadow-lg">
        <div className="flex justify-center items-center">
          <img src={img} className="w-[110px] h-[90px]" alt="" />
        </div>
        <div className="text-center font-semibold flex justify-center">
          <p className=" w-[140px]">{title}</p>
        </div>
      </div>
    </div>
  );
};
