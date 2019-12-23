import React from "react";

class SearchBar extends React.Component {
  //event Object is normal Javascript Event that contains information about what just occurs
  onInputChange(event) {
    console.log(event.target.value); //event.target.value- this contains the value of what user just inputed.
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
