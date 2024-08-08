import styled from "styled-components";

import Link from "./Link";

const MainCards = styled.div`
  min-height: calc(100vh - 75px - 55px);
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  direction: rtl;
  margin: 80px auto;
  top: 0;
  width: 980px;
  height: 390px;
  img {
    width: 250px;
    height: 210px;
  }
  p {
    font-family: Cairo;
    font-size: 2rem;
    font-weight: 600;
    line-height: 53.76px;
    text-align: center;
  }
`;

const VistIcard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  direction: rtl;
  margin: 200px auto;
  border-radius: 24px;
  top: 20px;
  width: 1180px;
  height: 400px;
  background-image: linear-gradient(90deg, #292929 0%, #333333 100%);
  border: 1px solid rgb(124, 23, 23);
  img {
    position: relative;
    width: 542.89px;
    height: 330px;
    bottom: 85px;
  }
  a {
    position: relative;
    bottom: 65px;
  }
`;

const WhyUs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  direction: rtl;
  margin: 200px auto;
  padding: 0;
  direction: rtl;
  gap: 20px;
  width: 1180px;
  height: 475px;
`;
const Secure = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 380px;
  img {
    width: 200px;
    height: 234.5px;
  }
  h3 {
    font-family: Cairo;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 44.98px;
    text-align: center;
  }
  p {
    font-family: Cairo;
    font-size: 1.25;
    font-weight: 600;
    line-height: 33.6px;
    text-align: center;
  }
`;

const AllDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 440px;
  margin-top: 0;
  width: 380px;
  img {
    width: 267px;
    height: 234.5px;
    margin-left: 80px;
  }
  h3 {
    font-family: Cairo;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 44.98px;
    text-align: center;
  }
  p {
    font-family: Cairo;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 33.6px;
    text-align: center;
  }
`;

const Payment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 441px;
  margin-top: 0;
  width: 380px;
  img {
    width: 203px;
    height: 234.5px;
  }
  h3 {
    font-family: Cairo;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 44.98px;
    text-align: center;
  }
  p {
    font-family: Cairo;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 33.6px;
    text-align: center;
  }
`;

function AboutUs() {
  return (
    <>
      <MainCards>
        <Intro>
          <img src="icard.svg" alt="logo" />
          <p>
            A platform for charging various games and electronic cards that
            serve games, entertainment, communications, services, and others
            owned by Innovation Address Company.
          </p>
        </Intro>
        <VistIcard>
          <img src="../images/Cards.png" alt="cards" />
          <Link>visit icard</Link>
        </VistIcard>
        <WhyUs>
          <Secure>
            <img src="../images/Group 8599.png" alt="secure" />
            <h3>Fast and secure code charge</h3>
            <p>
              We guarantee that after completing the purchase process, you will
              receive the code through the “My Requests” field and via e-mail,
              with complete safety and speed of implementation.
            </p>
          </Secure>
          <AllDay>
            <img src="../images/Group 8600.png" alt="secure" />
            <h3>24 hours customer service</h3>
            <p>
              It is a service that aims to help and understand customer
              requirements to improve the level of service and product provided.
            </p>
          </AllDay>
          <Payment>
            <img src="../images/bro.png" alt="secure" />
            <h3>Multiple payment methods</h3>
            <p>
              iCard has several agreements in electronic payment transactions
              and electronic wallets to ensure the security of banking
              information for safe payment methods.
            </p>
          </Payment>
        </WhyUs>
      </MainCards>
    </>
  );
}

export default AboutUs;
