import React,{Component} from "react";
import axios from "axios";

class Contact extends Component{
constructor(){
super();
this.state={
name:"",
email:"",
description:"",
submitMessage:"",
submitMessageTextColor:"",
};
}
onChange=(event)=>{
this.setState({
[event.target.name]:event.target.value,
});
};

onSubmit=async(event)=>{
event.preventDefault();

const newContact={
 name:this.state.name,
 email:this.state.email,
 description:this.state.description,
};

const res=await axios.post("http://127.0.0.1:9000/api/contact",newContact);

let isSuccessful=res.data.isSuccessful;
const {name}=this.state;
if (isSuccessful){
this.setState({
submitMessage:`Thank You! ${name} , i will contact you soon`,
submitMessageTextColor:"text-info",
});
}else{
this.setState({
submitMessage:"Oops! something went wrong , please try again later",
submitMessageTextColor:"text-danger",
});
}
};

render(){
const {submitMessageTextColor,submitMessage}=this.state;
return(
<div className="container my-5">
<h1 className="font-weight-light text-center py-5">
<span className="text-info">Thank You !</span> for your interest</h1>
<div className="row justify-content-center">
<div className="col-11 col-lg-5">
<form onSubmit={this.onSubmit}>
<div className="form-group">
<label htmlFor="name">Name *</label>
<input type="text" name="name" id="name"
className="form-control" onChange={this.onChange}/>
</div>
<div className="form-group">
<label htmlFor="email">Email *</label>
<input type="email" name="email" id="email"
 className="form-control" onChange={this.onChange}/>
</div>
<div className="form-group">
<label htmlFor="description">
Tell me about project *
</label>
<textarea className="form-control" name="description" rows="5" 
id="description" onChange={this.onChange}></textarea>
</div>
<button className="btn btn-dark float-right" type="submit" 
style={{backgroundColor:"black"}}>
let's talk business
</button>
</form>
</div>
</div>
<div className="py-5 mx-2 text-center">
<h5 className={submitMessageTextColor}>{submitMessage}</h5>
</div>
</div>
);
}
}
export default Contact;

