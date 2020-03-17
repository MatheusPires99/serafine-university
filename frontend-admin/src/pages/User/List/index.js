import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import api from "~/services/api";

import { TableContainer, TableActions, TableLoading } from "~/components/Table";
import { Header } from "~/components/Dashboard";

import { UserCell } from "./styles";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadUsers() {
    try {
      const response = await api.get("user");

      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      toast.error("Não foi possível carregar as informações dos usuários");
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <Header title="Usuários" route="user" />

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
                  reloadList={loadUsers}
                />
              </tr>
            ))}
          </tbody>
        </TableContainer>
      )}
    </>
  );
}
