import { useState, useEffect } from "react";
import { playlists } from "../utils/SpotifyAPI";
import { createBrowserHistory } from "history";
import { search } from "../utils/SpotifyAPI";

// components
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import SearchBox from "./SearchBox";
import Playlists from "./Playlists";
import MusicPlayer from "./MusicPlayer";
let history = createBrowserHistory();

const Home = () => {
  const [playlistsData, setPlaylistsData] = useState([]);
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [musicData, setMusicData] = useState([]);
  const [isDropdown, setIsDropDown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchLoader, setSearchLoader] = useState(false);

  //fetching playlists
  useEffect(() => {
    const playData = async () => {
      setPlaylistsData(await playlists());
      setIsLoading(false);
    };
    playData();
  }, []);

  //mobile navbar toggle
  const toggleMobileNav = () => {
    var element = document.getElementById("mobile-nav");
    if (element.classList.contains("mobile-nav__open")) {
      element.classList.remove("mobile-nav__open");
    } else {
      element.classList.add("mobile-nav__open");
    }
  };

  //navbar logout func
  const handlelogout = () => {
    window.localStorage.removeItem("access_token");
    history.replace("/");
  };

  // searchbox auto search
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    search(input);
    setSearchLoader(true);
  };

  useEffect(() => {
    const data = async () => {
      input && setSearchResult(await search(input));
      setSearchLoader(false);
      input && setIsDropDown(true);
    };
    data();
  }, [input]);

  //search dropdown select song
  const handleClick = (id) => {
    const dataID = async () => {
      const res = await search(input);
      const newRes = res.filter((el) => el.songID === id);
      setMusicData(newRes);
      setIsDropDown(false);
    };
    dataID();
  };

  return (
    <>
      <MobileNavbar toggleMobileNav={toggleMobileNav} />
      <div className="container">
        <Navbar toggleMobileNav={toggleMobileNav} handlelogout={handlelogout} />
        <SearchBox
          handleChange={handleChange}
          handleClick={handleClick}
          input={input}
          searchResult={searchResult}
          isDropdown={isDropdown}
          isLoading={isLoading}
          searchLoader={searchLoader}
        />
        <main>
          <Playlists playlistsData={playlistsData} isLoading={isLoading} />
          <MusicPlayer musicData={musicData} isLoading={isLoading} />
        </main>
        <footer>
          <p>Musicfy, a simple and handy music player.</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
