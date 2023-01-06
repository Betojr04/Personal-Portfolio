import React from "react";



export const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        Alberto Valtierra Jr
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <a className="nav-link active" aria-current="page" href="#">Aout Me</a>
          <a className="nav-link" href="#">Work</a>
          <a className="nav-link" href="#">Contact Me</a>
        </div>
      </div>
    </div>
  </nav>
    )
};
export default Navbar;