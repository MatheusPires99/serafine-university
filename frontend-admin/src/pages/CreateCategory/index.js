import React, { useState, useEffect } from "react";
import { Input } from "@rocketseat/unform";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdClear, MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import * as Yup from "yup";

import api from "~/services/api";
import history from "~/services/history";

import Table from "~/components/Table";
import { InfoCreateHeader } from "~/components/Info";
import EditContainer from "~/components/EditContainer";
import FormContainer from "~/components/FormContainer";
import SubmitButton from "~/components/Buttons/SubmitButton";
import SkeletonLoading from "~/components/SkeletonLoading";

import { DocumentsList, Scroll, DocumentsListInfo } from "./styles";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome da categoria é obrigatório"),
  description: Yup.string().required("A descrição da categoria é obrigatória")
});

export default function CreateCategory({ match }) {
  const { id } = match.params;

  const [category, setCategory] = useState({
    name: null,
    description: null
  });
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    if (id) {
      // eslint-disable-next-line no-inner-declarations
      async function loadCategoryDetails() {
        try {
          setLoading(true);
          const responseCategory = await api.get(`/category/${id}`);
          const responseDocument = await api.get("/document");

          setCategory(responseCategory.data);
          setDocuments(responseDocument.data);

          setLoading(false);
        } catch (err) {
          toast.error("Não foi possível carregar os dados da página");
        }
      }

      loadCategoryDetails();
    }
  }, [id]);

  async function handleSubmit({ name, description }) {
    try {
      setButtonLoading(true);
      const data = { name, description };

      if (id) {
        await api.put(`/category/${id}`, data);
      }

      if (!id) {
        await api.post("/category", data);
      }

      setButtonLoading(false);

      toast.success("Categoria salva com sucesso");
      history.push("/category");
    } catch (err) {
      toast.error("Não foi possível salvar as alterações");
    }
  }

  return (
    <>
      <InfoCreateHeader>
        <h1>{id ? "Editar categoria" : "Cadastrar categoria"}</h1>
        <div>
          <Link to="/categories">
            <MdClear size={24} color="fff" />
            CANCELAR
          </Link>
        </div>
      </InfoCreateHeader>

      <EditContainer>
        {loading ? (
          <SkeletonLoading />
        ) : (
          <>
            <FormContainer
              initialData={category}
              schema={schema}
              onSubmit={handleSubmit}
            >
              <p>Complete todos os campos a baixo:</p>

              <label htmlFor="name">Nome</label>
              <Input name="name" type="text" />

              <label htmlFor="description">Descrição</label>
              <Input
                multiline
                name="description"
                id="description"
                cols="30"
                rows="10"
              />

              <SubmitButton loading={buttonLoading} text="Salvar" />
            </FormContainer>

            <DocumentsList>
              <DocumentsListInfo>
                <span>Lista de documentos vinculados a essa categoria:</span>
                {id ? (
                  <small>
                    Caso clique no ícone de lixeira o documento será excluido do
                    sistema
                  </small>
                ) : null}
              </DocumentsListInfo>
              <Scroll>
                {id ? (
                  <Table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {documents.map(document => (
                        <tr key={document.id}>
                          <td>#{document.id}</td>
                          <td>{document.name}</td>
                          <td>
                            <button type="button">
                              <MdDelete size={20} color="#2727272" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : (
                  <h3>
                    Após cadastrar uma nova categoria vincule documentos a ela.
                  </h3>
                )}
              </Scroll>
            </DocumentsList>
          </>
        )}
      </EditContainer>
    </>
  );
}

CreateCategory.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired
};
