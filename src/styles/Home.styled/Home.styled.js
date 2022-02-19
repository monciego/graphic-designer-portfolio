import styled from "styled-components";

export const StyledHome = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 95%;
  width: 100%;
  margin: 0 auto;
  padding: 5rem 0 2rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 6.75rem 0 0 0;
  }
`;

export const HomeDetails = styled.div``;

export const HomeImage = styled.div`
  height: 15rem;
  width: 100%;
  margin: 1.5rem auto 0 auto;
  background: gray;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    height: 20rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 7rem;
  }
`;

export const HomeImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const SupTitle = styled.h3`
  font-size: 0.75rem;
  font-family: var(--ff-sans-serif-secondary);
  font-style: oblique;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--clr-light-secondary);

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const Title = styled.h1`
  font-family: var(--ff-sans-serif);
  text-transform: uppercase;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  font-size: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 3.85rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 2rem;
  }
`;

export const SubTitles = styled.div`
  margin-top: 0.75rem;
  font-family: var(--ff-sans-serif-secondary);
  display: flex;
  justify-content: space-between;
  color: var(--clr-light-secondary);
  gap: 0.5rem;
`;

export const Subtitle = styled.div`
  font-size: 0.7rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.9rem;
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 0.55rem;
  }
`;

export const SubtitleRegular = styled.p`
  text-transform: uppercase;
`;

export const SubtitleItalic = styled.p`
  font-style: italic;
  text-transform: uppercase;
`;
