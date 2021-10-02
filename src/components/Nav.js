import React from "react"
import "../App.css"
import {Link} from "react-router-dom"


function Nav (){

    const navStyle = {color:"#fff",
textDecoration: "none" }
    return (
      <nav>
        <Link style={navStyle} to="/home">
          <h3>Lome</h3>
        </Link>

        <ul>
          <Link style={navStyle} to="/work">
            <li>Work</li>
          </Link>
          <Link style={navStyle} to="about">
            <li>About</li>
          </Link>
          <Link style={navStyle} to="budgetcalcul">
            <li>Services</li>
          </Link>
          <Link style={navStyle} to="contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    );
}
export default Nav