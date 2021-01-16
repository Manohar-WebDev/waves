import LibrarySong from "./LibrarySong";

const Library = ({
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
  audioRef,
  isPlaying,
  setIsPlaying,
  songInfo,
  toggleLibrary,
  setToggleLibrary,
}) => {
  return (
    <div className={`library ${toggleLibrary ? "hidden" : ""}`}>
      <h1>Library</h1>
      {songs.map((song) => (
        <LibrarySong
          song={song}
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
          key={song.id}
        />
      ))}
    </div>
  );
};

export default Library;
