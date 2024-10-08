import styled from "styled-components";

const CustomeLink = styled.a`
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
`;
function Link({ children }) {
  return (
    <div>
      <CustomeLink>{children}</CustomeLink>
    </div>
  );
}

export default Link;
