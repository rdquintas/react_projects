import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = this.props.liked === true ? "fa fa-heart" : "fa fa-heart-o";
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={this.props.onClick}
        className={classes}
      ></i>
    );
  }
}

export default Like;
