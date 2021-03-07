import { useState, useEffect } from "react";
import { playlists } from "../utils/SpotifyAPI";
import { Link } from "react-router-dom";
import Searchbox from "./Searchbox";
import Loading from "./Loading";

const Home = () => {
  const [playlistsData, setPlaylistsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const playData = async () => {
      setPlaylistsData(await playlists());
      setIsLoading(false);
    };
    playData();
  }, []);

  useEffect(() => {
    const playData = async () => {
      setPlaylistsData(await playlists());
      setIsLoading(false);
    };
    playData();
  }, []);

  const toggleMobileNav = () => {
    var element = document.getElementById("mobile-nav");
    if (element.classList.contains("mobile-nav__open")) {
      element.classList.remove("mobile-nav__open");
    } else {
      element.classList.add("mobile-nav__open");
    }
  };

  const handlelogout = () => {
    window.localStorage.removeItem("access_token");
  };

  return !isLoading ? (
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
        <a className="mobile-navigation--item" href="/home">
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
          <Link to="/" className="logout" onClick={handlelogout}>
            <i className="fas fa-sign-out-alt "></i> Logout
          </Link>
        </header>
        <Searchbox playlistsData={playlistsData} isLoading={isLoading} />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
