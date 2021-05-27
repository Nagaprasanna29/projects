import React,{Component} from "react";
import {Consumer} from "./Context";
import {v4 as uuid} from "uuid";
import axios from "axios";

class WriteRecommendation extends Component{
state={
name:"",
email:"",
company:"",
designation:"",
recommendationMessage:"",
submitMessage:"",
submitMessageTextColor:"",
};

onChange=(event)=>{
this.setState({
[event.target.name]:event.target.value,
});
};

onSubmit=async(handler,event)=>{
event.preventDefault();

const newRecommendation={
id:uuid(),
name:this.state.name,
email:this.state.email,
company:this.state.company,
designation:this.state.designation,
recommendationMessage:this.state.recommendationMessage,
};

const res=await axios.post("http://127.0.0.1:9000/api/recommendation",newRecommendation);

let isSuccessful=res.data.isSuccessful;
const {name}=this.state;
if (isSuccessful){
this.setState({
submitMessage:`Thank You! ${name} for the recommendation`,
submitMessageTextColor:"text-info",
});
}else{
this.setState({
submitMessage:"Oops something went wrong , please try again later",
submitMessageTextColor:"text-danger",
});
}

handler("ADD_RECOMMENDATION",newRecommendation);
};

render(){
return(
<Consumer>
{(value)=>{

const {submitMessage,submitMessageTextColor}=this.state;
const {handler}=value;
return(
<div className="container my-5">
<h1 className="font-weight-light text-center py-5">
<span className="text-info">Thank you ! </span>for taking your time</h1>
<div className="row justify-content-center">
<div className="col-11 col-lg-5">
<form onSubmit={this.onSubmit.bind(this,handler)}>
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
<label htmlFor="company">Company / Institue *</label>
<input type="text" name="company" id="company"
className="form-control" onChange={this.onChange}/>
</div>
<div className="form-group">
<label htmlFor="designation">Designation *</label>
<input type="text" name="designation" id="designation"
className="form-control" onChange={this.onChange}/>
</div>
<div className="form-group">
<label htmlFor="recommendationMessage">Recommendation *</label>
<textarea className="form-control" name="recommendationMessage"
id="recommendationMessage"
rows="5" onChange={this.onChange}></textarea>
</div>
<button className="btn btn-danger float-right" type="submit"
style={{backgroundColor:"red"}}>lot's of love!</button>
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
</Consumer>
);
}
}
export default WriteRecommendation;
