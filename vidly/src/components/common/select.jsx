import React from "react";
const Select = ({ name, label, options, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        value={value._id}
        className="form-control"
        onChange={onChange}
        id={name}
      >
        {options.map((option) => (
          <option value={option._id} key={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
