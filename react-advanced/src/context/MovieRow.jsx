import React, { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";
function MovieRow(props) {
  const userContex = useContext(UserContext);
  const cartContex = useContext(CartContext);

  console.log("userContex", userContex);
  console.log("cartContex", cartContex);
  return (
    <div>
      Movie Row
      {userContex.currentUser ? userContex.currentUser.name : ""}
    </div>
  );
}

export default MovieRow;
