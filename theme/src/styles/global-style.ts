import {createGlobalStyle} from "styled-components";
import Theme from "./theme";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    box-sizing: border-box;
    background-color: ${Theme.layout.backgroundColor};
  }

  body {
    font-family: ${Theme.fonts.base};
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
