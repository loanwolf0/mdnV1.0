import React from "react";
import Product from "../../components/About/Product";
import Aboutcard from "../../components/About/Aboutcard";
import Card3 from "../../components/About/Card3";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <div className="flex flex-col">
      <Product />
      <Aboutcard />
      <Card3 />
      <Footer />
    </div>
  );
};

export default About;
