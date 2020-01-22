import React from "react";
// When there is {} in import state it means that other file didn't export default.
import { selectSong } from "../actions";

//
const songsReducer = () => {
  return [
    { title: "No scrubs", duration: "4:05" },
    { title: "Macarena ", duration: "3:34" },
    { title: "Hello", duration: "1:34" },
    { title: "Baby one more time ", duration: "2:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) =>{
    return {
        selectedSong;
    };
};