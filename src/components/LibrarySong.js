const LibrarySong = ({
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
  audioRef,
  isPlaying,
  setIsPlaying,
  songInfo,
  song,
  toggleLibrary,
  setToggleLibrary,
}) => {
  const librarySongHandler = async () => {
    // console.log(e);
    const libraryIndex = songs.findIndex((eachSong) => eachSong.id === song.id);
    //console.log(audioRef);
    await setCurrentSong(songs[libraryIndex]);
    const newSongs = songs.map((eachSong, eachIndex) => {
      if (eachSong.id === song.id) {
        // console.log(eachIndex);
        //console.log(index);
        return {
          ...eachSong,
          active: true,
        };
      } else {
        return {
          ...eachSong,
          active: false,
        };
      }
    });
    audioRef.current.play();
    setIsPlaying(true);

    setSongs(newSongs);
  };
  return (
    <div
      onClick={librarySongHandler}
      className={`library-song ${song.active ? "isSelected" : ""}`}
    >
      <img src={song.cover} alt="pop" />
      <div className="track-list">
        <h2>{song.name}</h2>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
};

export default LibrarySong;
