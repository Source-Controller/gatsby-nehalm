export interface DefaultTheme {
  layout: {
    backgroundColor: string;
    primaryColor: string;
    linkColor: string;
  };
  fonts: {
    base: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  components: {
    container: {
      width: string;
    }
    header: {
      height: string;
      background: string;
    };
  };
}
