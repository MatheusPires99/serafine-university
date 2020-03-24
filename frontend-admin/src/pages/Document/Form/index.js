/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import { Input } from "@rocketseat/unform";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import * as Yup from "yup";

import api from "~/services/api";
import history from "~/services/history";

import { HeaderForm } from "~/components/ActionHeader";
import { FormContainer, FormLoading, Select } from "~/components/Form";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome do documento é obrigatório"),
  description: Yup.string().required("A descrição do documento é obrigatório"),
  link: Yup.string().required("O link do documento é obrigatório")
});

export default function DocumentForm({ match }) {
  const { id } = match.params;

  const [documents, setDocuments] = useState({
    name: null,
    description: null,
    link: null
  });
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    if (id) {
      // eslint-disable-next-line no-inner-declarations
      async function loadDocumentDetails() {
        try {
          setLoading(true);
          const response = await api.get(`/document/${id}`);

          setDocuments(response.data);
          setSelectedCategory(response.data.category);

          setLoading(false);
        } catch (err) {
          toast.error("Não foi possível carregar os dados da página");
        }
      }

      loadDocumentDetails();
    }
  }, [id]);

  useEffect(() => {
    async function loadSelectOptions() {
      try {
        const response = await api.get("category");

        setCategories(response.data.docs);
      } catch (err) {
        toast.error("Falha ao carregar os dados das categorias");
      }
    }

    loadSelectOptions();
  }, []);

  const categoryOptions = categories.map(category => {
    const data = {
      value: category,
      label: category.name
    };

    return data;
  });

  const handleChangeCategory = selectedOption => {
    const { value } = selectedOption;

    setSelectedCategory(value);
  };

  async function handleSubmit({ name, description, link, category_id }) {
    try {
      setButtonLoading(true);

      if (id) {
        category_id = selectedCategory.id;

        const data = { name, description, link, category_id };

        await api.put(`/document/${id}`, data);
      }

      if (!id) {
        category_id = selectedCategory.id;

        const data = { name, description, link, category_id };

        await api.post("/document", data);
      }

      setButtonLoading(false);

      toast.success("Documento salvo com sucesso");
      history.push("/documents");
    } catch (err) {
      setButtonLoading(false);
      toast.error("Não foi possível salvar as alterações");
    }
  }

  return (
    <>
      <HeaderForm
        id={id}
        lowercaseTitle="documentos"
        route="documents"
        buttonLoading={buttonLoading}
      />

      {loading ? (
        <FormLoading />
      ) : (
        <>
          <FormContainer
            id="submit"
            initialData={documents}
            schema={schema}
            onSubmit={handleSubmit}
          >
            <p>Complete todos os campos a baixo:</p>

            <label htmlFor="name">Nome</label>
            <Input name="name" type="text" />

            <label htmlFor="link">Link</label>
            <Input name="link" type="text" />

            <label htmlFor="description">Descrição</label>
            <Input
              multiline
              name="description"
              id="description"
              cols="30"
              rows="10"
            />

            <Select
              name="category.name"
              label="Selecione qual categoria esse documento pertencerá"
              placeholder="Selecione uma opção"
              options={categoryOptions}
              defaultValue={{
                value: selectedCategory.id,
                label: selectedCategory.name
              }}
              onChange={handleChangeCategory}
            />
          </FormContainer>
        </>
      )}
    </>
  );
}

DocumentForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired
};
