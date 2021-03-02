import { useState } from "react";
import MusicPlayer from "../homepages/MusicPlayer";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";

import { search } from "../utils/SpotifyAPI";

const Browse = () => {
  const [text, setText] = useState("");
  const [dropdown, setDropdown] = useState([]);
  const [musicData, setMusicData] = useState([]);
  const [isDown, setIsDown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    search(text);
    const data = async () => {
      setDropdown(await search(text));
      setIsDown(true);
    };
    data();
  };
  const handleClick = (id) => {
    const dataID = async () => {
      const res = await search(text);
      const newRes = res.filter((el) => el.songID === id);
      setMusicData(newRes);
      setIsDown(false);
    };
    dataID();
  };

  return (
    <div className="browse">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__box"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Submit" className="search__btn" />
      </form>

      {isDown && text && (
        <div className="search__dropdown">
          <p className="recent">Recent search</p>
          {dropdown.map((item) => (
            <>
              <div
                className="dropdown__container"
                onClick={() => handleClick(item.songID)}
              >
                <img className="cover" src={item.songImg} alt="cover" />
                <p className="artists--name">{item.artistName}</p>
                <p className="title--left">{item.songName}</p>
              </div>
            </>
          ))}
        </div>
      )}
      <section className="player__reco">
        <div className="top__container">
          <div className="browse__header">
            <h1>Top Recommendation</h1>
            <p className="useremail">25 albums</p>
          </div>
          <div className="reco--grid">
            <div className="responsive">
              <div className="gallery">
                <img src={i1} alt="i1" />
                <div className="desc">Song name</div>
              </div>
            </div>
            <div className="responsive">
              <div className="gallery">
                <img src={i2} alt="i2" />
                <div className="desc">Song name</div>
              </div>
            </div>
            <div className="responsive">
              <div className="gallery">
                <img src={i1} alt="i1" />
                <div className="desc">Song name</div>
              </div>
            </div>
            <div className="responsive">
              <div className="gallery">
                <img src={i2} alt="i2" />
                <div className="desc">Song name</div>
              </div>
            </div>
          </div>
        </div>
        <MusicPlayer musicData={musicData} />
      </section>
    </div>
  );
};

export default Browse;
