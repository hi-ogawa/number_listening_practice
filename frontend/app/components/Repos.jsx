import React from "react";

var Repos = React.createClass({
  render() {
    return (
      <div>
        <p>
          username --> {this.props.username}
        </p>
        <p>
          bio.name --> {this.props.bio.name}
        </p>
      </div>
    )
  }
});

export default Repos;
