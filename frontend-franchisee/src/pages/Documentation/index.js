import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MdChevronRight } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import { toast } from "react-toastify";

import api from "~/services/api";

import University from "~/components/University";
import Sidebar from "~/components/Sidebar";
import { SkeletonMain } from "~/components/Skeleton";
import Footer from "~/components/Footer";

import {
  Content,
  Introduction,
  Documentations,
  DocumentsList,
  DocumentsItem
} from "./styles";

export default function Documentation({ match }) {
  const { id } = match.params;

  const [sideFixed, setSideFixed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({});
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    async function loadDocumentation() {
      try {
        setLoading(true);

        let response;

        if (id) {
          response = await api.get(`documentation/${id}`);
        }

        if (!id) {
          response = await api.get("latest_documantiation");
        }

        setCategory(response.data);
        setDocuments(response.data.documents);

        setLoading(false);
      } catch (err) {
        setLoading(false);
        toast.error("Falha ao carregar as documentações.");
      }
    }

    loadDocumentation();
  }, [id]);

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
                  <a
                    href={document.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFileDownload color="#fff" size={18} />
                    Faça download
                  </a>
                </DocumentsItem>
              ))}
            </DocumentsList>
          </Documentations>
        )}
      </Content>

      <Footer />
    </>
  );
}

Documentation.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired
};
