import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    //map will return the brand new array of JSX elements
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // this.props === {songs : state.SongList}

    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//can be any name! but the convention of the name of the function,
//it shows the state as props
const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
};

//위에 있는 State를 Connect를 통해 준당
export default connect(mapStateToProps, { selectSong })(SongList);
