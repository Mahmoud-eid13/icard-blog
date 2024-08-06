import styled from "styled-components";

import Link from "./Link";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  direction: rtl;
  margin: 40px auto;
  width: 1180px;
  height: 400px;

  img {
    width: 580px;
    height: 400px;
    top: 190px;
    left: 730px;
    gap: 0px;
    border-radius: 24px 0px 0px 0px;
    opacity: 0px;
  }
`;

const Details = styled.div`
  margin: 10px;
  align-items: flex-end;
  h1 {
    font-family: Cairo;
    font-size: 40px;
    font-weight: 700;
    line-height: 67.2px;
  }
  span {
    font-family: Cairo;
    font-size: 24px;
    font-weight: 600;
    line-height: 44.98px;
  }
  p {
    font-family: Cairo;
    font-size: 20px;
    font-weight: 400;
    line-height: 37.48px;
  }
`;

function BlogSection({ title }) {
  return (
    <>
      <Main>
        <Details>
          <h1>{title}</h1>
          <span>iCard Team | 03/07/2024</span>
          <p>
            Video games have come a long way since their humble beginnings.
            Beyond mere entertainment, they now shape our culture, influence our
            behavior, and even impact our cognitive abilities ...
          </p>
          <Link>Read more</Link>
        </Details>
        <img src="../images/Rectangle.png" alt="rectangle" />
      </Main>
    </>
  );
}

export default BlogSection;
