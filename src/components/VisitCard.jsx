import Link from "./Link";
import styled from "styled-components";

const Paragraph = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  direction: rtl;
  margin: 40px auto;
  width: 1180px;
  height: 167px;
  top: 1222px;
  left: 130px;
  padding: 43px 45px 44px 44px;
  margin-bottom: 150px;
  border-radius: 24px;
  background-image: linear-gradient(90deg, #292929 0%, #333333 100%);
  p {
    font-family: Cairo;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 40.32px;
    width: 730px;
    height: 80px;
    top: 43px;
    left: 44px;
    color: aliceblue;
  }
  span {
    margin-top: 20px;
  }
`;

function VisitCard() {
  return (
    <>
      <Paragraph>
        <p>
          Get instant delivery of your favourite electronic cards, Visit iCard
          and find what’s new
        </p>
        <span>
          <Link>visit icard</Link>
        </span>
      </Paragraph>
    </>
  );
}

export default VisitCard;
