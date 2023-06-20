import React from "react";
import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const elementState = useNavigation();
  const isSubmitting = elementState.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          className="form-input"
          defaultValue={searchTerm}
          disabled={isSubmitting}
          name="search"
        />
        <button type="submit" className="btn">
          {isSubmitting ? "Searching..." : "Search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
