import React from "react";
import BlogCard from "./BlogCard";
import {Consumer} from "./Context";
import {Link} from "react-router-dom";

function BlogSection(){
return(
<Consumer>
{(value)=>{
const {blogs}= value;
return(
<div><a name="blog">
  <div className="container text-center my-3">
            <h1>My <span className="text-info"> Blogs</span></h1>
            <p className="lead">Blogs related to trending technologies and social issues</p>

        <div className="row">
       {
        blogs.slice(0,3).map((blog)=>
        (
         <div key={blog.id} className="col-12 col-sm-4 my-2">
        <BlogCard blog={blog}
        />
        </div>
        )
        )
        }
       </div>
<div className="my-2">
         <Link className="text-dark text-right" to="/allblogs">
<h5>see my blogs<i className="fas fa-arrow-right align-middle"></i></h5></Link>
    </div>
        </div>
   </a></div>
);
}
}
</Consumer>
);
}
export default BlogSection;
