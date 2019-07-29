import styled from "styled-components";
import {Container} from "../common";
import Theme from "../../styles/theme";

export const NavContainer = styled.div<{ dark?: boolean}>`
  z-index: 1000;
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

  @media (max-width: ${Theme.breakpoints.sm}) {
    width: 90%;
  }
`;

export const NavMenu = styled.ul<{ mobile?: boolean }>`
  align-self: center;
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${props => props.mobile && `
    @media (max-width: ${Theme.breakpoints.sm}) {
      width: 80%;
      overflow-x: auto;
      overflow-y: hidden;
      mask-image: linear-gradient(to right, transparent, #000 25px, #000 90%, transparent);
    }
  `}
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
