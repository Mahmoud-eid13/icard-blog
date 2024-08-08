import styled from "styled-components";

const Section = styled.div`
  direction: rtl;
  width: 31%;
  height: 100%;
  padding: 0;
  img {
    width: 348px;
    height: 176px;
    border-radius: 8px 0px 0px 0px;
    direction: rtl;
  }
  h3 {
    font-family: Cairo;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 40.32px;
    width: 360px;
    height: 40px;
    margin: 0;
    padding: 0;
    top: 0;
  }
  p {
    font-family: Cairo;
    font-size: 1rem;
    font-weight: 400;
    line-height: 26.88px;
    text-wrap: wrap;

    width: 348px;
    height: 81px;
  }
`;
const Date = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 17px;
  span {
    font-family: Cairo;
    font-size: 0.938rem;
    font-weight: 400;
    line-height: 25.2px;
    text-align: left;
    color: #999999;
  }
  button {
    font-family: Cairo;
    font-size: 0.938rem;
    font-weight: 700;
    line-height: 25.2px;
    background: none;
    color: inherit;
    border: none;
    text-decoration: underline;
  }
`;

function BlogCard({ blogObj }) {
  console.log(blogObj);
  return (
    <>
      <Section>
        <img src={blogObj.img} />
        <h3>{blogObj.title}</h3>
        <p>{blogObj.details}</p>
        <Date>
          <span>{blogObj.date}</span>
          <button>Read more</button>
        </Date>
      </Section>
    </>
  );
}

export default BlogCard;
