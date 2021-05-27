import React,{Component} from "react";
import axios from "axios";

const Context=React.createContext();

export class Provider extends Component{
handler=(action,newObject)=>{
switch(action){
case "ADD_PROJECT":
this.setState({
projects:[newObject,...this.state.projects],
});
break;
case "ADD_BLOG":
this.setState({
blogs:[newObject,...this.state.blogs],
});
break;
case "ADD_RECOMMENDATION":
this.setState({
recommendations:[newObject,...this.state.recommendations],
});
break;
}
};

state={
handler:this.handler,
recommendations:[],
skills:[],
blogs:[],
projects:[],
};

async componentDidMount(){
 const serverUrl="http://127.0.0.1:9000";
 const [
 resultRecommendations,
 resultSkills,
 resultProjects,
 resultBlogs,]= await Promise.all([
 axios.get(serverUrl+"/api/recommendations"),
 axios.get(serverUrl+"/api/skills"),
 axios.get(serverUrl+"/api/projects"),
 axios.get(serverUrl+"/api/blogs"),
 ]);
this.setState({
recommendations:resultRecommendations.data.payload,
skills:resultSkills.data.payload,
projects:resultProjects.data.payload,
blogs:resultBlogs.data.payload,
});
}

render(){
return(
<Context.Provider value={this.state}>
{this.props.children}
</Context.Provider>
);
}
}

export const Consumer=Context.Consumer;
