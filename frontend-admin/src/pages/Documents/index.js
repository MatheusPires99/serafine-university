import React, { useState, useEffect } from "react";
import { MdAdd, MdSearch } from "react-icons/md";
import { toast } from "react-toastify";

import api from "~/services/api";

import TableContainer from "~/components/Table/TableContainer";
import TableActions from "~/components/Table/TableActions";
import TableLoading from "~/components/Table/TableLoading";
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
        <TableContainer>
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
                  <TableActions id={document.id} route="document" />
                </td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      )}
    </>
  );
}
