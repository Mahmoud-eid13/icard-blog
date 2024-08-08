import styled from "styled-components";

import { primary_color } from "@/app/constants";
import { useState } from "react";
import SearchBar from "./SearchBar";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 75px;
  max-width: 1600px;
  margin: 0 auto;
`;
const NavLinksList = styled.ul`
  display: flex;
  right: 100px;
  list-style-type: none;
  width: 500px;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  justify-content: space-around;
  height: 100px;
`;
const NavItem = styled.li`
  a {
    display: flex;
    margin-top: 20px;
    color: rgb(3, 0, 0);
    padding: 14px 16px;
    text-decoration: none;
    font-size: 1.5rem;
    &:hover {
      text-decoration: underline;
      text-underline-offset: 23px;
      color: ${primary_color};
    }
    &.active {
      background-color: ${primary_color};
    }
  }
`;

const SocialContainer = styled.div`
  display: flex;
  position: relative;
  left: 50px;
  width: 400px;
  font-weight: bolder;
  align-items: center;
  justify-content: space-around;

  height: 100px;
`;

const Icon = styled.a`
  margin: 0 5px;
  color: #333;
  text-decoration: none;
  font-size: 2.2em;
  cursor: pointer;
`;

function AppNav() {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };
  if (searchOpen) return <SearchBar toggleSearch={toggleSearch} />;
  return (
    <header>
      <NavContainer>
        <img src="icard.svg" alt="logo" />
        <NavLinksList>
          <NavItem>
            <a href="/">Home</a>
          </NavItem>
          <NavItem>
            <a href="/about">About Us</a>
          </NavItem>
          <NavItem>
            <a href="/topics">Topics</a>
          </NavItem>
        </NavLinksList>
        <SocialContainer>
          <Icon href="insta">
            <img src="/socials/instagram.png" alt="instagram" />
          </Icon>
          <Icon href="twitter">
            <img src="/socials/twitter.png" alt="twitter" />
          </Icon>
          <Icon href="youtube">
            <img src="/socials/youtube.png" alt="youtube" />
          </Icon>
          <Icon onClick={toggleSearch}>
            <img src="/socials/search.png" alt="search" />
          </Icon>
        </SocialContainer>
      </NavContainer>
    </header>
  );
}

export default AppNav;
