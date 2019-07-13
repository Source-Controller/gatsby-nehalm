import React, {FunctionComponent} from "react";
import StyledNavigation from "../navigation/navigation";
import {Description, StyledHeader, Title, TitleWrapper} from "./style";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: FunctionComponent<HeaderProps> = ({ title, description }) => {
  return (
    <StyledHeader>
      <StyledNavigation transparent={false} title={`Foobar`} />
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
