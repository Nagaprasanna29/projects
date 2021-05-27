import React,{Component} from "react";


class Evaluate extends Component{
  state={
    name:"",
    password:"",
    imageurl:"",
    task:"",
    marks:"",

};

onChange=(event)=>{
    this.setState({
    [event.target.name]:event.target.value,
    });
    };
    
    onSubmit=(event)=>{
    event.preventDefault();
    
    let isSuccessful=true;
const {name}=this.state;
if (isSuccessful){
this.setState({
submitMessage:"Thank You! ${name} ",
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
    const{ submitMessageTextColor , submitMessage }=this.state;
    return(
    <div class="container my-5">
        <h1 class="font-weight-light text-center py-5">
           Only instructer's can access
        </h1>
        <div class="row justify-context-center">
            <div class="col-11 col-lg-5">
                <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                        <label htmlfor="name">Name *</label>
                        <input required type="text" name="name" class="form-control" onChange={this.onChange}/>
                    </div>
                    <div class="form-group">
                        <label htmlfor="password">Password *</label>
                        <input required type="password" name="password" class="form-control" onChange={this.onChange}/>
                    </div>
                    <div class="form-group">
                        <label htmlfor="task">Task *</label>
                        <input required type="number" name="task" class="form-control" onChange={this.onChange}/>
                    </div>
                    <div class="form-group">
                        <label htmlfor="marks">Marks awarded *</label>
                        <input required type="number" name="marks" class="form-control" onChange={this.onChange}/>
                    </div>
                    <button type="submit" class="btn btn-dark float-right" style={{backgroundColor:"black"}}>
                         Upload
                    </button>
                </form>
            </div>
        </div>
        <div class="py-5 mx-2 text-center">
          <h5 class={submitMessageTextColor}>{submitMessage}</h5>
        </div>
    </div>
);
}
}
export default Evaluate;
