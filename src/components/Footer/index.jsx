import React from "react";
import Logo from "../../assets/img/logo/logo2_footer.png";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF, FaPinterestP } from "react-icons/fa";

export default () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_top grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4 px-[20px] md:px-[40x] lg:px-[80px]">
          <div className="footer_item md:ml-[30px] lg:ml-0 w-[300px] flex flex-col gap-[30px]">
            <div>
              <img src={Logo} alt="" />
            </div>
            <div className="text-[16px] text-[#ced9e1]">
              Lorem iaspsum doldfor sit amvset, consectetur adipisicing cvelit
              csed do eiusmod tempor incididucvccnt ut labovre.
            </div>
          </div>
          <div className="md:flex md:justify-end md:ml-[50px]">
            <div className="footer_item w-[300px]  flex flex-col gap-[30px]">
              <div className="text-[20px] text-[#fff] font-semibold">
                Quick Links
              </div>
              <div className="flex flex-col gap-[15px] text-[#ced9e1]">
                <a href="#">About</a>
                <a href="#">Offers & Discounts</a>
                <a href="#">Get Coupon</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="md:ml-[30px]">
            <div className="footer_item w-[300px]  flex flex-col gap-[30px]">
              <div className="text-[20px] text-[#fff] font-semibold">
                New Products
              </div>
              <div className="flex flex-col gap-[15px] text-[#ced9e1]">
                <a href="#">Woman Cloth</a>
                <a href="#">Fashion Accessories</a>
                <a href="#">Man Accessories</a>
                <a href="#">Rubber made Toys</a>
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-end md:ml-[20px]">
            <div className="footer_item w-[300px]  flex flex-col gap-[30px]">
              <div className="text-[20px] text-[#fff] font-semibold">
                Quick Links
              </div>
              <div className="flex flex-col gap-[15px] text-[#ced9e1]">
                <a href="#">Frequently Asked Questions</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Report a Payment Issue</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom flex justify-between pt-[70px] px-[20px] md:px-[40x] lg:px-[80px]">
          <div className="text-[#fff] text-[16px]">
            Copyright ©2023 All rights reserved | This template is made with 💛
            by Colorlib
          </div>
          <div className="flex gap-[15px]">
            <a
              href="#"
              className=" text-[17px] text-[#44474e] transition-all hover:text-[#fff]"
            >
              <BsTwitter />
            </a>
            <a
              href="#"
              className=" text-[17px] text-[#44474e]  transition-all hover:text-[#fff]"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className=" text-[17px] text-[#44474e]  transition-all hover:text-[#fff]"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className=" text-[17px] text-[#44474e]  transition-all hover:text-[#fff]"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
