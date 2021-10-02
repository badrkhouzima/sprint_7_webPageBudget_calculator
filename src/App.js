import React from "react";
//import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

//import Panel from "./Styled";
//import Inputs from "./components/Inputs";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
//import Services from "./components/Services";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BudgetCalcul from "./components/BudgetCalcul"

const App = () => {
  
  
 
 

 
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/home" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/budgetcalcul" component={BudgetCalcul} />
        <Route path="/contact" component={Contact} />

        {/* <Route path="/budgetcalcul" component={BudgetCalcul} /> */}
      </div>
    </Router>
  );
};

export default App;
