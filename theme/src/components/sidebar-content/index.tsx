import React, {FunctionComponent} from "react";
import Bio from "../bio";
import styled from "styled-components";

const StickySidebarContent = styled.div`
  position: sticky;
  top: 30px;
`;

const SidebarContent: FunctionComponent = () => {
  return (
    <StickySidebarContent>
      <Bio textAlign={`justify`} avatarStyle={{float: `left`, margin: `0 20px 5px 0`}}/>
    </StickySidebarContent>
  );
};

export default SidebarContent;
