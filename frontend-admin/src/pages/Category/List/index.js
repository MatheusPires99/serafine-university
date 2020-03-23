import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import api from "~/services/api";

import { TableContainer, TableActions, TableLoading } from "~/components/Table";
import { HeaderList } from "~/components/ActionHeader";
import Pagination from "~/components/Pagination";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(null);
  const [totalCategories, setTotalCategories] = useState(null);

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await api.get("category", {
          params: {
            q,
            page: currentPage
          }
        });

        setPages(response.data.pages);
        setTotalCategories(response.data.total);
        setCategories(response.data.docs);

        setLoading(false);
      } catch (err) {
        setLoading(false);
        toast.error("Não foi possível carregar as informações das categorias");
      }
    }

    loadCategories();
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
      <HeaderList title="Categorias" route="category" q={q} setQ={setQ} />

      {loading ? (
        <TableLoading />
      ) : (
        <>
          <TableContainer>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {categories.map(category => (
                <tr key={category.id}>
                  <td>#{category.id}</td>
                  <td>{category.name}</td>
                  <TableActions
                    id={category.id}
                    route="category"
                    list={categories}
                    setList={setCategories}
                  />
                </tr>
              ))}
            </tbody>
          </TableContainer>

          <Pagination
            currentPage={currentPage}
            pages={pages}
            totalDocs={totalCategories}
            handlePage={handlePage}
          />
        </>
      )}
    </>
  );
}
