import React from "react";

import styled from "styled-components";

const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  height: 75px;
`;

const Input = styled.input`
  position: relative;
  width: 500px;
  padding: 10px;
  font-size: 1.5em;
  font-weight: bold;
  text-align: left;
  border: none;
  border-bottom: 1px solid #ddd;
`;

function SearchBar({ toggleSearch }) {
  return (
    <Search>
      <img src="icard.svg" alt="logo" />

      <Input type="text" placeholder="Look for something" />
      <img src="/socials/search.png" alt="search" onClick={toggleSearch} />
    </Search>
  );
}

export default SearchBar;
