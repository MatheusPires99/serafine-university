import React, { useState, useEffect } from "react";
import { MdChevronRight } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import { toast } from "react-toastify";

import api from "~/services/api";

import University from "~/components/University";
import Sidebar from "~/components/Sidebar";
import { SkeletonMain } from "~/components/Skeleton";

import {
  Content,
  Introduction,
  Documentations,
  DocumentsList,
  DocumentsItem
} from "./styles";

export default function Documentation() {
  const [sideFixed, setSideFixed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({});
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    async function loadDocumentation() {
      try {
        setLoading(true);

        const response = await api.get("documentation/33");

        setCategory(response.data);
        setDocuments(response.data.documents);

        setLoading(false);
      } catch (err) {
        setLoading(false);
        toast.error("Falha ao carregar as documentações.");
      }
    }

    loadDocumentation();
  }, []);

  function listenScrollEvent() {
    if (window.scrollY > 350) {
      setSideFixed(true);
    } else {
      setSideFixed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <University />
      <Content>
        <Sidebar />

        {loading ? (
          <SkeletonMain />
        ) : (
          <Documentations sideFixed={sideFixed}>
            <Introduction>
              <div>
                <aside>
                  <MdChevronRight size={44} color="#ffc72c" />
                  <MdChevronRight size={44} color="#ffc72c" />
                </aside>
                <h1>{category.name}</h1>
              </div>
              <p>{category.description}</p>
            </Introduction>

            <DocumentsList>
              {documents.map(document => (
                <DocumentsItem key={document.id}>
                  <h1>{document.name}</h1>
                  <p>{document.description}</p>
                  <a href={document.link}>
                    <FaFileDownload color="#fff" size={18} />
                    Faça download
                  </a>
                </DocumentsItem>
              ))}
            </DocumentsList>
          </Documentations>
        )}
      </Content>
    </>
  );
}
