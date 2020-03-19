import React from "react";
import PropTypes from "prop-types";

import Spinner from "../Spinner";

import { Button } from "./styles";

export default function SubmitButton({ loading, text }) {
  return <Button type="submit">{loading ? <Spinner /> : text}</Button>;
}

SubmitButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};
