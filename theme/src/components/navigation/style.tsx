import styled from "styled-components";
import {Link} from "gatsby";
import {Container} from "../common";

export const HomeLink = styled(Link)`
  width: 55px;
  margin-right: 45px;
`;

export const NavContainer = styled.div<{ dark?: boolean}>`
  ${props => props.dark && `
    background-color: #20232a;
    position: sticky;
    top: 0;
    box-shadow: 0 0 3px rgba(0,0,0,.03), 0 3px 46px rgba(0,0,0,.07);
  `};
`;

export const Nav = styled(Container)`
  display: flex;
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
