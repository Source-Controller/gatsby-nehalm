import styled from "styled-components";
import {Link} from "gatsby";
import Theme from "../../styles/theme";
import Img from "gatsby-image";
import {CardProps} from "./index";

export const StyledCard = styled(Link)`
  display: block;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 1px #e6e6e6, 0 2px 4px #e6e6e6;
  transition: .5s all;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:hover {
    transform: translate3d(0, -5px, 0);
    box-shadow: 0 1px 1px #ccc, 0 4px 4px #ccc;
  }
`;

export const StyledArticle = styled.article`
  display: inline-block;
  width: 100%;

  @media (max-width: ${Theme.breakpoints.sm}) {
    grid-area: unset !important;
  }
`;

export const FeaturedImage = styled(Img)<Pick<CardProps, 'halfImage'>>`
  background-position: center;
  background-size: cover;
  max-width: 100%;
  border-top-left-radius: 3px;

  ${props => props.halfImage ? `
    width: 50%;
    float: left;
    margin-right: 30px;
    height: 320px;
    border-bottom-left-radius: 3px;

    @media (max-width: ${Theme.breakpoints.sm}) {
      width: 100%;
      float: none;
      height: 190px;
    }
  ` : `
    height: 190px;
    max-height: 190px;
    width: 100%;
    border-top-right-radius: 3px;
  `};
`;

export const CardContent = styled.section<{ compact: boolean }>`
  padding: ${props => props.compact ? '10px' : '40px'};

  p {
    margin: 15px 0;
  }

  h2 {
    font-size: 1.2em;
  }
`;

export const CardMeta = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: .8em;
  opacity: .8;
  line-height: 1em;
`;

export const CardTitle = styled.h2`
  margin: 0;
  padding: 0;
`;
