import { Route, Switch } from "react-router-dom";
import Faults from "./Views/Faults";
import Employees from "./Views/Employees";
import Watches from "./Views/Watches";

function Router() {
  return (
    <Switch>
      <Route>
        <Route path="/" exact component={() => <h1>Main Page</h1>} />
        <Route path="/employees" component={Employees} />
        <Route path="/faults" component={Faults} />
        <Route path="/watches" component={Watches} />
      </Route>
    </Switch>
  );
}

export default Router;
