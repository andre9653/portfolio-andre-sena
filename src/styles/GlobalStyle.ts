import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    overflow: hidden auto;
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
    overflow: hidden auto;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: black;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    outline: none;
    line-height: 0;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  input {
    border: none;
    outline: none;
  }

  textarea {
    border: none;
    outline: none;
  }
`;

export default GlobalStyles;
