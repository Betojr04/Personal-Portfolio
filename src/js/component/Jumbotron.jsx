import React from "react";

export const Jumbotron = () => {
  return (
    <div className="card jumbo-background">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <h1 className="card-title">Beto's Portfolio</h1>
        <p className="card-text">
          Check out my work.
        </p>
        <a href="#" className="btn btn-primary">
          Go to my favorite project!
        </a>
      </div>
    </div>
  );
};
export default Jumbotron;
