import Link from "next/link";

import styled from "styled-components";

const End = styled.footer`
  display: flex;
  justify-content: center;
  left: 0;
  width: 100%;
  height: 55px;
  padding-top: 17px;
  color: white;
  background-color: rgb(44, 43, 43);
  bottom: 0;

  p {
    text-align: center;
  }
  a {
    color: white;
  }
`;

function Footer() {
  return (
    <End>
      <p>
        All rights reserved for iCard {new Date().getFullYear()}&copy;
        <Link href={"/policies"}>Usage Policies</Link>
      </p>
    </End>
  );
}

export default Footer;
