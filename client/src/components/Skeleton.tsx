import styled from "@emotion/styled";
import React from "react";

const Skeleton = () => {
  return <StyledSkeleton />;
};

const StyledSkeleton = styled.div`
  --accent-2: #aca7b6ac;
  --accent-1: #dfdbe5;
  --accent-0: #dfdbe5;
  border-radius: 5rem;
  min-height: 16rem;
  min-width: 16rem;
  border-radius: 5px;
  background: linear-gradient(
    110deg,
    var(--accent-1) 8%,
    var(--accent-2) 18%,
    var(--accent-0) 33%
  );
  background-size: 400% 100%;
  animation: loading 4s ease-in-out infinite;

  @keyframes loading {
    100% {
      background-position: -200% 0;
    }
  }
`;

export default Skeleton;
