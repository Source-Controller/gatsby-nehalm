import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {Container} from "../common";
import {MenuItem} from "../../utils/models";
import {Link} from "gatsby";

const StyledFooter = styled.footer`
  max-width: 100%;
  padding: 10px 0;
  z-index: 700;
  position: relative;
  font-size: .9em;
`;

const FooterContainer = styled(Container)`
  text-align: right;
  line-height: 1.1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.p`
  margin: 0;
`;

const DesignBy = styled.p`
  margin: 0;
  opacity: .8;
  font-size: .8em;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #000;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-right: 25px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const FooterMenuItem = styled(Link)`
  color: #000;
  text-decoration: none;
`;

interface FooterProps {
  menu: MenuItem[];
  owner: string;
}

const Footer: FunctionComponent<FooterProps> = ({menu, owner}) =>  {
  return (
    <StyledFooter>
      <FooterContainer>
        <StyledNav>
          <ul>
            {menu.map((item, index) => (
              <li key={index}>
                <FooterMenuItem to={item.path}>{item.name}</FooterMenuItem>
              </li>
            ))}
          </ul>
        </StyledNav>
        <div>
          <Copyright>
            <strong>{owner}</strong>&nbsp;&copy; {new Date().getFullYear()}
          </Copyright>
          <DesignBy>
            Theme by <a href={`https://nehalist.io`} target={`_blank`} rel={`noopener`}>nehalist.io</a>
          </DesignBy>
        </div>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
