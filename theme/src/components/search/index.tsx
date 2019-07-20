import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import {FaSearch} from "react-icons/fa";
import {ResultsTitle, SearchBox, SearchInput, SearchResults} from "./style";
import {NavMenuItem} from "../navigation/style";

export const Search: FunctionComponent = () => {
  const [isOpen, setIsOpen]       = useState<boolean>(false);
  const inputRef                  = useRef<HTMLInputElement>(null);
  const resultListRef             = useRef<HTMLUListElement>(null);
  const searchRef                 = useRef<HTMLDivElement>(null);
  // const resultRefs: HTMLElement[] = [];

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => document.removeEventListener('click', handleClickOutside);
  });

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavMenuItem
        onClick={toggleSearch}
        role={`button`}
        aria-label={`Search`}
        as={`button`}
      >
        <FaSearch/>
      </NavMenuItem>

      {isOpen &&
      <SearchBox open={isOpen} ref={searchRef}>
        <SearchInput placeholder={`Search...`} autoFocus={true} ref={inputRef}/>
        <ResultsTitle>Results ()</ResultsTitle>
        <SearchResults ref={resultListRef}/>
      </SearchBox>
      }
    </>
  );
};
