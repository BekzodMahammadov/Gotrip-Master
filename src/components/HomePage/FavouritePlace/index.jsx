import React from "react";
import Img1 from "../../../assets/img/service/services1.jpg";
import Img2 from "../../../assets/img/service/services2.jpg";
import Img3 from "../../../assets/img/service/services3.jpg";
import Img4 from "../../../assets/img/service/services4.jpg";
import Img5 from "../../../assets/img/service/services5.jpg";
import Img6 from "../../../assets/img/service/services6.jpg";
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

  {
    id: 3,
    img: Img3,
  },

  {
    id: 4,
    img: Img4,
  },
  {
    id: 5,
    img: Img5,
  },
  {
    id: 6,
    img: Img6,
  },
];

export default () => {
  return (
    <div>
      <div className="favourite_place py-[100px]">
        <div className="text-[#ffb400] text-[16px] text-center">
          FEATURED TOURS PACKAGES
        </div>
        <div className="text-[#191d34] text-[60px] font-semibold text-center">
          Favourite Places
        </div>
        <div className="favourite_cont mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[20px] md:px-[40px] lg:px-[80px]">
          {data.map((item) => (
            <Card key={item.id} img={item.img} />
          ))}
        </div>
      </div>
    </div>
  );
};
