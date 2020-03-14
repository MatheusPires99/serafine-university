import React, { useState, useEffect } from "react";
import { MdAdd, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import api from "~/services/api";

import TableContainer from "~/components/Table/TableContainer";
import TableActions from "~/components/Table/TableActions";
import TableLoading from "~/components/Table/TableLoading";
import { InfoHeader } from "~/components/Info";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await api.get("category");

        setCategories(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        toast.error("Não foi possível carregar as informações das categorias");
      }
    }

    loadCategories();
  }, [categories]);

  return (
    <>
      <InfoHeader>
        <h1>Categorias</h1>
        <div>
          <form action="">
            <input type="text" placeholder="Digite sua busca..." />
            <button type="submit">
              <MdSearch color="#fff" size={24} />
            </button>
          </form>
          <Link to="/category/new">
            <MdAdd color="#fff" size={24} />
            NOVO
          </Link>
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
              <th>DESCRIÇÃO</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <tr key={category.id}>
                <td>#{category.id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>
                  <TableActions id={category.id} route="category" />
                </td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      )}
    </>
  );
}
