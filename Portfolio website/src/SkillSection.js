import React from "react";
import Skill from "./Skill";
import {v4 as uuid} from "uuid";
import {Consumer} from "./Context";

function SkillSection(){
return(
<Consumer>
{(value)=>{
const {skills}=value;
const finalSkillRow=[];
for (let i=0;i<skills.length/4;i++){
let skillRow=skills.slice(i*4,(i+1)*4);
finalSkillRow.push(
<div key={uuid()} className="d-flex justify-content-around py-3">
{skillRow.map((skill)=>(
<Skill key={uuid()} skill={skill}/>
))}
</div>
);
}
return(
<div className="container-fluid bg-light py-3 text-center">
        <h1 className="font-weight-light"><span className="text-info">Technology
        </span> stack</h1>
        <div className="lead"> I design , develop and deliver these contents</div>

             <div className="d-flex justify-content-around py-3">
            </div>
           {finalSkillRow}
           </div>
);
}
}
</Consumer>
);
}
export default SkillSection;
