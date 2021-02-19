import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

function Faults(props: any) {
  const { url } = useRouteMatch();
  console.log(useRouteMatch());
  console.log(props);
  return (
    <div>
      Faults Page goes here
      <Switch>
        <Route path={`${url}/c1`} component={() => <h2>c1</h2>}></Route>
        <Route path={`${url}/c2`} component={() => <h2>c2</h2>}></Route>
      </Switch>
    </div>
  );
}

export default Faults;
