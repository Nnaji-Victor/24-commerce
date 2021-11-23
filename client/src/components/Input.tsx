import React, { FormEvent } from "react";
import { InputProps } from "../types/types";
import styled from "@emotion/styled";

const Input: React.FC<InputProps> = ({ label, placeholder, onSubmit, id }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e.currentTarget[id].value);
  };
  return (
    <StyledInput onSubmit={handleSubmit}>
      <label className="hidden" htmlFor="search">
        {label ?? "Search"}
      </label>
      <input
        id={id}
        className="search-input"
        placeholder={placeholder ?? "Search for products..."}
      />
    </StyledInput>
  );
};

const StyledInput = styled.form`
  & label.hidden {
    display: none;
  }

  & input.search-input {
    box-sizing: border-box;
    border-radius: 0.4rem;
    line-height: 2.1rem;
    color: #636c72;
    border: 2px solid #636c72;
    background-color: transparent;
    padding: 0.8rem 0.8rem 0.8rem 0.8rem;
    width: 100%;
    box-sizing: border-box;
    appearance: none;
    font-weight: 600;
    font-size: 1.5rem;

    &:focus {
      outline: none;
    }
  }
`;

export default Input;
