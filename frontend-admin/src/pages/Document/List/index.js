import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import api from "~/services/api";

import { TableContainer, TableActions, TableLoading } from "~/components/Table";
import { HeaderList } from "~/components/ActionHeader";
import Pagination from "~/components/Pagination";

export default function DocumentList() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(null);
  const [totalDocuments, setTotalDocuments] = useState(null);

  useEffect(() => {
    async function loadDocuments() {
      try {
        const response = await api.get("document", {
          params: {
            q,
            page: currentPage
          }
        });

        setPages(response.data.pages);
        setTotalDocuments(response.data.total);
        setDocuments(response.data.docs);

        setLoading(false);
      } catch (err) {
        toast.error("Não foi possível carregar as informações dos documentos");
        setLoading(false);
      }
    }

    loadDocuments();
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
      <HeaderList title="Documentos" route="document" q={q} setQ={setQ} />

      {loading ? (
        <TableLoading />
      ) : (
        <>
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
                    list={documents}
                    setList={setDocuments}
                  />
                </tr>
              ))}
            </tbody>
          </TableContainer>

          <Pagination
            currentPage={currentPage}
            pages={pages}
            totalDocs={totalDocuments}
            handlePage={handlePage}
          />
        </>
      )}
    </>
  );
}
