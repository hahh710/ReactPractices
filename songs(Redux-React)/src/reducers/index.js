// When there is {} in import state it means that other file didn't export default.
import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No scrubs", duration: "4:05" },
    { title: "Macarena ", duration: "3:34" },
    { title: "Hello", duration: "1:34" },
    { title: "Baby one more time ", duration: "2:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

//combine store with
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
