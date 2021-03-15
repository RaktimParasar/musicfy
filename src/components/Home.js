import { useState, useEffect } from "react";
import { playlists } from "../utils/SpotifyAPI";
import { createBrowserHistory } from "history";
import Searchbox from "./Searchbox";
import SkeletonSearch from "../skeletons/SkeletonSearch";
import SkeletonPlaylist from "../skeletons/SkeletonPlaylist";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
let history = createBrowserHistory();

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
    history.replace("/");
  };

  return (
    <>
      <MobileNavbar toggleMobileNav={toggleMobileNav} />
      <div className="container">
        <Navbar toggleMobileNav={toggleMobileNav} handlelogout={handlelogout} />
        {!isLoading && <Searchbox playlistsData={playlistsData} />}
        {isLoading && (
          <>
            <SkeletonSearch />
            {[1, 2, 3, 4, 5].map((n) => (
              <SkeletonPlaylist key={n} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
