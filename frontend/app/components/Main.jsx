import React from "react"

export var Main = React.createClass({
  render() {
    return (
      <div className="main-container">
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});
