import React, {FunctionComponent} from "react";
import styled from "styled-components";
import icon from "../../../assets/gatsby-icon.png";
import {graphql, useStaticQuery} from "gatsby";
import {SiteMetadata} from "../../utils/models";
import SocialChannelList from "../social-channel-list";

const BioImage = styled.img`
  max-width: 55px;
  border-radius: 100%;
`;

const StyledBio = styled.section`
  width: 50%;
  margin: auto;
  text-align: center;
`;

const AuthorDescription = styled.p`
  margin: 10px 0 13px;
`;

const Bio: FunctionComponent = () => {
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
    <StyledBio>
      <BioImage src={icon} alt={author.name}/>
      <AuthorDescription>
        {author.description}
      </AuthorDescription>
      <SocialChannelList channels={author.social}/>
    </StyledBio>
  );
};

export default Bio;
