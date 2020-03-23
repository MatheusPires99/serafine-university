import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import api from "~/services/api";

import { TableContainer, TableActions, TableLoading } from "~/components/Table";
import { HeaderList } from "~/components/ActionHeader";

import { UserCell } from "./styles";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await api.get("user", {
          params: {
            q
          }
        });

        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        toast.error("Não foi possível carregar as informações dos usuários");
        setLoading(false);
      }
    }

    loadUsers();
  }, [q]);

  return (
    <>
      <HeaderList title="Usuários" route="user" q={q} setQ={setQ} />

      {loading ? (
        <TableLoading />
      ) : (
        <TableContainer>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th>TIPO DE USUÁRIO</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>#{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <UserCell isAdmin={user.admin}>
                  {user.admin ? "Administrador" : "Franqueado"}
                </UserCell>
                <TableActions
                  id={user.id}
                  route="user"
                  list={users}
                  setList={setUsers}
                />
              </tr>
            ))}
          </tbody>
        </TableContainer>
      )}
    </>
  );
}
