import React from "react";
import {Consumer} from "./Context";
import ProjectCard from "./ProjectCard";

function AllProjects(){
return(
<Consumer>
{(value)=>{
const {projects}=value;
return(
<div className="container text-center my-5 py-5">
            <h1 className="font-weight-light py-5">
My <span className="text-info"> Projects</span></h1>
            <p className="lead">projects related to trending technologies and social issues</p>

        <div className="row my-4 pt-4">
       {
        projects.map((project)=>
        (
         <div key={project.id} className="col-12 col-md-6 my-3">
        <ProjectCard project={project}
        />
        </div>
        )
        )
        }
       </div>
        </div>
);
}}
</Consumer>
);
}
export default AllProjects;
