import React, {FunctionComponent} from "react";
import StyledNavigation from "../navigation/navigation";
import {Description, StyledHeader, Title, TitleWrapper} from "./style";
import reactStringReplace from 'react-string-replace';
import Typed from 'react-typed';
import styled from "styled-components";

interface HeaderProps {
  title: string;
  description: string;
  topics: string[];
}

const StyledTopics = styled(Typed)`
  border-bottom: 3px #000 solid;
`;

const Header: FunctionComponent<HeaderProps> = ({title, description, topics = []}) => {
  if (topics.length > 0) {
    description = reactStringReplace(description, '%TOPICS%', () => {
      return (
        <StyledTopics
          strings={topics}
          typeSpeed={50}
          backSpeed={50}
          shuffle={true}
          backDelay={1000}
          loop={true}
        />
      );
    }) as any;
  }

  return (
    <StyledHeader>
      <StyledNavigation transparent={false} title={`Foobar`}/>
      <TitleWrapper>
        <Title>{title}</Title>
        <Description>
          {description}
        </Description>
      </TitleWrapper>
    </StyledHeader>
  );
};

export default Header;
