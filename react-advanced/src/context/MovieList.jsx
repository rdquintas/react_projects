import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

export default class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("context", this.context);
  }
  render() {
    return (
      <UserContext.Consumer>
        {(userContex) => (
          <div>
            Movie List
            {userContex.currentUser ? userContex.currentUser.name : ""}
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
