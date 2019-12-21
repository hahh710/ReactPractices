import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
class App extends React.Component {
  /*
  constructor(props) {
    super(props); // because this class extends React.Component, Therefore, to get functionalities of react component need to call super(props).

    this.state = {
      lat: null,
      errorMessage: ""
    };
  }*/

  //Babel automatically changes this line of code as above code.
  state = { lat: null, errorMessage: "", date: null };

  //this is BUILT-IN functions
  componentDidMount() {
    // GetMonth range starts from 0 -11 0 = Jan 11= Dec
    this.setState({
      date: new Date().getMonth()
    });

    console.log(this.state.date);
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
    console.log("componentDid UPDATED");
  }

  //helper Function to remove conditions in render function.
  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return (
        <SeasonDisplay
          latitude={this.state.lat}
          date={this.state.date}
        ></SeasonDisplay>
      );
    } else if (!this.state.lat && this.state.errorMessage) {
      return (
        console.log(this.state.errorMessage),
        (<div>Error : {this.state.errorMessage}</div>)
      );
    } else {
      return <Spinner message="LOOOOOADING...." />;
    }
  }

  render() {
    return <div className="border">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
