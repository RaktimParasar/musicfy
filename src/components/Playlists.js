import SkeletonElement from "../skeletons/SkeletonElement";
import SkeletonPlaylist from "../skeletons/SkeletonPlaylist";

const Playlists = ({ playlistsData, isLoading }) => {
  return (
    <div className="main--playlist">
      <h1>Your Top Playlist</h1>
      <div className="albums">
        {!isLoading &&
          playlistsData.map((item) => (
            <div className="album">
              <img
                className="album__cover"
                src={item.playlistsImg}
                alt="cover"
              />
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
        {isLoading && [1, 2, 3, 4, 5].map((n) => <SkeletonPlaylist key={n} />)}
      </div>
    </div>
  );
};

export default Playlists;
