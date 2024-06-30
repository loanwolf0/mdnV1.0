import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import ShowOff from "../../components/ShowOff/ShowOff";
import AboutUs from "../../components/Home/AboutUs";
import AboutUs2 from "../../components/Home/AboutUs2";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <ShowOff />
      <AboutUs />
      <AboutUs2 />
    </div>
  );
};

export default Home;
