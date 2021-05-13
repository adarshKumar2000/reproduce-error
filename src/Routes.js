/* eslint-disable react/no-array-index-key */
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ProfilePage from "./pages/ProfilePage";
import Resources from "./pages/Resources ";

const renderRoutes = () => (
  <Switch>
     <Route path="/" exact component={HomeScreen} /> 
    <Route path="/profile" exact component={ProfilePage} />
    <Route path="/resources/:coursename" exact component={Resources} />
  </Switch>

);

function Routes() {
  return renderRoutes({});
}

export default Routes;
