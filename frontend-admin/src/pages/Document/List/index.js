import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import api from "~/services/api";

import { TableContainer, TableActions, TableLoading } from "~/components/Table";
import { Header } from "~/components/Dashboard";

export default function DocumentList() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadDocuments() {
    try {
      const response = await api.get("document");

      setDocuments(response.data);

      setLoading(false);
    } catch (err) {
      toast.error("Não foi possível carregar as informações dos documentos");
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDocuments();
  }, []);

  return (
    <>
      <Header title="Documentos" route="document" />

      {loading ? (
        <TableLoading />
      ) : (
        <TableContainer>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>LINK</th>
              <th>CATEGORIA</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {documents.map(document => (
              <tr key={document.id}>
                <td>#{document.id}</td>
                <td>{document.name}</td>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={document.link}
                  >
                    {document.link}
                  </a>
                </td>
                <td>{document.category.name}</td>
                <TableActions
                  id={document.id}
                  route="document"
                  reloadList={loadDocuments}
                />
              </tr>
            ))}
          </tbody>
        </TableContainer>
      )}
    </>
  );
}
