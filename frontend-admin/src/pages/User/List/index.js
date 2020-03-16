import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import api from "~/services/api";

import { TableContainer, TableActions, TableLoading } from "~/components/Table";
import Header from "~/components/Dashboard/Header";

import { UserCell } from "./styles";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await api.get("users");

        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        toast.error("Não foi possível carregar as informações dos usuários");
        setLoading(false);
      }
    }

    loadCategories();
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
                  {user.admin ? "Admin" : "Franqueado"}
                </UserCell>
                <td>
                  <TableActions id={user.id} route="user" />
                </td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      )}
    </>
  );
}
