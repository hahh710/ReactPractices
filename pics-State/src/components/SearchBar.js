import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  /*
    //event Object is normal Javascript Event that contains information about what just occurs
  onInputChange(event) {
    console.log(event.target.value); //event.target.value- this contains the value of what user just inputed.
  }*/

  onFormSubmit(event) {
    event.preventDefault(); // preventing disappearing of text when page is refreshed
    // DON"T UNDERSTAND...
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={event => this.onFormSubmit(event)} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term} //Input already knows the value, but we overrides from state
              onChange={e => this.setState({ term: e.target.value })}
              // by doing this, we save the value into the state not to grab the data from DOM
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
