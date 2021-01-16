export const inactiveSongsHandler = (index, songs) => {
  songs.map((eachSong, eachIndex) => {
    if (eachIndex === index) {
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
};
