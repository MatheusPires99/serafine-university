import React, { useState, useEffect } from "react";
import { MdChevronRight } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";

import University from "~/components/University";
import Sidebar from "~/components/Sidebar";
import { SkeletonMain } from "~/components/Skeleton";

import {
  Content,
  Introduction,
  Documentations,
  DocumentsList,
  DocumentsItem
} from "./styles";

export default function Documentation() {
  const [sideFixed, setSideFixed] = useState(false);
  const [loading, setLoading] = useState(false);

  function listenScrollEvent() {
    if (window.scrollY > 350) {
      setSideFixed(true);
    } else {
      setSideFixed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <University />
      <Content>
        <Sidebar />

        {loading ? (
          <SkeletonMain />
        ) : (
          <Documentations sideFixed={sideFixed}>
            <Introduction>
              <div>
                <aside>
                  <MdChevronRight size={44} color="#ffc72c" />
                  <MdChevronRight size={44} color="#ffc72c" />
                </aside>
                <h1>Gestão de produtos</h1>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat inventore eos velit iure, laudantium, consequatur ex
                aperiam nostrum maxime alias mollitia voluptatem aspernatur.
              </p>
            </Introduction>

            <DocumentsList>
              <DocumentsItem>
                <h1>Documento 01</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum commodi quidem voluptatibus impedit sed voluptatem
                  quasi, ad nostrum, accusamus natus corporis eaque?
                </p>
                <a href="/">
                  <FaFileDownload color="#fff" size={18} />
                  Faça download
                </a>
              </DocumentsItem>
              <DocumentsItem>
                <h1>Documento 01</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum commodi quidem voluptatibus impedit sed voluptatem
                  quasi, ad nostrum, accusamus natus corporis eaque?
                </p>
                <a href="/">
                  <FaFileDownload color="#fff" size={18} />
                  Faça download
                </a>
              </DocumentsItem>
              <DocumentsItem>
                <h1>Documento 01</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum commodi quidem voluptatibus impedit sed voluptatem
                  quasi, ad nostrum, accusamus natus corporis eaque?
                </p>
                <a href="/">
                  <FaFileDownload color="#fff" size={18} />
                  Faça download
                </a>
              </DocumentsItem>
              <DocumentsItem>
                <h1>Documento 01</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum commodi quidem voluptatibus impedit sed voluptatem
                  quasi, ad nostrum, accusamus natus corporis eaque?
                </p>
                <a href="/">
                  <FaFileDownload color="#fff" size={18} />
                  Faça download
                </a>
              </DocumentsItem>
              <DocumentsItem>
                <h1>Documento 01</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum commodi quidem voluptatibus impedit sed voluptatem
                  quasi, ad nostrum, accusamus natus corporis eaque?
                </p>
                <a href="/">
                  <FaFileDownload color="#fff" size={18} />
                  Faça download
                </a>
              </DocumentsItem>
            </DocumentsList>
          </Documentations>
        )}
      </Content>
    </>
  );
}
