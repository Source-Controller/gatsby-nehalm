import React, {FunctionComponent, useEffect} from "react";
import tocbot from 'tocbot';
import styled from "styled-components";

const StyledNav = styled.nav`
  .toc-list {
    list-style-type: none;
    margin: 0;
    padding: 0;

    .toc-list {
      padding-left: 17px;
      padding-top: 10px;
    }
  }

  .toc-list-item {
    line-height: 1.2em;
    padding-bottom: 10px;

    &:last-child {
      padding-bottom: 0;
    }
  }

  .toc-link {
    color: #808080;
    text-decoration: none;
  }

  .is-active-link {
    color: #404040;
    font-weight: 700;
  }
`;

const Toc: FunctionComponent = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: `.toc`,
      contentSelector: `.post`,
      headingSelector: `h2,h3`,
      scrollSmooth: true,
      scrollSmoothDuration: 1,
    });

    return () => tocbot.destroy();
  });

  return (
    <StyledNav className={`toc`} />
  );
};

export default Toc;
