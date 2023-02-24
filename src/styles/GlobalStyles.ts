import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    object-fit: cover;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  *, input, button {
    font-family: 'Gotham SSm', sans-serif;
  }
`;