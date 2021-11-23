import styled from "@emotion/styled";
import React from "react";
import Bag from "./Bag";
import Heart from "./Heart";

const CartNav: React.FC = () => {
  return (
    <StyledCartNav>
      <li className="item">
        <Bag />
      </li>
      <li className="item">
          <Heart />
      </li>
    </StyledCartNav>
  );
};

const StyledCartNav = styled.ul`
  display: flex;
  .item{
    margin-right: 2rem;
  }
`;

export default CartNav;
