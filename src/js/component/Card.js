import React from "react";

export const Card = (props) => {
    return (
        <div className="card-container">
            <div className="card-title">
                <h1>Project Name</h1>
            </div>
            <div className="card-image"></div>
            <div className="card-description">
                <p>Click here to look at project</p>
            </div>
        </div>
    );
};
export default Card;