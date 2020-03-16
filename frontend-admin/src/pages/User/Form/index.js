import React, { useState, useEffect } from "react";
import { Input } from "@rocketseat/unform";
import Select from "react-select";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import * as Yup from "yup";

import api from "~/services/api";
import history from "~/services/history";

import HeaderCreate from "~/components/Dashboard/HeaderCreate";
import EditContainer from "~/components/EditContainer";
import FormContainer from "~/components/FormContainer";
import SubmitButton from "~/components/Buttons/SubmitButton";
import SkeletonLoading from "~/components/SkeletonLoading";

// import { DocumentsList, DocumentsListHeader } from "./styles";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string().required("O e-mail é obrigatório"),
  oldPassword: Yup.string().min(6, "A senha deve ter no mínimo 6 dígitos"),
  password: Yup.string()
    .min(6)
    .when("oldPassword", (oldPassword, field) =>
      oldPassword ? field.required("A senha antiga é obrigatória") : field
    ),
  confirmPassword: Yup.string().when("password", (password, field) =>
    password
      ? field.required("A senha é obrigatória").oneOf([Yup.ref("password")])
      : field
  )
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
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const userType = [
    {
      value: false,
      label: "Franqueado"
    },
    {
      value: true,
      label: "Administrador"
    }
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
    confirmPassword,
    admin
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
        console.log(dataNew);
      }

      setButtonLoading(false);

      toast.success("Usuário salvo com sucesso");
      history.push("/users");
    } catch (err) {
      setButtonLoading(false);
      toast.error("Não foi possível salvar as alterações");
    }
  }

  return (
    <>
      <HeaderCreate id={id} lowercaseTitle="usuários" route="users" />

      <EditContainer>
        {loading ? (
          <SkeletonLoading />
        ) : (
          <>
            <FormContainer
              initialData={users}
              schema={schema}
              onSubmit={handleSubmit}
            >
              <p>Complete todos os campos a baixo:</p>

              <label htmlFor="name">Nome</label>
              <Input name="name" type="text" />

              <label htmlFor="email">E-mail</label>
              <Input name="email" type="email" />

              {id ? (
                <>
                  <label htmlFor="oldPassword">Senha antiga</label>
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

              <Select name="admin" options={userType} />

              <SubmitButton loading={buttonLoading} text="Salvar" />
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
