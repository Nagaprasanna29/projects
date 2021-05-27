import React from "react";
import RecommendationModal from "./RecommendationModal";
import {v4 as uuid} from "uuid";
import {Consumer} from "./Context";

function RecommendationSection(){
return(
<Consumer>
{(value)=>{
const {recommendations}=value;

return(
  <div className="container my-3">
    <div className="row text-center py-5 flex-nowrap overflow-auto scrollbar ">
{recommendations.map((recommendation)=>(
<RecommendationModal key={uuid()} recommendation={recommendation}/>
))}
</div>
</div>
);
}
}
</Consumer>
);
}
export default RecommendationSection;
