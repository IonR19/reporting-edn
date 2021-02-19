import { Route, Switch } from "react-router-dom";
import Faults from "./Views/Faults";

function Router() {
  return (
    <Switch>
      <Route>
        <Route path="/" exact component={() => <h1>hi main</h1>} />
        <Route path="/employees" exact component={() => <div>employees</div>} />
        <Route path="/faults" component={Faults}></Route>
      </Route>
    </Switch>
  );
}

export default Router;
