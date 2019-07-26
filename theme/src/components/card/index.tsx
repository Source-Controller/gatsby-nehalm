import React, {FunctionComponent} from "react";
import {Link} from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

export interface CardProps {
  title: string;
  path: string;
  featuredImage?: any;
  meta?: string;
  content: string;
  width?: string;
}

const StyledCard = styled(Link)<{ width: string }>`
  display: inline-block;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 1px #e6e6e6, 0 2px 4px #e6e6e6;
  transition: .5s all;
  width: ${props => props.width};
  margin-bottom: 30px;

  &:hover {
    transform: translate3d(0, -5px, 0);
    box-shadow: 0 1px 1px #ccc, 0 4px 4px #ccc;
  }
`;

const FeaturedImage = styled(Img)`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  width: 100%;
  height: 190px;
  background-position: center;
  background-size: cover;
  max-height: 100%;
`;

export const Card: FunctionComponent<CardProps> = ({title, path, featuredImage, content, width = '47%'}) => {
  return (
    <StyledCard to={path} width={width}>
      {featuredImage &&
      <FeaturedImage sizes={featuredImage.childImageSharp.sizes} />
      }
      {title}
      <p dangerouslySetInnerHTML={{__html: content}}/>
    </StyledCard>
  );
};
