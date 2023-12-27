import React from "react";
import { useLocation } from "react-router-dom";

function SingleProduct() {

    const location = useLocation();
    // console.log(location.state.data)

    return (
    location.state.data.title && 
    (   
      <div className="container d-flex justify-content-center">
        <div className="card text-center my-2" style={{width:"50rem" }}>
          <span
            className="badge rounded-pill bg-danger"
            style={{
              display: "flex",
              right: "0",
              position: "absolute",
              justifyContent: "flex-end",
            }}
          >
            {location.state.data.rating.rate}‎ ‎ ({location.state.data.rating.count})
            </span>
            <img src={location.state.data.imageUrl} className="card-img-top" alt="itemImage" />
            
          
        </div>
        <div className="container text-center">
        <div className="card-SingleProduct">
                <h4 className="card-title">{location.state.data.title}</h4>
                <h1>‎</h1>
                <p className="card-text">{location.state.data.description}</p>
                <p className="card-text">
                <strong>Rs. {location.state.data.price}</strong>
                </p>
                <h4>‎</h4>
            </div>
            <div>
                <a href="/" className="btn btn-success mx-2 my-2">
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

export default SingleProduct;
