import { createBrowserHistory } from "history";

let history = createBrowserHistory();

const NotFound = () => {
  const handleClick = () => {
    if (window.localStorage.getItem("access_token")) {
      history.push("/home");
      window.location.reload(false);
    } else {
      history.push("/");
      window.location.reload(false);
    }
  };

  return (
    <div className="login__container">
      <h1>
        <i className="fas fa-exclamation-triangle"></i> Page not found
      </h1>
      <p className="lead">
        Sorry, The page you are looking for might be removed or is temporarily
        unavailable.
      </p>
      <div className="btn__container">
        <button className="back__btn" onClick={handleClick}>
          Go back to{" "}
          {window.localStorage.getItem("access_token")
            ? "Home Page"
            : "Login Page"}
        </button>
      </div>
    </div>
  );
};

export default NotFound;
