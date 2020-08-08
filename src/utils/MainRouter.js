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
   return (
      <div>
         <NavBar />
         <Switch>
            {routes.map((route, i) => {
               return <Route key={i} exact path={route.path} component={route.component} />;
            })}
         </Switch>
      </div>
   );
};

export default MainRouter;
