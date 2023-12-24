import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <input type="text" placeholder="Search.."/>

      </div>
    </div>
  )
}

export default Navbar