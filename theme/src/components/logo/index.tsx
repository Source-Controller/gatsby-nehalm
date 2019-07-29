import React, {FunctionComponent} from "react";
import logo from "../../../assets/nehalist-gatsby.png";
import styled from "styled-components";
import {Link} from "gatsby";
import Theme from "../../styles/theme";

interface LogoProps {
  title: string;
}

const LogoImage = styled.img`
  max-height: 30px;
  margin-right: 45px;

  @media (max-width: ${Theme.breakpoints.sm}) {
    margin-right: 15px;
  }
`;

const HomeLink = styled(Link)`
  align-self: center;
  height: 30px;
`;

const Logo: FunctionComponent<LogoProps> = ({title}) => {
  return <HomeLink to={`/`}><LogoImage src={logo} alt={title}/></HomeLink>;
};

export default Logo;
