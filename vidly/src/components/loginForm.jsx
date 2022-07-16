import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
import { Redirect } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async (e) => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      // this.props.history.push("/");
      const { state } = this.props.location;

      window.location = state ? state.from.pathname : "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) {
      // ZRQ
      // Isto faz redirect caso já estejamos logados.
      // Ou seja, caso o USER volte a chamar o /login, e se estiver ja logado, entao é redireccionado
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <h1>Login Form</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </form>
        </div>
      );
    }
  }
}

export default LoginForm;
