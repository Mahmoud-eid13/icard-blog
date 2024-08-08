import BlogCard from "./BlogCard";
import styled from "styled-components";
import { background_color, primary_color } from "@/app/constants";
import { useState } from "react";

const Catagories = styled.div`
  display: flex;
  direction: rtl;
  flex-direction: row;
  justify-content: center;
  margin: 80px auto 0px auto;
  max-width: 1180px;
  min-height: 150px;
  gap: 20px;
  button {
    display: block;
    padding: 10px;
    width: 180px;
    height: 56px;
    border-radius: 20px;
    font-family: Cairo;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 37.48px;
    text-align: center;
    background-color: #fff;
    border: 1px solid black;
    &:hover,
    &.active {
      background-color: ${primary_color};
      color: white;
    }
  }
`;

const CardsSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  direction: rtl;
  margin: 40px auto;
  max-width: 1180px;
  width: 100vw;
  min-height: 400px;
  padding: 0px 20px;
  background-color: ${background_color};

  border-radius: 24px;

  h2 {
    font-family: Cairo;
    direction: rtl;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 67.2px;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  direction: rtl;
  margin: 40px auto;

  width: 100%;
  min-height: 350px;
  gap: 24px;
`;

function TopicCardsContainer({ blogs }) {
  const [category, setCategory] = useState(null);

  const filteredBlogs =
    category === null
      ? blogs
      : blogs.filter((blog) => blog.category === category);

  return (
    <>
      <Catagories>
        <button onClick={() => setCategory(null)}>iCard</button>
        <button onClick={() => setCategory("PS games")}>PS games</button>
        <button onClick={() => setCategory("New Card")}>New Card</button>
      </Catagories>
      <CardsSection>
        <h2>{category === null ? "iCard" : category}</h2>
        <Cards>
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blogObj={blog} />
          ))}
        </Cards>
      </CardsSection>
    </>
  );
}

export default TopicCardsContainer;
