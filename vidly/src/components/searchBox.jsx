import React from "react";

const searchBox = (props) => {
  return (
    <input
      id={props.id}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      className="form-control my-3"
      onKeyDown={props.onKeyDown}
      onChange={(e) => props.onChange(e.currentTarget.value)}
    />
  );
};

export default searchBox;
