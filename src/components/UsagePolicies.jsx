import styled from "styled-components";

const UsagePolicySec = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 10px auto;
  padding: 10px;
`;
const First = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 300px;
  max-width: 1300px;
  height: 400px;
  direction: rtl;
  justify-content: space-around;
  flex-direction: row;
  margin: auto;
`;
const Usage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 10px auto;
  h2 {
    font-family: Cairo;
    font-size: 32px;
    font-weight: 700;
    line-height: 53.76px;
    text-align: right;
  }
  p {
    font-family: Cairo;
    font-size: 24px;
    font-weight: 600;
    line-height: 40.32px;
    text-align: right;
  }
`;
const How = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;

  margin: 100px auto auto auto;

  h2 {
    font-size: 28px;
    font-weight: 700;
    line-height: 47.04px;
    text-align: right;
  }
  p {
    font-size: 24px;
    font-weight: 600;
    line-height: 40.32px;
    text-align: right;
  }
`;
const Personal = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 10px auto;

  h2 {
    font-size: 28px;
    font-weight: 700;
    line-height: 47.04px;
    text-align: right;
  }
  li {
    font-size: 24px;
    font-weight: 600;
    line-height: 40.32px;
    text-align: right;
  }
  p {
    font-size: 24px;
    font-weight: 600;
    line-height: 40.32px;
    text-align: right;
    margin: 0;
  }
`;
const Security = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 10px auto 200px auto;

  h2 {
    font-size: 28px;
    font-weight: 700;
    line-height: 47.04px;
    text-align: right;
  }
  p {
    font-size: 24px;
    font-weight: 600;
    line-height: 40.32px;
    text-align: right;
  }
  ul p {
    font-size: 24px;
    font-weight: 600;
    line-height: 40.32px;
    text-align: right;
  }
  ul li {
    font-size: 24px;
    font-weight: 600;
    line-height: 40.32px;
    text-align: right;
  }
`;

function UsagePolicies() {
  return (
    <div>
      <UsagePolicySec>
        <First>
          <img src="rafiki.png" alt="usg" />
          <Usage>
            <h2>Usage policies</h2>
            <p>
              iCard takes the privacy of your personal information very
              seriously, and by accepting this Privacy Policy, you expressly
              consent to us collecting, using and disclosing your personal
              information only in accordance with this Privacy Policy. Please
              note that iCard does not sell, rent or license your personal
              information to anyone.
            </p>
          </Usage>
        </First>

        <How>
          <h2>!how iCard gets the personal information of customers</h2>
          <p>
            When opening a new account on the iCard website, we request a set of
            the customer's personal data, as this data must be completed
            correctly to complete the registration process on the site and to
            ensure that there is no false or misleading information.
          </p>
        </How>
        <Personal>
          <h2>Personal information we collect</h2>

          <li>
            Your name, address, e-mail, phone number and other requested
            information.
          </li>
          <li>
            Financial information such as credit/debit card or bank account
            details for some transactions.
          </li>
          <li>
            To ensure the correctness of customer data, we may have to request
            proof of your identity and place of residence, such as: a copy of
            your identity card, passport, driver's license or
            registration/warranty certificate.
          </li>
          <p>
            Note: Failure to provide such information and data may lead to
            restrictions on the use of all iCard services or suspension of the
            customer's account. As for some high value transactions, we may be
            required to provide personal information to the appropriate
            authorities.
          </p>
        </Personal>
        <Security>
          <h2>Security Procedures</h2>
          <p>
            When your registration is completed, you may start using iCard’s
            services which are strictly protected against fraud and abuse
            through the following actions we take:
          </p>
          <p>
            Recording and storing your IP address and login times. Collecting
            usage and access data that allows us to prevent multiple account
            openings or other fraudulent behaviors, or to protect our systems
            against illegal attacks or abuse. We may share such data with
            specialized and trustworthy fraud management services that help us
            analyze the data. We use cookies; which are small text files that
            are stored on a user's computer for record-keeping purposes.
            Information collected and stored through cookies may be matched
            against the personal data we hold on our systems. Depending on the
            information you have provided us, your current verification status
            and the type of transaction you wish to undertake, we may collect
            further information from banks, credit/debit card processing
            services and identity verification services.
          </p>
          <ul>
            <p>
              We obtain your personal and security information from the
              following sources:
            </p>
            <li>
              Information you provide online, on written applications or forms,
              and other information you may provide.
            </li>
            <li>
              Information entered online that may be stored even if you do not
              complete or submit an application.
            </li>
            <li>
              Information from third parties in order to verify your identity or
              to prevent fraud.
            </li>
            <li>
              Information from third parties that you authorize to provide
              information to us.
            </li>
            <li>Information about your account experience and history.</li>
          </ul>
        </Security>
      </UsagePolicySec>
    </div>
  );
}

export default UsagePolicies;
