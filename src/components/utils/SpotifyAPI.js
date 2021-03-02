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
    const data = await res.data.tracks.items.slice(0, 5);
    const topFive = data.map((el) => ({
      artistName: el.artists[0].name,
      songName: el.album.name,
      songImg: el.album.images[0].url,
      musicUrl: el.preview_url,
      songID: el.id,
    }));
    console.log(data);
    return topFive;
  } catch (error) {
    console.log(error);
  }
};
