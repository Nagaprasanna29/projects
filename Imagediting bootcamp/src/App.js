import React from 'react';
import Navbar from "./Components/Navbar";
import Student from "./Components/Student";
import Addimage from "./Components/Addimage";
import Evaluate from "./Components/Evaluate";
import Writerecommendation from "./Components/Writerecommendation";
import Homepage from "./Components/Homepage"
import Footer from "./Components/Footer";
import {BrowserRouter,Route,Switch} from "react-router-dom";



function App() {
  return (
    
      <BrowserRouter>
      <Navbar/>
      
      <Switch>
      <Route exact path="/" component={Homepage} />  
      <Route exact path="/student" component={Student} />
      <Route exact path="/addimage" component={Addimage} />
      <Route exact path="/evaluate" component={Evaluate} />
      <Route exact path="/write a recommendation" component={Writerecommendation} /> 
          
    
    

      </Switch>
      <Footer/>
      </BrowserRouter>
    
  );
}

export default App;
