import React, { useState } from "react";
import { Link } from "react-router-dom";


function Body(props) {

    const [sendData] = useState({title:props.title, description:props.description, imageUrl:props.imageUrl, price:props.price, rating:props.rating})
    // console.log(sendData)

  return (
    props.title && 
    (
        
      <div className="container">
        <div className="card my-2">
        <Link to = "/viewproduct" state={{data:sendData}}>
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
            </Link>

            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description.slice(0,80)}...</p>
                <p className="card-text">
                <strong>Rs. {props.price}</strong>
                </p>
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

export default Body;
