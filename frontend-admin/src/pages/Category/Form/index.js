import React, { useState, useEffect } from "react";
import { Input } from "@rocketseat/unform";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import * as Yup from "yup";

import api from "~/services/api";
import history from "~/services/history";

import { TableContainer, TableActions } from "~/components/Table";
import { HeaderForm } from "~/components/ActionHeader";
import { FormContainer, FormLoading } from "~/components/Form";

import {
  EditContainer,
  DocumentsList,
  DocumentsListHeader,
  Scroll
} from "./styles";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome da categoria é obrigatório"),
  description: Yup.string().required("A descrição da categoria é obrigatória")
});

export default function CategoryForm({ match }) {
  const { id } = match.params;

  const [category, setCategory] = useState({
    name: null,
    description: null
  });
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    if (id) {
      // eslint-disable-next-line no-inner-declarations
      async function loadCategoryDetails() {
        try {
          setLoading(true);
          const responseCategory = await api.get(`/category/${id}`);
          const responseDocument = await api.get(`/category-documents/${id}`);

          setVisible(true);

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
      history.push("/categories");
    } catch (err) {
      toast.error("Algo deu errado ao salvar o item");
    }
  }

  return (
    <>
      <HeaderForm
        id={id}
        lowercaseTitle="categoria"
        route="categories"
        buttonLoading={buttonLoading}
      />

      <EditContainer>
        {loading ? (
          <FormLoading />
        ) : (
          <>
            <FormContainer
              id="submit"
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
            </FormContainer>

            <DocumentsList visible={visible}>
              <DocumentsListHeader>
                <span>Lista de documentos vinculados a essa categoria:</span>
                {documents.length ? (
                  <small>
                    Caso clique no ícone de lixeira o documento será excluido do
                    sistema
                  </small>
                ) : null}
              </DocumentsListHeader>
              <Scroll height={documents.length}>
                {documents.length ? (
                  <TableContainer>
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
                          <TableActions id={document.id} route="document" />
                        </tr>
                      ))}
                    </tbody>
                  </TableContainer>
                ) : (
                  <h3>Nenhum documento vinculado a essa categoria.</h3>
                )}
              </Scroll>
            </DocumentsList>
          </>
        )}
      </EditContainer>
    </>
  );
}

CategoryForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired
};
