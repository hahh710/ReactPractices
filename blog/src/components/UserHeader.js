import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    //find() method is a built-in functions that it goes through every arrays
    // const user = this.props.users.find(user => user.id === this.props.userId);

    const { user } = this.props;

    if (!user) {
      return <div>Loading...</div>;
    }
    return <div className="header">{user.username}</div>;
  }
}
//(state,ownProps) ownprops is the copy of the props, about to be passed.
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
