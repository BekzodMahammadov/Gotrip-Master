import React from "react";
import Img1 from "../../../assets/img/blog/home-blog1.jpg";
import Img2 from "../../../assets/img/blog/home-blog2.jpg";
import Card from "./Card";

const data = [
  {
    id: 1,
    img: Img1,
  },
  {
    id: 2,
    img: Img2,
  },
];

export default () => {
  return (
    <div>
      <div className="recent_blog mt-[150px]">
        <div className="text-[#ffb400] text-[16px] text-center">
          OUR RECENT NEWS
        </div>
        <div className="text-[#191d34] text-[60px] text-center font-semibold">
          Tourist Blog
        </div>
        <div className="recent_blog_con mt-[50px] px-[20px] md:px-[40px] lg:px-[80px] grid grid-cols-1 md:grid-cols-2">
          {data.map((item) => (
            <Card key={item.id} img={item.img} />
          ))}
        </div>
      </div>
    </div>
  );
};
