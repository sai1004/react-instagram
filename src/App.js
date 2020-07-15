import React from "react";
import NavBar from "../src/components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/Home";
import Profile from "../src/pages/Profile";
import Signin from "../src/pages/Signin";
import Signup from "../src/pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" component={Home} />

      <Route path="/profile" component={Profile} />

      <Route path="/signin" component={Signin} />

      <Route path="/signup" component={Signup} />
    </BrowserRouter>
  );
}

export default App;
