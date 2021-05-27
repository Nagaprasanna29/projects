import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="py-5">
            <button class="btn btn-outline-light btn-lg mt-3">
              Let's talk
            </button>
            <h5 class="text-info pb-3 py-3">More links</h5>
            <Link to="/" class="text-light d-block">
              Home
            </Link>
            <a href="/evaluate" class="text-light d-block">
              Evaluate
            </a>
            <Link to="/student" class="text-light d-block">
              Student
            </Link>
            <Link to="/write a recommendation" class="text-light">
              Write a recommendation <i class="fas fa-heart text-light"></i>
            </Link>
          </div>
          
        
        </div>
    
    </footer>
  );
}

export default Footer;
