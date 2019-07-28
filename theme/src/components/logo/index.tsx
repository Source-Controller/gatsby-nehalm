import React, {FunctionComponent} from "react";
import logo from "../../../assets/nehalist-gatsby.png";
import styled from "styled-components";
import {Link} from "gatsby";

interface LogoProps {
  title: string;
}

const LogoImage = styled.img`
  max-height: 30px;
  margin-right: 45px;
`;

const HomeLink = styled(Link)`
  align-self: center;
`;

const Logo: FunctionComponent<LogoProps> = ({title}) => {
  return <HomeLink to={`/`}><LogoImage src={logo} alt={title}/></HomeLink>;
};

export default Logo;
