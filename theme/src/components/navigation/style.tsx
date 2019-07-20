import styled from "styled-components";
import {Link} from "gatsby";
import {Container} from "../common";

export const HomeLink = styled(Link)`
  width: 55px;
  margin-right: 45px;
`;

export const Nav = styled(Container)`
  position: relative;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  white-space: nowrap;
`;

export const NavMenu = styled.ul`
  align-self: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const NavMenuItem = styled.li`
  cursor: pointer;
  display: inline-block;
  border: 0;
  background: transparent;
  color: #fff;
  outline: none;
  opacity: .8;
  text-decoration: none;
  transition: opacity .5s;
  padding: 16px;

  &:hover {
    opacity: 1;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
`;
