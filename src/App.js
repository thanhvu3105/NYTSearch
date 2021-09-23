import React from "react";

import SearchBar  from "./SearchBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Home from "./Home";
import Articles from "./Articles";





function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          
          <Route path="/results">
            <Articles />
          </Route>
          <Route path="/">
            <Home />    
          </Route>
          

        </Switch>
      </div>
    </Router>

    // <div>
    //   <Home />
    // </div>
    
  );
}

export default App;
