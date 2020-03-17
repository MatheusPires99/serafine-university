import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import api from "~/services/api";

import { Container, DeleteButton, ActionButtons } from "./styles";

export default function TableActions({ id, route, reloadList }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleDelete() {
    try {
      await api.delete(`/${route}/${id}`);

      reloadList();

      toast.success(`Item #${id} deletado com sucesso`);
    } catch (err) {
      toast.error("Ocorreu um erro ao tentar excluir a item");
    }
  }

  return (
    <Container>
      {visible ? (
        <DeleteButton>
          <button onClick={() => handleDelete(id)} type="button">
            Deletar
          </button>
          <button onClick={handleToggleVisible} type="button">
            Cancelar
          </button>
        </DeleteButton>
      ) : (
        <ActionButtons>
          <Link to={`/${route}/edit/${id}`}>
            <MdEdit size={20} color="#2727272" />
          </Link>
          <button onClick={() => handleToggleVisible(id)} type="button">
            <MdDelete size={20} color="#2727272" />
          </button>
        </ActionButtons>
      )}
    </Container>
  );
}

TableActions.propTypes = {
  id: PropTypes.number.isRequired,
  route: PropTypes.string.isRequired,
  reloadList: PropTypes.func.isRequired
};
