import styled from "styled-components";

export const StyledAbout = styled.section``;

export const AboutDetails = styled.div``;

export const AboutText = styled.p`
  font-size: 0.85rem;
  margin: 1rem 0;
  letter-spacing: 0.5px;
  color: var(--clr-light-secondary);
  font-family: var(--ff-sans-serif-tertiary);

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;
