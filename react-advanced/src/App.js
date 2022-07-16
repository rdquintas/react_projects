import React, { Component, Fragment } from "react";
import "./App.css";
import Movie from "./hoc/Movie";
import Counter from "./hooks/Counter";
import Users from "./hooks/Users";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import CartContext from "./context/cartContext";
import Login from "./context/Login";

export default class App extends Component {
  state = { currentUser: { name: null } };

  handleLoggedIn = (userName) => {
    console.log("Getting the user: " + userName);
    const user = { name: "Ricardo" };
    this.setState({ currentUser: user });
  };

  render() {
    return (
      <Fragment>
        <CartContext.Provider
          value={{
            cart: [],
          }}
        >
          <UserContext.Provider
            value={{
              currentUser: this.state.currentUser,
              onLoggedIn: this.handleLoggedIn,
            }}
          >
            <Movie />
            <Counter />
            <Users />
            <Login />
            <MoviePage />
          </UserContext.Provider>
        </CartContext.Provider>
      </Fragment>
    );
  }
}
