import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-left">
          <div>
           <Link to="/" style={{textDecoration:"none",color:"rgb(84, 111, 255)"}}>
           <img src={logo} alt="" />
            <span style={{fontSize:"26px"}}> KIE</span>
           </Link>
          </div>
        </div>

        <div className="header-right">
          <ul>
            <li>PRODUCTS</li>
            <li>SOLUTIONS</li>
            <li>RESOURCES</li>
            <li>PRICING</li>
            <li>LOG IN</li>
            <li>
              <button className="btn">
                <Link to="/upload" style={{textDecoration:"none",color:"rgb(84, 111, 255)"}}>GET START FOR FREE</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
