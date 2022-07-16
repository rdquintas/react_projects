import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // uma que que nao posso colocar async em cima na definicao
    // da funcao (segundo o Mosh, o React nao deixa)
    // entao vou ter que criar esta funcao getUsers com async
    async function getUsers() {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(result.data);
    }

    // e depois chamo-a aqui.
    // é um bocado esquisito no codigo (parece amador) mas tem mesmo que ser
    getUsers();
  });

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
