import styled from "styled-components";
import Theme from "../../styles/theme";

export const StyledHeader = styled.header`
  display: flex;
  background: linear-gradient(-45deg, #44596e, #a4cbb8) repeat scroll 0 0 transparent;
  flex-direction: column;
  height: ${Theme.components.header.height};
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

export const Title = styled.h1`
  display: block;
  color: #fff;
  text-shadow: 0 5px 18px rgba(0, 0, 0, .07);
`;

export const Description = styled.h2`
  margin: 0;
  opacity: .85;
`;
