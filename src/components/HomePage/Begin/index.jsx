import React from "react";
import Img1 from "../../../assets/img/icons/photo_2023-07-11_17-14-37.jpg";
import Img2 from "../../../assets/img/icons/icon-2.jpg";
import Img3 from "../../../assets/img/icons/icon-3.jpg";
import Img4 from "../../../assets/img/icons/icon-4.jpg";
import Card from "./Card";

const data = [
  {
    id: 1,
    title: "8000+ Our Local  Guides",
    img: Img1,
  },
  {
    id: 2,
    title: "100% Trusted Tour Agency",
    img: Img2,
  },
  {
    id: 3,
    title: "28+ Years of Travel Experience",
    img: Img3,
  },
  {
    id: 4,
    title: "98% Our Travelers are Happy",
    img: Img4,
  },
];

export default () => {
  return (
    <div>
      <div className="begin py-[150px] grid grid-cols-1 md:grid-cols-4 px-[20px] md:px-[40px] lg:px-[80px]">
        {data.map((item) => (
          <Card key={item.id} img={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
};
