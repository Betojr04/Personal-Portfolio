//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

// const navBar = () => {
//     return <nav class="navbar navbar-expand-lg navbar-light bg-light">
//     <div class="container-fluid">
//       <a class="navbar-brand" href="#">Navbar</a>
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//         <div class="navbar-nav">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//           <a class="nav-link" href="#">Features</a>
//           <a class="nav-link" href="#">Pricing</a>
//           <a class="nav-link disabled">Disabled</a>
//         </div>
//       </div>
//     </div>
//   </nav>
// }
// const jumbotron = () => {
//     <div class="card">
//     <div class="card-header">
//     Featured
//     </div>
//     <div class="card-body">
//     <h5 class="card-title">Special title treatment</h5>
//     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//     </div>
// }
// const container = () => {
//     <div>
//         <div class="card" style="width: 18rem;">
//             <img src="..." class="card-img-top" alt="..."/>
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//         <div class="card" style="width: 18rem;">
//             <img src="..." class="card-img-top" alt="..."/>
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//         <div class="card" style="width: 18rem;">
//             <img src="..." class="card-img-top" alt="..."/>
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//         <div class="card" style="width: 18rem;">
//             <img src="..." class="card-img-top" alt="..."/>
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
    
//     <div class="footer">
//         <p>Copyright Your Website 2022</p>
//     </div>
//     </div>
// };
//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
