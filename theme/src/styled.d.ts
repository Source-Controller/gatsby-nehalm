import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    layout: {
      backgroundColor: string;
      primaryColor: string;
      linkColor: string;
    };
    fonts: {
      base: string;
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
}
