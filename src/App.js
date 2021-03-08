import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Generate from "./components/Generate";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/redirect" component={Generate} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
