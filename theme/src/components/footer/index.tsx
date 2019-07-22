import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {Container} from "../common";

const StyledFooter = styled.footer`
  background-color: #fff;
  border-top: 1px #e5eff5 solid;
  max-width: 100%;
  padding: 10px 0;
  margin: 10px 0 0;
`;

const FooterContainer = styled(Container)`
  display: flex;
`;

const Footer: FunctionComponent = () =>  {
  return (
    <StyledFooter>
      <FooterContainer>
        footer
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
