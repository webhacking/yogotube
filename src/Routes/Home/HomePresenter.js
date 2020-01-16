import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.div`
  font-size: 4rem;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1);
`;

const HomePresenter = () => (
  <Container>
    <Title>YoGoTube</Title>
  </Container>
);

export default HomePresenter;
