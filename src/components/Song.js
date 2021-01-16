const Song = ({ currentSong }) => {
  return (
    <div className = "song-container">
      <img src={currentSong.cover} alt="cover" />
      
      <h2>{currentSong.name}</h2>
      <p>{currentSong.artist}</p>
    </div>
  );
};

export default Song;
