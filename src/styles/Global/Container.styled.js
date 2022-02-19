import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--clr-dark);
  padding-bottom: 5rem;
  margin-bottom: 40vh;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 60vh;
  }
`;
