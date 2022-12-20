import React from "react";
import {Card} from "./Card.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import {Navbar} from "./Navbar.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
        <div>
        <Navbar />
		    <div className="container">
                <Jumbotron />
               
                

		    </div>
        <footer className="footer">
            <p>Copyright Your Website 2022</p>
        </footer>
        </div>
	)
}
export default Home;
