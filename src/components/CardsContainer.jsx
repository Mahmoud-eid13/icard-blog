import styled from "styled-components";
import { background_color, blogs } from "@/app/constants";
import BlogCard from "./BlogCard";

const Cards = styled.div`
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
  h2 {
    font-family: Cairo;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 67.2px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  direction: rtl;
  margin: 40px auto;
  background-color: ${background_color};
  width: 100%;
  min-height: 350px;
  gap: 24px;
`;

function CardsContainer({ blogs }) {
  return (
    <>
      <Cards>
        <h2>Recently Posted</h2>
        <Container>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blogObj={blog} />
          ))}
        </Container>
      </Cards>
    </>
  );
}

export default CardsContainer;
