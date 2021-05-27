import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
    return(
        <nav class="navbar navbar-expand-md fixed-top bg-white">
        <div class="container my-2">
        <a href="/" class="navbar-brand text-dark font-weight-bold">
          Image
        </a>
        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        ><span class="fas fa-bars text-dark"></span></button>
        <div class="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div class="navbar-nav">
          <Link to="/student">
          <button class="btn btn-outline-info my-auto mx-3">
                 Student
             </button>
             </Link>
          <Link to="/evaluate">
          <button class="btn btn-outline-info my-auto mx-3">
                 Evaluate
             </button>
             </Link>
             <Link to="/addimage">
             <button class="btn btn-outline-info my-auto mx-3">
                 AddImage
             </button>
             </Link>
          </div>
        </div>
        </div>
        </nav>
    );

}

export default Navbar;