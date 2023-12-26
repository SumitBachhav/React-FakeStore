import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Fake-Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/electronics">
                  Electronics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/jewelery">
                  Jewelery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mensclothing">
                  Men's clothing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/womensclothing">
                  Women's clothing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// <div className="topnav">
//   <Link className="active" href="#home">Home</Link>
//   <Link href="#news">News</Link>
//   <Link href="#contact">Contact</Link>
//   <Link href="#about">About</Link>
//   <input type="text" placeholder="Search.."/>

// </div>
