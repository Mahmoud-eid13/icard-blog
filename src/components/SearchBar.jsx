import { useRouter } from "next/router";
import { useState } from "react";

import styled from "styled-components";

const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
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
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (searchQuery.length < 3) return;
    router.push(
      `/searchResult?key=${searchQuery.replace(/^\s+|\s+$|\s+(?=\s)/g, "")}`
    );
  }

  return (
    <Search>
      <img src="icard.svg" alt="logo" />
      <form>
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Look for something"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e);
            }
          }}
        />
      </form>
      <img src="/socials/search.png" alt="search" onClick={toggleSearch} />
    </Search>
  );
}

export default SearchBar;
