import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/login";
import Friends from "./components/friends";
import AddFriend from "./components/addFriend";
import { PrivateRoute } from "./utils/PrivateRoute";

// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <PrivateRoute exact path="/newfriend" component={AddFriend} />
          <Route exact path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
