import React, {FunctionComponent} from "react";

interface LogoProps {
  title: string;
}

const Logo: FunctionComponent<LogoProps> = ({title}) => {
  return <>{title}</>;
};

export default Logo;
