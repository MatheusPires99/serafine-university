import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import api from "~/services/api";

import { DeleteButton, ActionButtons } from "./styles";

export default function TableActions({ id, route }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleDelete() {
    try {
      await api.delete(`/${route}/${id}`);

      toast.success(`Item #${id} deletado com sucesso`);
    } catch (err) {
      toast.error("Ocorreu um erro ao tentar excluir a item");
    }
  }

  return (
    <>
      {visible ? (
        <DeleteButton>
          <span>Tem certeza que deseja deletar?</span>
          <div>
            <button onClick={() => handleDelete(id)} type="button">
              Deletar
            </button>
            <button onClick={handleToggleVisible} type="button">
              Cancelar
            </button>
          </div>
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
    </>
  );
}

TableActions.propTypes = {
  id: PropTypes.number.isRequired,
  route: PropTypes.string.isRequired
};