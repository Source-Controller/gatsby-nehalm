import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {Container} from "../common";

interface SubheaderProps {
  title: string;
  subtitle?: string;
}

const StyledSubheader = styled.div`
  background-color: #000;
  display: flex;
  align-items: center;
  height: 90px;
  margin-bottom: 30px;
`;

const SubheaderContent = styled(Container)`
`;

const SubheaderTitle = styled.h1`
  font-size: 1.2em;
  font-weight: bold;
  color: #fff;
  margin: 0;
`;

const SubheaderSubtitle = styled.small`
  font-weight: normal;
  display: block;
  opacity: .9;
`;

const Subheader: FunctionComponent<SubheaderProps> = ({title, subtitle}) => {
  return (
    <StyledSubheader>
      <SubheaderContent>
        <SubheaderTitle>
          {title}
          <SubheaderSubtitle>{subtitle}</SubheaderSubtitle>
        </SubheaderTitle>
      </SubheaderContent>
    </StyledSubheader>
  );
};

export default Subheader;
