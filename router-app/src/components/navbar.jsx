import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
        {/* <a href="/">Home</a> */}
      </li>
      <li>
        <Link to="/products">Products</Link>
        {/* <a href="/products">Products</a> */}
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
        {/* <a href="/posts/2018/06">Posts</a> */}
      </li>
      <li>
        <Link to="/admin">Admin</Link>
        {/* <a href="/admin">Admin</a> */}
      </li>
    </ul>
  );
};

export default NavBar;
