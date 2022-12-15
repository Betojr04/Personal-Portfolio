import React from "react";
import Card from "./Card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
		 	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		 		<div className="container-fluid">
		 		<a className="navbar-brand" href="#">Navbar</a>
		 		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		 			<span className="navbar-toggler-icon"></span>
		 		</button>
		 		<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
		 			<div className="navbar-nav">
		 			<a className="nav-link active" aria-current="page" href="#">Home</a>
		 			<a className="nav-link" href="#">Features</a>
		 			<a className="nav-link" href="#">Pricing</a>
		 			<a className="nav-link disabled">Disabled</a>
		 			</div>
		 		</div>
				</div>
		 	</nav> 

			{/* <div class="jumbotron">
				<h1 class="display-4">Hello, world!</h1>
				<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
				<hr class="my-4"></hr>
				<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
				<p class="lead">
					<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
				</p>
			</div> */}

			<div>
				<Card/>
				<Card/>
				<Card/>
			</div>
			
			<footer className="footer">
				<p>Copyright Your Website 2022</p>
			</footer> 
		</div>
	)
}
export default Home;
