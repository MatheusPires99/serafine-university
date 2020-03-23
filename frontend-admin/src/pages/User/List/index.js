import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import api from "~/services/api";

import { TableContainer, TableActions, TableLoading } from "~/components/Table";
import { HeaderList } from "~/components/ActionHeader";
import Pagination from "~/components/Pagination";

import { UserCell } from "./styles";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(null);
  const [totalUsers, setTotalUsers] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await api.get("user", {
          params: {
            q,
            page: currentPage
          }
        });

        setPages(response.data.pages);
        setTotalUsers(response.data.total);
        setUsers(response.data.docs);

        setLoading(false);
      } catch (err) {
        toast.error("Não foi possível carregar as informações dos usuários");
        setLoading(false);
      }
    }

    loadUsers();
  }, [q, currentPage]);

  function handlePage(page) {
    if (page === 0) {
      setCurrentPage(1);
    } else if (page > pages) {
      setCurrentPage(pages);
    } else {
      setCurrentPage(page);
    }
  }

  return (
    <>
      <HeaderList title="Usuários" route="user" q={q} setQ={setQ} />

      {loading ? (
        <TableLoading />
      ) : (
        <>
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

          <Pagination
            currentPage={currentPage}
            pages={pages}
            totalDocs={totalUsers}
            handlePage={handlePage}
          />
        </>
      )}
    </>
  );
}
