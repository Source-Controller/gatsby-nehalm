import React, {CSSProperties, FunctionComponent} from "react";
import styled from "styled-components";
import {graphql, useStaticQuery} from "gatsby";
import {SiteMetadata} from "../../utils/models";
import SocialChannelList from "../social-channel-list";
import Avatar from "../avatar";

interface BioProps {
  textAlign: 'left' | 'center' | 'right' | 'justify';
  avatarStyle?: CSSProperties;
  showName?: boolean;
}

const StyledBio = styled.section<Pick<BioProps, 'textAlign'>>`
  margin: auto;
  text-align: ${props => props.textAlign};
  width: 100%;
`;

const AuthorDescription = styled.p`
  margin: 10px 0 13px;

  a {
    color: #000;
    text-decoration: underline;
  }
`;

const AuthorName = styled.h3`
  margin: 10px;
`;

const Bio: FunctionComponent<BioProps> = ({textAlign = 'center', avatarStyle, showName = false}) => {
  const metadata = useStaticQuery<SiteMetadata>(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          author {
            name
            description
            social {
              facebook
              twitter
              linkedin
              instagram
              youtube
              github
              twitch
            }
          }
        }
      }
    }
  `);

  const author = metadata.site.siteMetadata.author;

  return (
    <StyledBio textAlign={textAlign}>
      <Avatar alt={author.name} style={avatarStyle} />
      {showName && <AuthorName>{author.name}</AuthorName>}
      <AuthorDescription dangerouslySetInnerHTML={{__html: author.description}}/>
      <SocialChannelList channels={author.social}/>
    </StyledBio>
  );
};

export default Bio;
