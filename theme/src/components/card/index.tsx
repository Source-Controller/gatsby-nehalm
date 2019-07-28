import React, {FunctionComponent} from "react";
import {Link} from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

export interface CardProps {
  title: string;
  path: string;
  featuredImage?: any;
  content?: string;
  width?: string;
  meta?: {
    time: string;
    timePretty: string;
    tag: string | null;
  };
  halfImage?: boolean;
  compact?: boolean;
}

const StyledCard = styled(Link)`
  display: block;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 1px #e6e6e6, 0 2px 4px #e6e6e6;
  transition: .5s all;
  width: 100%;
  height: 100%;

  &:hover {
    transform: translate3d(0, -5px, 0);
    box-shadow: 0 1px 1px #ccc, 0 4px 4px #ccc;
  }
`;

const StyledArticle = styled.article<{ width: string }>`
  display: inline-block;
  width: ${props => props.width};
  margin-bottom: 30px;
`;

const FeaturedImage = styled(Img)<Pick<CardProps, 'halfImage'>>`
  background-position: center;
  background-size: cover;
  max-height: 100%;
  max-width: 100%;
  border-top-left-radius: 3px;

  ${props => props.halfImage ? `
    width: 50%;
    float: left;
    margin-right: 30px;
    height: 320px;
    border-bottom-left-radius: 3px;
  ` : `
    height: 190px;
    width: 100%;
    border-top-right-radius: 3px;
  `};
`;

const CardContent = styled.section<{ compact: boolean }>`
  padding: ${props => props.compact ? '10px' : '40px'};

  p {
    margin: 15px 0;
  }

  h2 {
    font-size: 1.2em;
  }
`;

const CardMeta = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: .8em;
  opacity: .8;
  line-height: 1em;
`;

const CardTitle = styled.h2`
  margin: 0;
  padding: 0;
`;

export const Card: FunctionComponent<CardProps> = ({
                                                     title,
                                                     meta,
                                                     path,
                                                     featuredImage,
                                                     content,
                                                     width = '47%',
                                                     halfImage = false,
                                                     compact = false,
                                                   }) => {
  return (
    <StyledArticle width={width}>
      <StyledCard to={path}>
        {/* TODO: Oh boy... */}
        {(featuredImage && featuredImage.fixed) &&
        <FeaturedImage fixed={featuredImage.fixed} halfImage={halfImage}/>
        }
        {(featuredImage && featuredImage.sizes) &&
        <FeaturedImage sizes={featuredImage.sizes} halfImage={halfImage}/>
        }
        <CardContent compact={compact}>
          <header>
            {meta &&
            <CardMeta>
              {meta.tag && <>{meta.tag}</>}
              {meta.time &&
              <time dateTime={meta.time}>{meta.timePretty}</time>
              }
            </CardMeta>
            }
            <CardTitle>{title}</CardTitle>
          </header>
          {content &&
          <p dangerouslySetInnerHTML={{__html: content}}/>
          }
        </CardContent>
      </StyledCard>
    </StyledArticle>
  );
};
