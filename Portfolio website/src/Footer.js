import React from "react";
import {Link} from "react-router-dom";
 function Footer(){
return(
        <div className="container-fluid text-center " style={{backgroundColor:"black"}}>
            <div className="row pt-5"></div>
            <div className="col-12">
                <h2 className="text-light">interested in working
                 with me?</h2>
                <Link to="/contact">
                 <button className="btn btn-outline-light btn-lg">lets talk</button>
                </Link>
             </div>
            <div className="row my-3">
                <div className="col-12 col-sm-4">
                <h5 className="text-info">More Links</h5>
                <a href="/" className="text-light d-block">Blogs</a>
                <Link to="/" className="text-light d-block">Home</Link>
               <a href="/" className="text-light d-block">Projects</a>
                <Link to="/contact" className="text-light d-block">Contact</Link>
                <Link to="/recommendation" className="text-light d-block">write a recommendation
                    <i class="fas fa-heart text-light "></i></Link>
              </div>
                <div className="col-12 col-sm-4 py-3 ">
                    <p className="text-light text-justify">I am pursuing my under graduation in Information Technology from CSI Institute of TechnologyÂ  .

I did my Intermediate from State Board with 72% & High school from State Board with 75%.

I like computer, Because In my schooling days, I have scored High marks in that subject compared to Maths, physics.

My Hobbies is playing shuttle, A Passion for music and teaching kids.

My Strength is takes Initiative to work independently, Good leadership skill, Adaptable to any kind of situation in estranged group & Helping tendency.

My Weakness is I am not comfortable, until I finish my work in the given time & over friendly in nature.

My Short term goal is to get the job in reputed company.

My Long term goal is to become more responsible and knowledgeable personality and on respectable position on my company.

That's all about me!

Thank you very much for giving a great opportunity to introduce my self behind you.


</p>
                </div>
                <div className="col-12 col-sm-4 ">
                    <h5 className="text-info">social</h5>
                    <a href="https://www.linkedin.com/in/vantakala-sai-archana-7461121a4" className="text-light d-block">linkedin<i className="fab fa-linkedin"></i>

                    </a>
                    <a href="https://github.com/saiarchana463" className="text-light d-block">github<i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.sololearn.com/Profile/15477997/?ref=app" className="text-light d-block">sololearn<i className="fas fa-solo-learn "></i></a>
                    <a href="https://stackoverflow.com/users/13220944/im-an-indian" className="text-light d-block">stack overflow<i className="fab fa-stack-overflow pr-1" aria-hidden="true"></i></a>
                    <a href="/" className="text-light d-block">envelop<i className="fas fa-envelope"></i></a>
                </div>
            </div>
            <div className="row">
                <div className="col-12" text-muted>
                <p>copyright © Nagaprasanna Thatipalli - 2020</p></div>
            </div>

        </div>
);
}
export default Footer;
