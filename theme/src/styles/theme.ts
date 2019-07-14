import {DefaultTheme} from "styled-components";

const Theme: DefaultTheme = {
  layout: {
    backgroundColor: `#fafafa`,
    primaryColor: `#42566a`,
  },
  fonts: {
    base: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, ` +
      `Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  components: {
    container: {
      width: `1260px`,
    },
    header: {
      height: `440px`,
      background: `linear-gradient(-45deg, #44596e, #a4cbb8) repeat scroll 0 0 transparent`,
    },
  },
};

export default Theme;
