import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  const song = props.song;
  if (song === null) {
    return <div>Select Song</div>;
  }
  console.log(song);
  return (
    <div>
      <h3>Detail : </h3>
      <p>
        Title : {song.title}
        <br />
        Duration : {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
