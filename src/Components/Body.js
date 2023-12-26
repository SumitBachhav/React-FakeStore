import React from "react";

function Body(props) {
  return (
    props.title && (
      <div className="container">
        <div className="card my-2">
          <span
            className="badge rounded-pill bg-danger"
            style={{
              display: "flex",
              right: "0",
              position: "absolute",
              justifyContent: "flex-end",
            }}
          >
            {props.rating.rate}‎ ‎ ({props.rating.count})
          </span>
          <img src={props.imageUrl} className="card-img-top" alt="itemImage" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">
              <strong>Rs. {props.price}</strong>
            </p>
            <a href="/" className="btn btn-success mx-2">
              Buy
            </a>
            <a href="/" className="btn btn-outline-success">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    )
  );
}

export default Body;
