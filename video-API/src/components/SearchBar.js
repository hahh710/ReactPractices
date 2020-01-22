import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }
  // the Event parameter will get the data
  onInputChange = event => {
    this.setState({
      term: event.target.value
    });
  //Everytime, when the user types a letter, it will be saved in state.term
    console.log(this.state.term);
  };

  //When the user hits the enter key then will
  onFormSubmit = event => {
    //this will prevent the system automatically refreshes the page after the submit.
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label className="label">VideoSearch </label>
            <input
              tyep="text"
              value={this.state.term}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
