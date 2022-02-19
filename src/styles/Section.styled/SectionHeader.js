import styled from "styled-components";

export const SectionSupTitle = styled.p`
  font-size: 0.85rem;
  font-weight: bold;
  font-family: var(--ff-sans-serif-secondary);
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;

export const SectionTitle = styled.h2`
  font-family: var(--ff-sans-serif);
  text-transform: uppercase;
  font-weight: 800;
  border-bottom: 1px solid #ccc;
  font-size: 1.15rem;
  padding: 0.15rem 0 0.75rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.25rem;
  }
`;
