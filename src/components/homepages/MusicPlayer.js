import { useEffect, useState, useRef } from "react";

const MusicPlayer = ({ musicData }) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicList, setMusicList] = useState([]);

  const fakeMusic =
    "https://www.bensound.com/bensound-music/bensound-buddy.mp3";

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
            <audio src={el.musicUrl ? el.musicUrl : fakeMusic} ref={audioEl}>
              <source src={el.musicUrl} type="audio/ogg" />
              Your browser does not support the audio element.
            </audio>
            <div className="img-wrap">
              <img src={el.songImg} alt="cover" />
            </div>
            <span className="song-name">{el.songName}</span>
            <span className="song-autor">{el.artistName}</span>
            <div className="controls">
              <button className="play current-btn">
                {!isPlaying ? (
                  <i
                    className="fas fa-play"
                    onClick={() => setIsPlaying(!isPlaying)}
                  ></i>
                ) : (
                  <i
                    class="fas fa-pause"
                    onClick={() => setIsPlaying(!isPlaying)}
                  ></i>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;
