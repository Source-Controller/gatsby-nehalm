import React, {FunctionComponent} from "react";
import {Link} from "gatsby";

export interface CardProps {
  title: string;
  path: string;
  image?: string;
  meta?: string;
  content: string;
}

export const Card: FunctionComponent<CardProps> = ({ title, path, image, meta, content }) => {
  return (
    <Link to={path}>
      {image &&
        <div>image</div>
      }
    </Link>
  );
};
