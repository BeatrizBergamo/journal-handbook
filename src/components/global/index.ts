import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body,html,#root {
    height: 100%;
  }

  textarea:focus, input:focus{
    outline: none;
  }

  /* p,h1,h2,h3,h4,h5,label,span {
    cursor: default;
  } */
`;
