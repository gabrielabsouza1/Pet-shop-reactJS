import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

button,
[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}

p {
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding: 0;
  margin: 0;
}
`;