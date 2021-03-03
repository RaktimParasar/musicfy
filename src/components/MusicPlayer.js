import { useEffect, useState, useRef } from "react";

const MusicPlayer = ({ musicData }) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    setMusicList(musicData);
  }, [musicData]);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current && audioEl.current.play();
    } else {
      audioEl.current && audioEl.current.pause();
    }
  });
  return (
    <div className="music__card">
      <div className="current-song">
        {musicList.map((el) => (
          <div id={el.songID}>
            <audio src={el.musicUrl} ref={audioEl}></audio>
            <div className="img-wrap">
              <img src={el.songImg} alt="cover" />
            </div>
            <span className="song-name">{el.songName}</span>
            <span className="song-autor">{el.artistName}</span>
            <div className="controls">
              {el.musicUrl === null ? (
                <p>Music not avialable to play</p>
              ) : (
                <button className="play current-btn">
                  {!isPlaying ? (
                    <i
                      className="fas fa-play"
                      onClick={() => setIsPlaying(!isPlaying)}
                    ></i>
                  ) : (
                    <i
                      className="fas fa-pause"
                      onClick={() => setIsPlaying(!isPlaying)}
                    ></i>
                  )}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;
