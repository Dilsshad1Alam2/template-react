import React from "react";
import Firstsection from "./Firstsection";
import Services from "../../container/Homepage/Services";
import Reviews from "../../container/Homepage/Reviews";
import MoreAbout from "../../container/Homepage/MoreAbout";
import Footer from "../../container/Homepage/Footer";

const Homepage = () => {
  return (
    <div>
      <Firstsection />
      <Services />
      <Reviews />
      <MoreAbout />
      <Footer />
    </div>
  );
};

export default Homepage;
