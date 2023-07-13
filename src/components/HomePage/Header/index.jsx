import React from "react";

export default () => {
  return (
    <div>
      <div className="header px-[20px] md:px-[40px] lg:px-[70px] flex items-center">
        <div>
          <div className="text-[50px] md:text-[60px] xl:text-[100px] hero__caption flex lg:gap-[15px] Satisfy text-[#fde02f]">
            Fint Your <span>Next Tour!</span>
          </div>
          <div className="text-[20px] md:text-[30px] font-semibold text-[#fff]">
            Where would you like to go ?
          </div>
          <div className="flex justify-center w-full">
            <form
              action="#"
              className="search-box md:gap-[10px] lg:gap-[10px] mx-auto xl:gap-[30px]"
            >
              <div className=" ">
                <input
                  type="text"
                  className="w-full md:w-[329px] lg:w-[449px] h-[55px] rounded-md px-[22px] py-[9px] xl:w-[588px]"
                  placeholder="When Would you like to go ?"
                />
              </div>
              <div className=" ">
                <select
                  name="select"
                  className="text-[#777777]  xl:w-[283px] h-[55px] lg:w-[211px] md:w-[158px] w-full  rounded-md px-[22px] py-[9px]"
                  id=""
                >
                  <option value="">When</option>
                  <option value="">Services-1</option>
                  <option value="">Services-2</option>
                  <option value="">Services-3</option>
                </select>
              </div>
              <div className="cursor-pointer xl:w-[183px] flex justify-center items-center md:w-[103px] lg:w-[134px] w-full bg-[#fde02f] h-[55px] rounded-md uppercase">
                <a href="#">Search</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
