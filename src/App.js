import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Login from "./components/Login";
import Generate from "./components/Generate";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const checkAuth = () => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    return false;
  } else {
    return true;
  }
};

// private route auth
const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      checkAuth() ? <Component {...props} /> : <Redirect to={"/"} />
    }
  />
);

//Public routes auth
const PublicAuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !checkAuth() ? <Component {...props} /> : <Redirect to={"/home"} />
    }
  />
);

const App = () => {
  return (
    <Router>
      <Switch>
        <PublicAuthRoute exact path="/" component={Login} />
        <PublicAuthRoute exact path="/redirect" component={Generate} />
        <AuthRoute exact path="/home" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
