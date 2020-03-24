import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import api from "~/services/api";

import { SkeletonSideBar } from "~/components/Skeleton";

import { Container, CategoryList } from "./styles";

export default function Sidebar() {
  const [fixed, setFixed] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      try {
        setLoading(true);

        const response = await api.get("category");

        setLoading(false);
        setCategories(response.data.docs);
      } catch (err) {
        setLoading(false);
        toast.error("Não foi possível carregar as informações das categorias");
      }
    }

    loadCategories();
  }, []);

  function listenScrollEvent() {
    if (window.scrollY > 350) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <Container fixed={fixed}>
      {loading ? (
        <SkeletonSideBar />
      ) : (
        <CategoryList>
          {categories.map(category => (
            <div key={category.id}>{category.name}</div>
          ))}
        </CategoryList>
      )}
    </Container>
  );
}
