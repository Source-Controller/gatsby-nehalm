import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {HomeLink, Nav, NavMenu, NavMenuItem, NavWrapper} from "./style";
import {StyleProps} from "../../utils/models";

interface NavigationProps extends StyleProps {
  title?: string;
  transparent: boolean;
}

const Navigation: FunctionComponent<NavigationProps> = (props) => {
  return (
    <Nav className={props.className}>
      <HomeLink to={`/`}>
        Home
      </HomeLink>
      <NavWrapper>
        <NavMenu>
          <NavMenuItem>foo</NavMenuItem>
        </NavMenu>
      </NavWrapper>
    </Nav>
  );
};

const StyledNavigation = styled(Navigation)<{transparent: boolean}>`
  display: flex;
  color: ${props => props.transparent ? '#ff0000' : '#ffaaaa'};
`;

export default StyledNavigation;
