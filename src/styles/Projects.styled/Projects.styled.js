import styled from "styled-components";

export const StyledProject = styled.section``;

export const ProjectsContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
`;

export const StyledProjectCard = styled.figure``;

export const ProjectCardImage = styled.figure`
  height: 18rem;
  width: 100%;
  background-color: var(--clr-dark-secondary);
  padding: 0.75rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 25rem;
    padding: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 15rem;
    padding: 0.5rem;
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjectDetails = styled.div`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 0 0.25rem;
`;

export const ProjectName = styled.h2`
  font-family: var(--ff-sans-serif);
  font-weight: 800;
  font-size: 0.9rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 0.65rem;
  }
`;

export const ProjectNumber = styled.span`
  font-family: var(--ff-sans-serif-secondary);
  font-weight: 700;
`;

export const ProjectCategory = styled.h3`
  font-family: var(--ff-sans-serif);
  font-weight: 500;
  font-style: oblique;
  font-size: 0.75rem;
  color: var(--clr-light-secondary);

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.85rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 0.55rem;
  }
`;
