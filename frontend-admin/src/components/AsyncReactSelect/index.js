import React, { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";
import PropTypes from "prop-types";

import api from "~/services/api";

export default function AsyncReactSelect({ setSelectedCategory }) {
  const [categories, setCategories] = useState([]);

  async function loadCategories() {
    const response = await api.get("category");

    const data = response.data.map(category => ({
      value: category.id,
      label: category.name
    }));

    setCategories(data);
  }

  useEffect(() => {
    loadCategories();
  }, []);

  const filterRecipients = inputValue => {
    return categories.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadCategoriesOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterRecipients(inputValue));
    }, 100);
  };

  const handleChangeCategory = selectedOption => {
    const { value } = selectedOption;

    setSelectedCategory(value);
  };

  console.tron.log(categories);

  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadCategoriesOptions}
      options={categories}
      onChange={handleChangeCategory}
      placeholder="Selecione uma opção..."
      defaultOptions
      // isSearchable={false}
      theme={theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: "#ffc72c"
        }
      })}
    />
  );
}

AsyncReactSelect.propTypes = {
  setSelectedCategory: PropTypes.func.isRequired
};
