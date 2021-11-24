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
      <div className="search-icon-container">
        <svg className={"search-icon"} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
      </div>
    </StyledInput>
  );
};

const StyledInput = styled.form`
  position: relative;
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

  .search-icon-container {
    display: flex;
    align-items: center;
    padding-right: 0.75rem;
    pointer-events: none;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;

    .search-icon {
      height: 2rem;
      width: 2rem;
      display: block;
      fill: #636c72;
    }
  }
`;

export default Input;
