import { useState, useEffect } from "react";
import { playlists } from "../utils/SpotifyAPI";

const Playlists = () => {
  const [playlistsData, setPlaylistsData] = useState([]);

  useEffect(() => {
    const playData = async () => {
      setPlaylistsData(await playlists());
    };
    playData();
  }, []);
  console.log(playlistsData);
  return (
    <div className="main--playlist">
      <div>
        <h1>Your Top Playlist</h1>
      </div>
      <div>
        {playlistsData.map((item) => (
          <div className="responsive">
            <div className="gallery">
              <img src={item.playlistsImg} alt="cover" />
              <div className="desc">{item.playlistsName}</div>
              <div className="desc">{item.playlistsTotal}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;
