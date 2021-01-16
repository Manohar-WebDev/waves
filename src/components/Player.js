import {
  faAngleLeft,
  faAngleRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Player = ({
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
  audioRef,
  isPlaying,
  setIsPlaying,
  songInfo,
}) => {
  const playSongHandler = () => {
    if (!isPlaying) {
      audioRef.current.play();
      // console.log(audioRef);
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }
  };
  const formatTimeHandler = (time) => {
    if (isNaN(time)) {
      return "0.00";
    } else {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    }
  };
  // SDsdsdsdsds
  console.log(Math.round(songInfo.audioTime));

  const trackAnimation = {
    transform: `translateX(${Math.round(songInfo.animate)}%)`,
  };

  const updateInputHandler = (e) => {
    //console.log(songInfo.audioTime);
    audioRef.current.currentTime = e.target.value;
  };

  const skipTrackHandler = (direction) => {
    const songIndex = songs.findIndex((song) => song.id === currentSong.id);
    // console.log(songIndex);
    if (direction === "skip-forward") {
      const forwardIndex = (songIndex + 1) % songs.length;
      setCurrentSong(songs[forwardIndex]);
      //console.log(audioRef);
      setIsPlaying(true);
      audioRef.current.autoplay = true;
    }
    if (direction === "skip-backward") {
      const backwardIndex = songIndex === 0 ? songs.length - 1 : songIndex - 1;
      setCurrentSong(songs[backwardIndex]);
      setIsPlaying(true);
      audioRef.current.autoplay = true;
    }
  };
  return (
    <div className="Player">
      <div className="time-control">
        <p>{formatTimeHandler(songInfo.audioTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right,${currentSong.color[1]},${currentSong.color[0]})`,
          }}
          className="track"
        >
          <input
            onChange={updateInputHandler}
            min={0}
            value={songInfo.audioTime}
            max={songInfo.duration || 0}
            type="range"
          />
          <div style={trackAnimation} className="animate-track"></div>
        </div>
        <p>{formatTimeHandler(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-backward")}
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          icon={faAngleRight}
          size="2x"
        />
      </div>
    </div>
  );
};

export default Player;
