import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
 return(
   <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
   <div className="container my-2">
  <Link className="navbar-brand" to="/">Sai Archana</Link>
<Link to="/contact" className="ml-auto mx-3">
  <button className="btn btn-light">contact me</button>
</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">

<span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse flex-grow-0" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#blog">Blogs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#project">projects</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
);
}
export default Navbar;
