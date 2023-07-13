import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { TfiMobile } from "react-icons/tfi";
import { HiOutlineMail } from "react-icons/hi";
import Loader from "../../components/Loader";

export default () => {
  return (
    <div className="">
      <Loader />
      <div className="contact py-[150px] ">
        <div className="text-[42px] text-[#fff] font-bold text-center">
          Contact us
        </div>
      </div>
      <div className="px-[20px] md:px-[40px] lg:px-[80px] mt-[60px]">
        <div>
          <iframe
            className="w-full h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1842.475107765901!2d71.26597944612756!3d40.37405635801177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1688899124235!5m2!1sru!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact_column lg:flex lg:justify-between gap-[40px]">
          <div className="mt-[60px] mb-[100px] w-[385px]  md:w-[690px] lg:w-[600px] xl:w-[770px]">
            <div className="text-[27px] text-[#2D0A31] font-semibold">
              Get in touch
            </div>
            <div className="flex flex-col gap-[40px]">
              <div>
                <textarea
                  name=""
                  className="w-full border h-[190px] py-[6px] px-[18px]"
                  placeholder="Enter Message"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="flex justify-between items-center ">
                <div>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full md:w-[330px] lg:w-[289px] xl:w-[370px] h-[48px] my-[6px] px-[18px] border"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Enter Email Adress"
                    className="w-full md:w-[330px] lg:w-[289px] xl:w-[370px] h-[48px] py-[6px] px-[18px] border"
                  />
                </div>
              </div>
              <div>
                <input
                  placeholder="Enter Subject"
                  type="text"
                  className="w-full h-[48px] py-[6px] px-[18px] border"
                  name=""
                  id=""
                />
              </div>
              <div>
                <button className="contact_btn w-[157px] h-[60px] border transition-all border-[#014B85] hver:bg-[#014B85] text-[#014B85] text-[16x] uppercase">
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className=" lg:mt-[80px]">
            <div className="w-[300px] flex flex-col gap-[20px]">
              <div className="flex items-center gap-[20px]">
                <div className="text-[30px] text-[#8f9195]">
                  <AiOutlineHome />
                </div>
                <div>
                  <p className="text-[#2a2a2a] text-[16px] font-medium">
                    Buttonwood, California.
                  </p>
                  <p className="text-[#8a8a8a] text-[16px]">
                    Rosemead, CA 91770
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[20px]">
                <div className="text-[30px] text-[#8f9195]">
                  <TfiMobile />
                </div>
                <div>
                  <p className="text-[#2a2a2a] text-[16px] font-medium">
                    +1 253 565 2365
                  </p>
                  <p className="text-[#8a8a8a] text-[16px]">
                    Mon to Fri 9am to 6pm
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[20px]">
                <div className="text-[30px] text-[#8f9195]">
                  <HiOutlineMail />
                </div>
                <div>
                  <p className="text-[#2a2a2a] text-[16px] font-medium">
                    support@colorlib.com
                  </p>
                  <p className="text-[#8a8a8a] text-[16px]">
                    Send us your query anytime!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
