import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";
import "react-perfect-scrollbar/dist/css/styles.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;

  }

  body, button, input, textarea {
    font: 14px "Roboto", sans-serif;
    color: #272727;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  /* Toastify */
  .foo {
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
  }

  /* React Select */
  .css-yk16xz-control {
    border: 1px solid #eee;
  }

  .css-1hwfws3 {
    padding: 10px;
    height: 44px;
  }

  .css-1uccc91-singleValue {
    padding: 10px 0px;
    color: #272727;
  }
`;
