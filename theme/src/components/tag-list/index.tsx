import React, {FunctionComponent} from "react";
import {graphql, Link, useStaticQuery} from "gatsby";
import styled from "styled-components";
import {Tag} from "../../utils/models";
import Img from "gatsby-image";
import slugify from "slugify";

const TagContainer = styled.section`
  background-color: #fff;
  border-top: 1px #e5eff5 solid;
  border-bottom: 1px #e5eff5 solid;
  padding: 40px;
  margin-top: 75px;
  margin-bottom: 75px;
  text-align: center;
`;

const TagListTitle = styled.h2`
  margin: 0 0 40px;
`;

const StyledTagList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: center;
`;

const StyledTag = styled.li`
  margin: 0 35px;
  transition: .5s all;

  &:hover {
    transform: scale(1.04);
  }
`;

const TagIcon = styled.img`
  max-height: 55px;
`;

const TagName = styled.span`
  display: block;
`;

const TagList: FunctionComponent = () => {
  const tagsQuery = useStaticQuery<{ allTags: { nodes: Tag[] } }>(graphql`
    query Tags {
      allTags(filter: {featured: { eq: true }}) {
        nodes {
          name
          icon {
            childImageSharp {
              fixed(height: 55) {
                ...GatsbyImageSharpFixed
              }
            }
            extension
            publicURL
          }
        }
      }
    }
  `);
  const tags      = tagsQuery.allTags.nodes;

  return (
    <TagContainer>
      <TagListTitle>Featured Tags</TagListTitle>
      <StyledTagList>
        {tags.map((tag, index) => {
          const icon = tag.icon;
          return (
            <StyledTag key={index}>
              <Link to={`/tag/${slugify(tag.name, {lower: true})}`}>
                {/* gatsby-image doesn't handle SVGs, hence we need to take care of it */}
                {icon.extension !== 'svg'
                  ? <Img fixed={tag.icon.childImageSharp.fixed}/>
                  : <TagIcon src={icon.publicURL} alt={tag.name}/>
                }
                <TagName>{tag.name}</TagName>
              </Link>
            </StyledTag>
          );
        })}
      </StyledTagList>
    </TagContainer>
  );
};

export default TagList;
