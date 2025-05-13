import React from "react";
import bannerImg from "../assets/banner.jpg"; // Add an image in src/assets/
import "./Banner.css";

const Banner = () => (
  <div className="banner">
    <img src={bannerImg} alt="Amazon Banner" className="img-fluid w-100" />
  </div>
);

export default Banner;
