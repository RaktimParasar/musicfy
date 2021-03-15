import { useState, useEffect } from "react";
import { search } from "../utils/SpotifyAPI";
import Playlists from "./Playlists";
import MusicPlayer from "./MusicPlayer";

const Searchbox = ({ playlistsData }) => {
  const [text, setText] = useState("");
  const [isDown, setIsDown] = useState(false);
  const [dropdown, setDropdown] = useState([]);
  const [musicData, setMusicData] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   search(text);
  //   const data = async () => {
  //     setDropdown(await search(text));
  //     setIsDown(true);
  //   };
  //   data();
  // };
  const handleClick = (id) => {
    const dataID = async () => {
      const res = await search(text);
      const newRes = res.filter((el) => el.songID === id);
      setMusicData(newRes);
      setIsDown(false);
    };
    dataID();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
    search(text);
    console.log(text);
    const data = async () => {
      setDropdown(await search(text));
      setIsDown(true);
    };
    data();
  };

  // useEffect(() => {
  //   const data = async () => {
  //     setDropdown(await search(text));
  //     setIsDown(true);
  //   };
  //   data();
  // }, [text]);
  console.log(dropdown);
  return (
    <>
      <div className="search">
        <form className="search__form">
          <input
            className="search__box"
            type="text"
            value={text}
            // onChange={(e) => setText(e.target.value)}
            onChange={handleChange}
            placeholder="search your favourite song"
            required
          />
          <input type="submit" value="Search" className="search__btn" />
        </form>

        {isDown && text && (
          <div className="search__dropdown">
            {dropdown.map((item) => (
              <>
                <div
                  className="dropdown__container"
                  onClick={() => handleClick(item.songID)}
                >
                  <img className="cover" src={item.songImg} alt="cover" />
                  <p className="artists--name">
                    {item.artistName.length > 15
                      ? item.artistName.substring(0, 15) + "..."
                      : item.artistName}
                  </p>
                  <p className="title--left">
                    {item.songName.length > 20
                      ? item.songName.substring(0, 20) + "..."
                      : item.songName}
                  </p>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
      <main>
        <Playlists playlistsData={playlistsData} />
        <MusicPlayer musicData={musicData} />
      </main>
      <footer>
        <p>Musicfy, a simple and handy music player.</p>
      </footer>
    </>
  );
};

export default Searchbox;
