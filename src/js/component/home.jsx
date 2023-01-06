import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Carousel } from "./Carousel.jsx";

//include images into your bundle


//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <Carousel imageUrl="https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHRtbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          imageUrl2="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFyZCUyMHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          imageUrl3="https://images.unsplash.com/photo-1607523751915-5291fab91551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpc2NpcGxpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
        </div>
      </div>
      <footer className="footer navbar-light p-3">
        <p className="text-center">Alberto Valtierra Jr</p>
      </footer>
    </div>
  );
};
export default Home;
