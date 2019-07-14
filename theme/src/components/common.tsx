import styled from "styled-components";
import Theme from "../styles/theme";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: ${Theme.components.container.width};
  margin-left: auto;
  margin-right: auto;
`;
