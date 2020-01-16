import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

const SearchPresenter = ({ onSubmit, onChange, term, videos }) => (
  <Container>
    <Form onSubmit={onSubmit}>
      <Input
        value={term}
        onChange={onChange}
        placeholder="Search for YoGoTube"
      />
    </Form>
  </Container>
);

export default SearchPresenter;
