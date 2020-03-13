import React, { useState, useEffect } from "react";
import { MdAdd, MdSearch, MdEdit, MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

import api from "~/services/api";

import Table from "~/components/Table";
import TableLoading from "~/components/TableLoading";
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
        <Table>
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
                  <button type="button">
                    <MdEdit size={20} color="#2727272" />
                  </button>
                  <button type="button">
                    <MdDelete size={20} color="#2727272" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
