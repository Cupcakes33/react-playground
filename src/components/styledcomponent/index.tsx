import React from "react";
import styled from "styled-components";

export default function Styled() {
  return <Container>{/* <div>Styled</div> */}</Container>;
}
const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
  &:hover {
    background-color: blue;
  }
`;
