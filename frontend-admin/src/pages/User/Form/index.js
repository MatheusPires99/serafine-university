import React, { useState, useEffect } from "react";
import { Input } from "@rocketseat/unform";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import * as Yup from "yup";

import api from "~/services/api";
import history from "~/services/history";

import { HeaderForm } from "~/components/Dashboard";
import EditContainer from "~/components/EditContainer";
import FormContainer from "~/components/FormContainer";
import SkeletonLoading from "~/components/SkeletonLoading";

import { ReactSelect } from "./styles";

const schemaNew = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string().required("O e-mail é obrigatório"),
  password: Yup.string()
    .min(6, "A senha deve conter no mínimo 6 digitos")
    .required("A senha é obirgatória"),
  confirmPassword: Yup.string()
    .required("A confirmação de senha é obrigatório")
    .oneOf([Yup.ref("password")], "As senhas não correspondem")
});

const schemaEdit = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string()
});

export default function UserForm({ match }) {
  const { id } = match.params;

  const [users, setUsers] = useState({
    name: null,
    email: null,
    oldPassword: null,
    password: null,
    confirmPassword: null
  });
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const userType = [
    { value: false, label: "Franqueado" },
    { value: true, label: "Administrador" }
  ];

  useEffect(() => {
    if (id) {
      // eslint-disable-next-line no-inner-declarations
      async function loadUserDetails() {
        try {
          setLoading(true);
          const response = await api.get(`/user/${id}`);

          setUsers(response.data);

          setLoading(false);
        } catch (err) {
          toast.error("Não foi possível carregar os dados da página");
        }
      }

      loadUserDetails();
    }
  }, [id]);

  async function handleSubmit({
    name,
    email,
    oldPassword,
    password,
    confirmPassword
  }) {
    try {
      setButtonLoading(true);

      const dataNew = { name, email, password, confirmPassword, admin };
      const dataEdit = {
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
        admin
      };

      if (id) {
        await api.put(`/user/${id}`, dataEdit);
      }

      if (!id) {
        await api.post("/user", dataNew);
      }

      setButtonLoading(false);

      toast.success("Usuário salvo com sucesso");
      history.push("/users");
    } catch (err) {
      setButtonLoading(false);
      toast.error("Não foi possível salvar as alterações");
    }
  }

  const handleChangeAdmin = selectedOption => {
    const { value } = selectedOption;

    setAdmin(value);
  };

  return (
    <>
      <HeaderForm
        id={id}
        lowercaseTitle="usuários"
        route="users"
        buttonLoading={buttonLoading}
      />

      <EditContainer>
        {loading ? (
          <SkeletonLoading />
        ) : (
          <>
            <FormContainer
              id="submit"
              initialData={users}
              schema={id ? schemaEdit : schemaNew}
              onSubmit={handleSubmit}
            >
              <p>Complete todos os campos a baixo:</p>

              <label htmlFor="name">Nome</label>
              <Input name="name" type="text" />

              <label htmlFor="email">E-mail</label>
              <Input name="email" type="email" />

              {id ? (
                <>
                  <label htmlFor="oldPassword">Senha atual</label>
                  <Input name="oldPassword" type="password" />
                </>
              ) : null}

              <label htmlFor="password">{id ? "Nova senha" : "Senha"}</label>
              <Input name="password" type="password" />

              <label htmlFor="confirmPassword">
                {id
                  ? "Digite mais uma vez a nova senha"
                  : "Digite a senha novamente"}
              </label>
              <Input name="confirmPassword" type="password" />

              <label htmlFor="admin">Selecione o tipo do usuário</label>
              <ReactSelect
                name="admin"
                placeholder="Selecione uma opção"
                onChange={handleChangeAdmin}
                options={userType}
                isSearchable={false}
              />
            </FormContainer>
          </>
        )}
      </EditContainer>
    </>
  );
}

UserForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired
};
