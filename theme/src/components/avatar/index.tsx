import React, {CSSProperties, FunctionComponent} from "react";
import avatar from "../../../assets/nehalist-gatsby.png";
import styled from "styled-components";

interface AvatarProps {
  alt: string;
  style?: CSSProperties;
}

const StyledAvatar = styled.img`
  max-width: 55px;
  border-radius: 100%;
`;

const Avatar: FunctionComponent<AvatarProps> = ({alt, style}) => {
  return <StyledAvatar src={avatar} alt={alt} style={style} />;
};

export default Avatar;
