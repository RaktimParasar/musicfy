// import { useState, useEffect } from "react";
// import { playlists } from "../utils/SpotifyAPI";
// import Loading from "./Loading";

const Playlists = ({ playlistsData }) => {
  // const [playlistsData, setPlaylistsData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const playData = async () => {
  //     setPlaylistsData(await playlists());
  //     setIsLoading(false);
  //   };
  //   playData();
  // }, []);

  return (
    <div className="main--playlist">
      <h1>Your Top Playlist</h1>
      <div className="albums">
        {playlistsData.map((item) => (
          <div className="album">
            <img className="album__cover" src={item.playlistsImg} alt="cover" />
            <div>
              <div className="album__desc">
                {" "}
                Title: {""}
                {item.playlistsName.length > 10
                  ? `${item.playlistsName.substring(0, 10)} ...`
                  : item.playlistsName}
              </div>
              <div className="album__desc">Tracks: {item.playlistsTotal}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;
