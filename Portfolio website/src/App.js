import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import WriteRecommendation from "./WriteRecommendation";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import NotFound from "./NotFound";
import ProjectPage from "./ProjectPage";
import HomePage from "./HomePage";
import BlogPage from "./BlogPage";
import AddProject from "./AddProject";
import AddBlog from "./AddBlog";
import {Provider} from "./Context";
import AllProjects from "./AllProjects";
import AllBlogs from "./AllBlogs";
import ScrollToTop from "./ScrollToTop";

function App() {
return(
<Provider>
<BrowserRouter>
<ScrollToTop/>
<Navbar/>
<Switch>
<Route exact path="/" component={HomePage}/>
<Route exact path="/contact" component={Contact}/>
<Route exact path="/recommendation" component={WriteRecommendation}/>
<Route exact path="/allprojects" component={AllProjects}/>
<Route exact path="/allblogs" component={AllBlogs}/>
<Route exact path="/project/add" component={AddProject}/>
<Route exact path="/blog/add" component={AddBlog}/>
<Route exact path="/project/:id" component={ProjectPage}/>
<Route exact path="/blog/:id" component={BlogPage}/>
<Route component={NotFound} />
</Switch>
<Footer/>
</BrowserRouter>
</Provider>
);
}
export default App;
