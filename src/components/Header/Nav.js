import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
 
  return (
    <nav className="Nav">
      
      <ul>
        <li>
          <Link to="/">Books-Details</Link>
        </li>
        <li>
          <Link to="/authorlist">Authors-Detail</Link>
        </li>
        <li>
          <Link to="book">Add Books</Link>
        </li>
        <li>
          <Link to="author">Add Authors</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Nav;
