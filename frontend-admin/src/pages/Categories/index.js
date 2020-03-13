import React, { useState, useEffect } from "react";
import { MdAdd, MdSearch, MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import api from "~/services/api";

import Table from "~/components/Table";
import TableLoading from "~/components/TableLoading";
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
        toast.error("Não foi possível carregar as informações das categorias");
        setLoading(false);
      }
    }

    loadCategories();
  }, [categories]);

  async function handleDelete(id) {
    try {
      setLoading(true);
      await api.delete(`category/${id}`);

      toast.success(`Documento #${id} deletado com sucesso`);
    } catch (err) {
      toast.error("Ocorreu um erro ao tentar excluir a categoria");
    }
  }

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
        <Table>
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
                  <Link to={`/category/edit/${category.id}`}>
                    <MdEdit size={20} color="#2727272" />
                  </Link>
                  <button
                    onClick={() => handleDelete(category.id)}
                    type="button"
                  >
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
