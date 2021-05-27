import React,{Component} from "react";
import {Modal} from "react-bootstrap";

class RecommendationModal extends Component{

state={
shouldShow:false
};

handleModal=()=>{
this.setState({shouldShow:!this.state.shouldShow});
};

render(){

const{shouldShow}=this.state;
const {name,designation,company,recommendationMessage}=this.props.recommendation;

return(

 <div className="col-12 col-sm-4 ">
<a onClick={this.handleModal} style={{cursor:"pointer"}}>
    <div className="card shadow h-100">
                <div className="card-body">
                    <h4 className="card-text">{recommendationMessage.length>35?
                    recommendationMessage.slice(0,35)+"...":recommendationMessage}</h4>
                    <p className="card-text text-secondary mb-0">{name}</p>
            <p className="card-text text-secondary">{designation} at {company}</p>
                </div>
            </div>
    </a>

<Modal show={shouldShow} onHide={this.handleModal}>
<Modal.Header closeButton style={{border:"none"}}></Modal.Header>
<Modal.Body closeButton className="text-center h5">
{recommendationMessage}
</Modal.Body>
<div className="text-center" >
<p className="card-text text-secondary mb-0">{name}</p>
<p className="card-text text-secondary mb-0">{designation} at {company}</p>
</div>
</Modal>

</div>
);
}
}
export default RecommendationModal;
