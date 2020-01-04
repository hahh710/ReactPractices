import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    images: []
  };

  // Async 를 사용함으로써 async, await 이라는 사용할수있고
  //await를 사용함으로써 Then() promise를 다른식으로 할수있게 해줄수있다.
  onSearchSubmit = async term => {
    // to fix direction of this,

    //axios.get() function takes 2 arguments
    //1. the address that we want to make a request to
    //2. the object that contains the options to customize the request
    const asyncsResponse = await unsplash
      .get("/search/photos", {
        params: { query: term }
        // params will end up "https://api.unsplash.com/search/photos? query=term"

        /*  This is written in api configuration file.
        headers: {
          Authorization:
            "Client-ID be67707be4cee67eb7af05f6bac04fb22b42b697b6632eb60a05cba8473065ab"
        }
        */
      })
      .then(response => {
        //.then() is called "promise" which method or object that works after the completion of the Asyncronous method.
        console.log(response.data.results);

        // writing this will cause an error, to fix there are 3 ways to do it
        //1. binding it 2. writing arrow function inside of <SearchBar onSubmit={()=>}>
        this.setState({
          images: response.data.results
        });
      });
    //this is same as response
    //console.log(asyncsResponse);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        Found: {this.state.images.length} images
      </div>
    );
  }
}
export default App;
