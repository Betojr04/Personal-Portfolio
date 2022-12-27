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
          <Carousel imageUrl="./Beto.jpg"
          imageUrl2="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFyZCUyMHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          imageUrl3="https://images.unsplash.com/photo-1607523751915-5291fab91551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpc2NpcGxpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
        </div>
      </div>
      <footer className="footer bg-dark p-3">
        <p className="text-center text-white">Betos Money 2022</p>
      </footer>
    </div>
  );
};
export default Home;
