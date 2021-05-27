import React from "react";
import ReactMarkdown from "react-markdown";
import {Component} from "react";
import axios from "axios";

class BlogPage extends Component{
state={
id:"",
title:"",
imageUrl:"",
body:"",
};
async componentDidMount(){
const id=this.props.match.params.id;
const res=await axios.get(`http://127.0.0.1:9000/api/blog?id=${id}`);
this.setState({
id:id,
title:res.data.payload.title,
imageUrl:res.data.payload.imageUrl,
body:res.data.payload.body,
});
}
render(){
const {imageUrl,title,body}=this.state;
return(
<div className="container my-5 py-5 markdown">
<div className="justify-content-center">
<img src={imageUrl} alt={title}/>
</div>
<h1 className="font-weight-light text-center my-5">{title}</h1>
<ReactMarkdown source={body}/>
</div>
);
}
}

export default BlogPage;
