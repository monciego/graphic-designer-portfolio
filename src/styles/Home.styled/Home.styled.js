import styled from "styled-components";

export const StyledHome = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8rem 1rem;
`;

export const HomeDetails = styled.div``;

export const HomeImage = styled.div`
  height: 15rem;
  width: 100%;
  margin: 1.5rem auto 0 auto;
  background: gray;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 88%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 7rem;
  }
`;

export const SupTitle = styled.h3`
  font-size: 1rem;
  font-family: var(--ff-serif);
  font-weight: 500;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.25rem;
  }
`;

export const Title = styled.h1`
  font-family: var(--ff-sans-serif-secondary);
  text-transform: uppercase;
  font-weight: 900;
  border-bottom: 1px solid #ccc;
  font-size: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 4.25em;
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
`;

export const Subtitle = styled.div`
  font-size: 0.75rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.9rem;
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
