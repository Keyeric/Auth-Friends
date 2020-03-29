import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/login";
import Friends from "./components/friends";
import { PrivateRoute } from "./utils/PrivateRoute";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
