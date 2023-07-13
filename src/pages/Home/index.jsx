import React from "react";
import Header from "../../components/HomePage/Header";
import Begin from "../../components/HomePage/Begin";
import FavouritePlace from "../../components/HomePage/FavouritePlace";
import PlayVideo from "../../components/HomePage/PlayVideo";
import About from "../../components/HomePage/About";
import Testimonials from "../../components/HomePage/Testimonials";
import RecentBlog from "../../components/HomePage/RecentBlog";
import Loader from "../../components/Loader";

export default () => {
  return (
    <div>
      <Loader />
      <Header />
      <Begin />
      <FavouritePlace />
      <PlayVideo />
      <About />
      <Testimonials />
      <RecentBlog />
    </div>
  );
};
