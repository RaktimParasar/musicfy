import { useEffect, useState, useRef } from "react";
import SkeletonMusicPlayer from "../skeletons/SkeletonMusicPlayer";

const MusicPlayer = ({ musicData, isLoading }) => {
  const audioEl = useRef(null);
  const [isPlaying] = useState(false);
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
    <div className="main--player">
      {!isLoading &&
        (musicList.length === 0 ? (
          <div className="current-song">
            <div className="img-wrap">
              <img
                src="https://www.bensound.com/bensound-img/slowmotion.jpg"
                alt="cover"
              />
            </div>
            <span className="song-name">Seach a song to play</span>
          </div>
        ) : (
          <div className="current-song">
            {musicList.map((el) => (
              <div id={el.songID}>
                <div className="img-wrap">
                  <img src={el.songImg} alt="cover" />
                </div>
                <div className="current__song--details">
                  <span className="song-name">
                    {el.songName.length > 25 ? (
                      <marquee direction="left">{el.songName}</marquee>
                    ) : (
                      <>{el.songName}</>
                    )}
                  </span>
                  <span className="song-autor">
                    {el.artistName > 25 ? (
                      <marquee direction="left">{el.artistName}</marquee>
                    ) : (
                      <>{el.artistName}</>
                    )}
                  </span>
                </div>
                <div className="controls">
                  {el.musicUrl === null ? (
                    <p>Music not avialable to play</p>
                  ) : (
                    <audio src={el.musicUrl} ref={audioEl} controls></audio>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      {isLoading && <SkeletonMusicPlayer />}
    </div>
  );
};

export default MusicPlayer;
