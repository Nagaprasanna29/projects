import React from "react";
import Title from "./Title";
import About from "./About";
import ProjectSection from "./ProjectSection";
import BlogSection from "./BlogSection";
import SkillSection from "./SkillSection";
import RecommendationSection from "./RecommendationSection";

function HomePage(){
return(
<div>
<Title name="Vantakala Sai Archana" leadtext="I am B.Tech student"/>
<RecommendationSection/>
<SkillSection/>
<ProjectSection/>
<About/>
<BlogSection/>
</div>
);
}
export default HomePage;
