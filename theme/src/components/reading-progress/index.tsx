import React, {FunctionComponent, RefObject, useEffect, useState} from "react";
import styled from "styled-components";
import Theme from "../../styles/theme";

interface ReadingProgressProps {
  target: RefObject<HTMLElement>;
  color?: string;
}

const ReadingProgressBar = styled.div<{ color?: string; }>`
  position: sticky;
  height: 5px;
  top: 70px;
  background-color: ${props => props.color ? props.color : Theme.layout.primaryColor};
  z-index: 500;
`;

const ReadingProgress: FunctionComponent<ReadingProgressProps> = ({color, target}) => {
  const [readingProgress, setReadingProgress] = useState<number>(0);
  const scrollListener                        = () => {
    if (!target.current) {
      return;
    }

    const element         = target.current;
    const totalHeight     = element.clientHeight - element.offsetTop - (window.innerHeight);
    const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <ReadingProgressBar style={{width: `${readingProgress}%`}} color={color}/>
  );
};

export default ReadingProgress;
