import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Claim from "./pages/Claim/Claim";
import ClaimDetail from "./pages/Claim/ClaimDetail";
import "../src/sass/app.css";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Incident from "./pages/Incident";
import Logout from "./pages/Logout";
import Trips from "./pages/Trips";
import TripCard from "./card/IncidentCard";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/trips" component={Trips} />
          <Route path="/incident" component={Incident} />
          <Route path="/claim" exact component={Claim} />
          <Route path="/claim-detail" exact component={ClaimDetail} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/logout" exact component={Logout} />
        </Switch>
      </Router>
    );
  }
}
export default App;
