import React from "react";
import { Card } from "./Card.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Navbar } from "./Navbar.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <Jumbotron />
        <div className="d-flex mt-3">
          <div className="me-auto">
            <Card imageUrl="https://images.unsplash.com/photo-1632882765546-1ee75f53becb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHRtbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div className="mx-auto">
            <Card imageUrl="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHRtbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div className="mx-auto">
            <Card imageUrl="https://images.unsplash.com/photo-1632882765546-1ee75f53becb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHRtbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div className="ms-auto">
            <Card imageUrl="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHRtbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
          </div>
        </div>
      </div>
      <footer className="footer mt-3 bg-dark p-5">
        <p className="text-center text-white">Copyright Your Website 2022</p>
      </footer>
    </div>
  );
};
export default Home;
