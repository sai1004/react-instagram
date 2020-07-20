import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../components/Navbar";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

let routes = [
  { path: "/", component: Home },
  { path: "/profile", component: Profile },
  { path: "/signin", component: Signin },
  { path: "/signup", component: Signup },
];

const MainRouter = () => {
  const getRoutes = routes.map((route) => {
    return <Route exact path={route.path} component={route.component} />;
  });

  return (
    <div>
      <NavBar />
      <Switch>{getRoutes}</Switch>
    </div>
  );
};

export default MainRouter;
