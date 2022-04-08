import React from "react";
import airbnblogo from "../images/airbnblogo.png";

function Navbar() {
  return (
    <nav>
      <img src={airbnblogo} alt="air bnb logo" className="nav--logo" />
    </nav>
  );
}

export default Navbar;
