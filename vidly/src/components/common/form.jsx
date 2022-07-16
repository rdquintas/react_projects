import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
import _ from "lodash";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false, allowUnknown: true };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) {
      return null;
    }

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  validateProperty = ({ id, value }) => {
    const options = { abortEarly: false, allowUnknown: true };
    var obj;

    if (id === "genre") {
      var index = _.findIndex(this.state.genres, function (o) {
        return o._id === value;
      });

      if (index) {
        obj = this.state.genres[index];
      }
    } else {
      obj = { [id]: value };
    }

    const subSchema = { [id]: this.schema[id] };
    const { error } = Joi.validate(obj, subSchema, options);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.id] = errorMessage;
    } else {
      delete errors[input.id];
    }

    const data = { ...this.state.data };
    if (input.id === "genre") {
      var index = _.findIndex(this.state.genres, function (o) {
        return o._id === input.value;
      });

      if (index) {
        data[input.id] = this.state.genres[index];
      }
    } else {
      data[input.id] = input.value;
    }

    this.setState({ data, errors });
  };

  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };

  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        label={label}
        options={options}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
