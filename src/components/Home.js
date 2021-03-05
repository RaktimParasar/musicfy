import { Link } from "react-router-dom";
import Searchbox from "./Searchbox";

const Home = () => {
  const toggleMobileNav = () => {
    var element = document.getElementById("mobile-nav");
    if (element.classList.contains("mobile-nav__open")) {
      element.classList.remove("mobile-nav__open");
    } else {
      element.classList.add("mobile-nav__open");
    }
  };

  return (
    <>
      <div className="mobile-nav" id="mobile-nav">
        <div className="mobile-nav--header">
          <h1 className="logo">
            <i className="fas fa-headphones-alt"></i> Musicfy
          </h1>
          <div className="close--btn" onClick={toggleMobileNav}>
            <button>
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <a className="mobile-navigation--item" href="##">
          <i className="fas fa-home"></i> Home
        </a>
      </div>
      <div className="container">
        <header>
          <h1 className="logo">
            <i className="fas fa-headphones-alt"></i> Musicfy
          </h1>
          <nav className="navigation">
            <a className="navigation--item" href="/home">
              <i className="fas fa-home"></i> Home
            </a>
          </nav>
          <div className="menu-button" onClick={toggleMobileNav}>
            <button>
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <Link to="/" className="logout">
            <i className="fas fa-sign-out-alt "></i> Logout
          </Link>
        </header>
        <Searchbox />
      </div>
    </>
  );
};

export default Home;
