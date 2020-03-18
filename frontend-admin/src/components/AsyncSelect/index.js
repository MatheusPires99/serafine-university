import React, { useRef, useEffect, useState } from "react";
import AsyncSelect from "react-select/async";
import { useField } from "@rocketseat/unform";

import api from "~/services/api";

export default function RecipientInput({ ...res }) {
  const [categories, setCategories] = useState([]);
  const selectRef = useRef(null);
  const { registerField } = useField("categories");

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get("category");

      const data = response.data.map(category => ({
        value: category.id,
        label: category.name
      }));

      setCategories(data);
    }
    loadCategories();
  }, []);

  useEffect(() => {
    registerField({
      name: "category_id",
      ref: selectRef.current,
      path: "select.state.value.value"
    });
  }, [selectRef, registerField]);

  const handleInputChange = newValue => {
    const inputValue = newValue.replace(/\W/g, "");
    return inputValue;
  };

  const filterCategories = inputValue => {
    return categories.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadCategories = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterCategories(inputValue));
    }, 100);
  };

  return (
    <label htmlFor="categories">
      <AsyncSelect
        cacheOptions
        id="categories"
        ref={selectRef}
        classNamePrefix="react-select"
        loadOptions={loadCategories}
        onInputChange={handleInputChange}
        placeholder=""
        {...res}
      />
    </label>
  );
}
