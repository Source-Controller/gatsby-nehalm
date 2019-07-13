import styled from "styled-components";
import {Link} from "gatsby";
import {Container} from "../common";

export const HomeLink = styled(Link)`
  width: 55px;
`;

export const Nav = styled(Container)`
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  white-space: nowrap;
`;

export const NavMenu = styled.ul`
  align-self: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const NavMenuItem = styled.li`
  display: inline-block;
`;
