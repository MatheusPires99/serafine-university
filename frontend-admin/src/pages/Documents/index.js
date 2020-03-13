import React, { useState, useEffect } from "react";
import { MdAdd, MdSearch, MdEdit, MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

import api from "~/services/api";

import Table from "~/components/Table";
import TableLoading from "~/components/TableLoading";
import { InfoHeader } from "~/components/Info";

export default function Documents() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await api.get("document");

        setDocuments(response.data);
        setLoading(false);
      } catch (err) {
        toast.error("Não foi possível carregar as informações dos documentos");
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
              <th>DESCRIÇÃO</th>
              <th>CATEGORIA</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {documents.map(document => (
              <tr key={document.id}>
                <td>#{document.id}</td>
                <td>{document.name}</td>
                <td>{document.description}</td>
                <td>{document.category.name}</td>
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
