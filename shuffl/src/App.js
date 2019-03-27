import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
        <Router>
            <Route path={"/"} exact component={Homepage} />
        </Router>
    );
  }
}

export default App;
