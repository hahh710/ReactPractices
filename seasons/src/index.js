import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props); // because this class extends React.Component, Therefore, to get functionalities of react component need to call super(props).

    this.state = {
      lat: null,
      errorMessage: ""
    };
  }

  //this is BUILT-IN functions
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // this function takes time to bring the information therefore, it needs call back functions
      position => {
        // MUST use setState()!!!
        // Initialization is only EXCEPTION!!
        this.setState({ lat: position.coords.latitude });
      }, // call back function 1, for sucess of above function
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  //this is BUILT-IN functions
  componentDidUpdate() {
    console.log("UPDATED");
  }
  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <div>Laditude: {this.state.lat}</div>;
    } else if (!this.state.lat && this.state.errorMessage) {
      return (
        console.log(this.state.errorMessage),
        (<div>Error : {this.state.errorMessage}</div>)
      );
    } else {
      return <div>Loading....</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
