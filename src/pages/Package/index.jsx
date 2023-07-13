import React from "react";
import FavouritePlace from "../../components/HomePage/FavouritePlace";
import Loader from "../../components/Loader";

export default () => {
  return (
    <div>
      <Loader />
      <div className="package_page">
        <div className="contact py-[100px]">
          <div className="text-center text-[#fff] font-bold text-[50px]">
            Our Package
          </div>
        </div>
        <div className="mt-[80px]">
          <FavouritePlace />
        </div>
      </div>
    </div>
  );
};
