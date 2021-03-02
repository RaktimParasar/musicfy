const Login = () => {
  return (
    <div className="login__container">
      <h1 className="login__header">Musicfy</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Log into your account
      </p>
      <div className="btn__container">
        <a href="http://localhost:5000/authorize">
          <button className="spotify__login">Login with spotify</button>
        </a>
      </div>
    </div>
  );
};

export default Login;
