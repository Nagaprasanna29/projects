import React from "react";
import ProjectCard from "./ProjectCard";
import {Consumer} from "./Context";
import {Link} from "react-router-dom";

function ProjectSection(){
return(
<Consumer>
{(value)=>{
const {projects}=value;
return(
<div><a name="project">
  <div className="container text-center my-3">
            <h1>My <span className="text-info"> Projects</span></h1>
            <p className="lead">projects related to trending technologies and social issues</p>

        <div className="row my-5 pt-3">
       {
        projects.slice(0,3).map((project)=>
        (
         <div key={project.id} className="col-12 col-sm-4 my-2">
        <ProjectCard project={project}
        />
        </div>
        )
        )
        }
       </div>

     <div className="my-2">
         <Link className="text-dark text-right" to="/allprojects">
<h5>see my projects<i className="fas fa-arrow-right align-middle"></i></h5></Link>
    </div>
        </div>
</a></div>
);
}}
</Consumer>
);
}
export default ProjectSection;
