import { Link } from "react-router-dom";
import Searchbox from "./Searchbox";

const Home = () => {
  return (
    <div className="container">
      <header>
        <i className="fas fa-headphones-alt"></i>
        <h1>Musicfy</h1>
        <nav className="navigation">
          <div className="navigation__profile">
            <img src="" alt="user profile display" />
            <p>Username</p>
          </div>
          <Link to="/home" className="navigation--item">
            <span>
              <i className="fas fa-home"></i>
            </span>{" "}
            Home
          </Link>
          <Link href="/login" className="navigation--item">
            <span>
              <i className="fas fa-sign-out-alt"></i>
            </span>{" "}
            Logout
          </Link>
        </nav>
      </header>
      <Searchbox />
    </div>
  );
};

export default Home;
