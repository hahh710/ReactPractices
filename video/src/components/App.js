import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  //call Back function
  state = {
    videos: []
  };

  onTermSubmit = term => {
    youtube
      .get("/search", {
        params: {
          q: term
        }
      })
      .then(response => {
        this.setState({
          videos: response.data.items
        });
      });
  };

  render() {
    return (
      <div className="ui container">
        <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />I have
        {this.state.videos.length} videos.
        </div>
        <div>
          <VideoList videos= {this.state.videos}/>
        </div>
      </div>
      
    );
  }
}

export default App;
