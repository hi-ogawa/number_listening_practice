import React from "react";

import Repos from "./Repos.jsx";

var Profile = React.createClass({
  getInitialState() {
    return {
      notes: [],
      bio: {
        name: "anyname"
      },
      repos: []
    }
  },
  render() {
    return (
      <div>
        Profile.
        <Repos username={this.props.params.username} bio={this.state.bio} />
      </div>
    )
  }
});

export default Profile;
