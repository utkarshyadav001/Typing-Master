import React from 'react'
import '../style/navbar.css'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={"Nav-"+props.mode}>

        {/* Navbar Logo Here */}
        <div id="appLogo">
            <Link to="/"><h4>{props.title}</h4></Link>
        </div>

        {/* Navbar Button Here */}
        <div id="navBtn">
          <ul>
            <li><Link to="/" id="homeBtn">Home</Link></li> 
            <li><Link to="/learning" id="aboutBtn">Learning</Link></li>
            <li><Link to="/trips" id="aboutBtn">Trip & Trick</Link></li>
            <li><Link to="/about" id="aboutBtn">About Us</Link></li>
            {/* <li><Link to="/about" id="aboutBtn">Premium</Link></li> */}
          </ul>
        </div>

        {/* Navbar Dark Mode btn Here  */}
        <div className="checkbox">
          <p  onClick={props.togglemode} style={{color: "white"}}  >{props.mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}</p>
        </div>

          
    </nav>
  )
}

//  PropTypes property
//  1. propTypes
//  2. defultProps



Navbar.defaultProps = {
  title: "Typing Master",

}