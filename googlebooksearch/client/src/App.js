// Here we import all the pages that we're referencing. Informaiton is passed from parent to child
// The react libary is required on all js files within React
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Home, Saved, NoMatch and Nav are all referenced in this file and must, therefore, be referenced.
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// Typically all the top level components are created inside the App conponent
function App() {
  return (
    <Router>
      <div>
        <Nav />
        //The following is a switch statment that routes the to the correct HTML page
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
