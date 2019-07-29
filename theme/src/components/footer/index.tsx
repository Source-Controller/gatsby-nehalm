import React, {FunctionComponent} from "react";
import {MenuItem} from "../../utils/models";
import {Copyright, DesignBy, FooterContainer, FooterMenuItem, StyledFooter, StyledNav} from "./style";

interface FooterProps {
  menu: MenuItem[];
  owner: string;
}

const Footer: FunctionComponent<FooterProps> = ({menu, owner}) => (
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

export default Footer;
