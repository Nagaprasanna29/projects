import React,{Component} from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";

class ProjectPage extends Component{
state={
id:"",
title:"",
imageUrl:"",
body:"",
};
async componentDidMount(){
const id=this.props.match.params.id;
const res= await axios.get(`http://127.0.0.1:9000/api/project?id=${id}`);
this.setState({
id:id,
title:res.data.payload.title,
imageUrl:res.data.payload.imageUrl,
body:res.data.payload.body
});
}
render(){
const {imageUrl,title,body}=this.state;
return (
<div className="container py-5 my-5 markdown ">
<div className="justify-content-center">
<img src={imageUrl} alt={title} className="w-100"/>
</div>
<h1 className="font-weight-light text-center my-5">{title}</h1>
<ReactMarkdown source={body}/>
</div>
);
}}
export default ProjectPage;
