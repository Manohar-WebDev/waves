import { useRef, useState } from "react";
import Song from "./components/Song";
import "./styles/App.scss";
import data from "./data";
import Player from "./components/Player";
import Nav from "./components/Nav";
import Library from "./components/Library";
function App() {
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    audioTime: 0,
    duration: 0,
  });
  const [toggleLibrary, setToggleLibrary] = useState(false);
  const audioRef = useRef();

  const endSongHandler = (e) => {
    const songIndex = songs.findIndex((song) => song.id === currentSong.id);

    const forwardIndex = (songIndex + 1) % songs.length;
    setCurrentSong(songs[forwardIndex]);
    audioRef.current.autoplay = true;
  };

  const timeTrackHandler = (e) => {
    const timeElement = e.target.currentTime;
    const durationElement = e.target.duration;
    const roundedTime = Math.round(e.target.currentTime);
    const roundedDuration = Math.round(e.target.duration);
    const animate = Math.round((roundedTime / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      audioTime: timeElement,
      duration: durationElement,
      animate: animate,
    });
  };
  return (
    <div className="App">
      <Nav toggleLibrary={toggleLibrary} setToggleLibrary={setToggleLibrary} />
      <Library
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        toggleLibrary={toggleLibrary}
        setToggleLibrary={setToggleLibrary}
      />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
      />
      <audio
        ref={audioRef}
        onTimeUpdate={timeTrackHandler}
        onLoadedMetadata={timeTrackHandler}
        onEnded={endSongHandler}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
