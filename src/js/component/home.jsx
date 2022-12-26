import React from "react";
import { Navbar } from "./Navbar.jsx";
import {Carousel} from "./Carousel.jsx";

//include images into your bundle


//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Carousels />
      </div>

      
    </div>
  );
};
export default Home;
