import React, {FunctionComponent} from "react";
import {HomeLink, Nav, NavContainer, NavMenu, NavMenuItem, NavWrapper, SearchContainer} from "./style";
import {MenuItem} from "../../utils/models";
import {Link} from "gatsby";
import {Search} from "../search";

interface NavigationProps {
  title?: string;
  logo: any;
  menu: MenuItem[];
  showSearch: boolean;
  dark?: boolean;
}

const Navigation: FunctionComponent<NavigationProps> = ({title, menu, dark = false, showSearch = true}) => {
  return (
    <NavContainer dark={dark}>
      <Nav>
        <HomeLink to={`/`}>
          {title}
        </HomeLink>
        <NavWrapper>
          <NavMenu>
            {menu.map((item, index) => (
              <Link to={item.path} key={index}>
                <NavMenuItem key={index}>{item.name}</NavMenuItem>
              </Link>
            ))}
          </NavMenu>
          {showSearch &&
          <NavMenu>
            <SearchContainer>
              <Search/>
            </SearchContainer>
          </NavMenu>
          }
        </NavWrapper>
      </Nav>
    </NavContainer>
  );
};

export default Navigation;
