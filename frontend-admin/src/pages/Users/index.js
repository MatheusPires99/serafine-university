import React, { useState, useEffect } from "react";
import { MdAdd, MdSearch } from "react-icons/md";
import { toast } from "react-toastify";

import api from "~/services/api";

import TableContainer from "~/components/Table/TableContainer";
import TableActions from "~/components/Table/TableActions";
import TableLoading from "~/components/Table/TableLoading";
import { InfoHeader } from "~/components/Info";

import { UserCell } from "./styles";

export default function User() {
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
      <InfoHeader>
        <h1>Documentos</h1>
        <div>
          <form action="">
            <input type="text" placeholder="Digite sua busca..." />
            <button type="submit">
              <MdSearch color="#fff" size={24} />
            </button>
          </form>
          <button type="button">
            <MdAdd color="#fff" size={24} />
            NOVO
          </button>
        </div>
      </InfoHeader>

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
