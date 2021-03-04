import axios from "axios";

const url = "http://localhost:3000";

//spotify get search results
export const search = async (query) => {
  try {
    const res = await axios.get(`${url}/search/${query}`, {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("access_token"),
      },
    });
    const data = await res.data.tracks.items.slice(0, 6);
    const topFive = data.map((el) => ({
      artistName: el.artists[0].name,
      songName: el.album.name,
      songImg: el.album.images[0].url,
      musicUrl: el.preview_url,
      songID: el.id,
    }));
    return topFive;
  } catch (error) {
    console.log(error);
  }
};

//get playlist data
export const playlists = async () => {
  try {
    const res = await axios.get(`${url}/playlists`, {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("access_token"),
      },
    });
    console.log(res.data);
    const data = await res.data.items.slice(0, 5);
    const fivePlaylists = data.map((el) => ({
      playlistsImg: el.images[0].url,
      playlistsName: el.name,
      playlistsTotal: el.tracks.total,
    }));
    return fivePlaylists;
  } catch (err) {}
};
playlists();
