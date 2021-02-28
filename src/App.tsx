import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Router from "./Router";

const InnerRouter: React.FC = () => {
  return (
    <div>
      <h1>The Inner Route</h1>
      <Switch>
        <Route path="/in/inner1" exact component={() => <h1>Inner Component 1</h1>} />
        <Route path="/in/inner2" exact component={() => <h1>Inner Component 2</h1>} />
      </Switch>
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <Header />
      <Router />
    </HashRouter>
  );
}
