import React from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import styled from "@emotion/styled";
import Hero from "./components/Hero";

const App: React.FC = () => {
  return (
    <StyledApp className="grid">
      <Navbar />
      <Hero />
      <div className="main-content">
        <Sidebar />
        <ProductList />
      </div>
    </StyledApp>
  );
};

const StyledApp = styled.main`
  & > * {
    grid-column: 2/-2;
  }

  & .fluid {
    grid-column: 1/-1;
  }

  .main-content{
    margin-top: 6.5rem;
  }
`;

export default App;
