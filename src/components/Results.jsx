import styled from "styled-components";
import Link from "./Link";

import SearchBar from "./SearchBar";

const First = styled.div`
  margin-top: 100px;
  h1 {
    font-family: Cairo;
    font-size: 3rem;
    font-weight: 700;
    line-height: 80.64px;
    text-align: center;
  }
`;

const Container = styled.div`
  height: 944px;
  width: 1180px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 580px;
    height: 293px;
    border-radius: 8px;
  }
`;

const Section = styled.div`
  display: flex;
  height: 293px;
  width: 1180px;
`;

const Details = styled.div`
  width: 580px;
  height: 189px;
  margin: 10px;
  h2 {
    font-family: Cairo;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 67.2px;
  }
  h3 {
    font-family: Cairo;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 44.98px;
  }
  p {
    font-family: Cairo;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 37.48px;
  }
`;

function Results() {
  return (
    <>
      <SearchBar />
      <First>
        <h1>Search Results For ""</h1>
      </First>
      <Container>
        <Section>
          <img src="../images/Rectangle 4.png" alt="one" />
          <Details>
            <h2>iCard Points</h2>
            <h3>iCard Team | 01/07/2024</h3>
            <p>
              My Points is a feature designed for iCard users, so that each user
              gets a number of points when he makes any purchase ...
            </p>
            <span>
              <Link>Read more</Link>
            </span>
          </Details>
        </Section>
        <Section>
          <img src="../images/Rectangle 9.png" alt="one" />
          <Details>
            <h2>iCard new offers</h2>
            <h3>iCard Team | 01/07/2024</h3>
            <p>
              My Points is a feature designed for iCard users, so that each user
              gets a number of points when he makes any purchase ...
            </p>
            <span>
              <Link>Read more</Link>
            </span>
          </Details>
        </Section>
        <Section>
          <img src="../images/Rectangle 8.png" alt="one" />
          <Details>
            <h2>Get to know iCard</h2>
            <h3>iCard Team | 01/07/2024</h3>
            <p>
              My Points is a feature designed for iCard users, so that each user
              gets a number of points when he makes any purchase ...
            </p>
            <span>
              <Link>Read more</Link>
            </span>
          </Details>
        </Section>
      </Container>
    </>
  );
}

export default Results;
