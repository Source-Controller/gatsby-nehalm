import React, {CSSProperties, FunctionComponent, ReactNode} from "react";
import {CardContent, CardMeta, CardTitle, FeaturedImage, StyledArticle, StyledCard} from "./style";

export interface CardProps {
  title?: string;
  path: string;
  featuredImage?: any;
  content?: string;
  meta?: {
    time: string;
    timePretty: string;
    tag: string | null;
  };
  halfImage?: boolean;
  compact?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

export const Card: FunctionComponent<CardProps> = ({
                                                     title,
                                                     meta,
                                                     path,
                                                     featuredImage,
                                                     content,
                                                     halfImage = false,
                                                     compact = false,
                                                     style,
                                                     children,
                                                   }) => (
  <StyledArticle style={style}>
    <StyledCard to={path}>
      {/* TODO: Oh boy... */}
      {(featuredImage && featuredImage.fixed) &&
      <FeaturedImage fixed={featuredImage.fixed} halfImage={halfImage}/>
      }
      {(featuredImage && featuredImage.sizes) &&
      <FeaturedImage sizes={featuredImage.sizes} halfImage={halfImage}/>
      }
      <CardContent compact={compact}>
        {children}
        <header>
          {meta &&
          <CardMeta>
            {meta.tag && <>{meta.tag}</>}
            {meta.time &&
            <time dateTime={meta.time}>{meta.timePretty}</time>
            }
          </CardMeta>
          }
          {title &&
          <CardTitle>{title}</CardTitle>
          }
        </header>
        {content &&
        <p dangerouslySetInnerHTML={{__html: content}}/>
        }
      </CardContent>
    </StyledCard>
  </StyledArticle>
);
