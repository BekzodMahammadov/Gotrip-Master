import React from "react";
import { BsPlayFill } from "react-icons/bs";

export default () => {
  return (
    <div>
      <div className="play_video mt-[50px] flex justify-center items-center">
        <div>
          <div className="video-caption text-center ">
            <div className="video-icon flex justify-center items-center text-[24px]">
              <a
                className="popup-video "
                href="https://www.youtube.com/watch?v=1aP-TXUpNoU"
                tabindex="0"
              >
                <BsPlayFill />
              </a>
            </div>
            <div>
              <p className="pera1 text-[16px] text-center text-[#fff]">
                Love where you're going in the perfect time
              </p>
              <p className="pera2  text-[30px] md:text-[45px] lg:text-[60px] text-center text-[#fff] font-semibold">
                Tripo is a World Leading Online
              </p>
              <p className="pera3 text-[30px] md:text-[45px] lg:text-[60px] text-center text-[#fff] font-semibold">
                {" "}
                Tour Booking Platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
