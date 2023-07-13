import { BiMenu } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import Dropdown1 from "./Dropdown1";
import Img from "../../assets/img/logo/logo.png";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF, FaPinterestP } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleResize = () => {
    setDeviceWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const windowHeight = window.innerHeight;

  const hamburger = () => {
    if (isOpened) {
      setIsOpened(false);
    } else {
      setIsOpened(true);
    }
  };

  if (deviceWidth > 994) {
    return (
      <div>
        <div className="navbar_top w-full h-[50px]  bg-[#0e1c35] text-[#fff] text-[14px] flex px-[70px] justify-between">
          <div className="navbar_top_item font-[600] flex gap-[30px] items-center">
            <div>needhelp@gotrip.com</div>
            <div>666 569 025077</div>
            <div> broklyn street new york</div>
          </div>
          <div className="navbar_top_item flex items-center ">
            <a href="#" className="nav_top_link">
              <BsTwitter />
            </a>
            <a href="#" className="nav_top_link">
              <FaLinkedinIn />
            </a>
            <a href="#" className="nav_top_link">
              <FaFacebookF />
            </a>
            <a href="#" className="nav_top_link">
              <FaPinterestP />
            </a>
          </div>
        </div>
        <div
          className={`w-full navbar z-[100] flex items-center shadow-md bg-[#fff] h-[100px] px-[70px] ${
            scrollPosition > windowHeight ? "fixed top-0 z-50 bg-[#fff]" : null
          }`}
        >
          <div className="flex justify-between w-full">
            <a
              className="font-bold text-[20px] my-auto flex gap-[15px] "
              href="#"
            >
              <img src={Img} alt="" />
            </a>
            <div className="flex gap-[40px] text-[#014b85] font-semibold uppercase items-center text-[14px]">
              <div>
                <NavLink to={"/"}>
                  <p>Home</p>
                </NavLink>
              </div>

              <div>
                <NavLink to={"/about"}>
                  <p>About Us</p>
                </NavLink>
              </div>
              <div>
                <NavLink to={"/package"}>
                  <p>Packages</p>
                </NavLink>
              </div>
              <div>
                <Dropdown />
              </div>
              <div>
                <Dropdown1 />
              </div>
              <div>
                <NavLink to={"/contact"}>
                  <p>Contact Us</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`z-[${9 ** 999}] px-[20px] w-full bg-[#fff] ${
          deviceWidth < 640 ? "px-[10px]" : "px-[30px]"
        } ${scrollPosition > windowHeight ? "fixed top-0 z-50" : null}`}
      >
        <div
          className={`w-full flex z-50 items-center h-[70px] bg-[#fff] ${
            scrollPosition > windowHeight
              ? "fixed top-0 left-0 z-50 bg-[#fff] px-[30px]"
              : null
          } `}
        >
          <div className="flex justify-between w-full">
            <a className="font-bold text-[20px]" href="./">
              <img src={Img} alt="" />
            </a>
          </div>
          <button
            onClick={() => hamburger()}
            className="border-[1px] text-[30px] text-[#014b85] rounded-sm"
          >
            <BiMenu />
          </button>
        </div>
        {isOpened ? (
          <div
            className={`w-full bg-[#fff] py-[30px] px-[25px] border-t-[1px]`}
          >
            <div className="text-[#014b85] text-[16px]">
              <div className="flex gap-[20px]  flex-col text-left text-[16px]">
                <div className="">
                  <NavLink to={"/"}>Home</NavLink>
                </div>

                <div>
                  <NavLink to={"/about"}>About Us</NavLink>
                </div>
                <div>
                  <NavLink to={"/package"}>Pakage</NavLink>
                </div>
                <div>
                  <NavLink to={"/blog"}>Blog</NavLink>
                </div>
                <div>
                  <NavLink to={"/blogdetail"}>Blog Detail</NavLink>
                </div>
                <div>
                  <NavLink to={"/elemeny"}>Element</NavLink>
                </div>
                <div>
                  <NavLink to={"/contact"}>Contact Us</NavLink>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
};

export default Navbar;
