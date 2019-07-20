import styled from "styled-components";
import Theme from "../../styles/theme";
import Typed from 'react-typed';

export const StyledHeader = styled.header`
  display: flex;
  background: ${Theme.components.header.background};
  flex-direction: column;
  height: ${Theme.components.header.height};
  border-bottom: 2px #ededed solid;
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

export const StyledTopics = styled(Typed)`
  border-bottom: 3px #000 solid;
`;
