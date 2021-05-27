import React from "react";


 function Title(props){
//const name="Nagaprasanna Thatipalli";
//const leadtext=" I am a B.Tech student";
const{name,leadtext}=props;
return(
<div className="container " style={{marginTop:"100px"}}>
            <div className="row text-center align-items-center">
                <div className="col-12 col-sm-6 col-md-6" >
                       <img className="img-fluid rounded-circle w-75 mt-2" src="https://tse1.mm.bing.net/th?id=OIP.CCcOqOyK9cG9HZPrmH7IdAHaQg&pid=Api&rs=1&c=1&qlt=95&w=51&h=114" alt="Nagaprasanna Thatipalli"/>
                    </div>
                 <div className="col-12 col-sm-6 col-lg-6  ">
                     <div className="font-weight-light pt-5 " style={{fontSize:"50px"}}>Hi, I am <span class="text-info">{name}</span></div>
                     <div className="font-weight-light"><h4>{leadtext}</h4></div>
                 </div>
            </div>
        </div>

);
}
export default Title;
