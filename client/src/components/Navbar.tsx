import styled from "@emotion/styled";
import React from "react";
import media from "../styles/media";
import CartNav from "./CartNav";
import Input from "./Input";

const Navbar: React.FC = () => {
  const submit = (val: string) => {
    console.log(val);
  };
  return (
    <StyledNavbar className="">
        <div className="brand-logo">home24</div>
        <div className="search-container">
          <Input id="search" onSubmit={submit} />
        </div>
        <div className="cart-nav">
          <CartNav />
        </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  min-height: 7.4rem;
  background-color: #fff;
  z-index: 3;

  ${media.phone`
    display: grid;
    min-height: 8rem;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  `}

  grid-column: 2/-2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand-logo {
    font-size: 3rem;
    font-weight: 600;
  }

  .cart-nav {
    ${media.phone`
    justify-self: end
  `}
  }

  .search-container {
    ${media.phone`
    grid-row: 2/-1;
    grid-column: 1/-1;
    margin-bottom: 3.5rem;
  `}
  }
`;

export default Navbar;
