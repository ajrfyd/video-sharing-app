import React from "react";
import styled from "styled-components";

const Item = ({ children }) => {

  return (
    <Container>
      {children}
    </Container>
  )
}

export default Item;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`