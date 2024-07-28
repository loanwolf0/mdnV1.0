import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import ShowOff from "../../components/ShowOff/ShowOff";
import AboutUs from "../../components/Home/AboutUs";
import AboutUs2 from "../../components/Home/AboutUs2";
import ProductGrid from "../../components/Products/ProductGrid";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="bg-zinc-900">
      <Slider />
      <ShowOff />
      <AboutUs />
      <AboutUs2 />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Home;
