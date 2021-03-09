import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Login from "./components/Login";
import Generate from "./components/Generate";
import Home from "./components/Home";

const checkAuth = () => {
  const token = localStorage.getItem("access_token");
  console.log("access: " + token);
  if (!token) {
    console.log("No token");
    return false;
  }
};

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      checkAuth() ? <Component {...props} /> : <Redirect to={"/"} />
    }
  />
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/redirect" component={Generate} />
        <AuthRoute exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
