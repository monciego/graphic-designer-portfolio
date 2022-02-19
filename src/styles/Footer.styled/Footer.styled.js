import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #111111;
  z-index: -1;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 60vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 30vh;
  }
`;

export const StyledFooterMainText = styled.a`
  font-family: var(--ff-sans-serif);
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: bold;
  position: relative;
  color: var(--clr-light);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--clr-white);
    height: 3px;
    transition: 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    height: 5px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;

    &::before {
      height: 5px;
    }

    &:hover::before {
      height: 8px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 0.85rem;

    &::before {
      height: 2px;
    }

    &:hover::before {
      height: 4px;
    }
  }
`;

export const FooterSocials = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    padding: 1rem 1rem;
  }
`;

export const Socials = styled.div`
  text-align: center;
`;

export const Social = styled.a`
  text-transform: uppercase;
  font-family: var(--ff-sans-serif);
  color: var(--clr-light);
  font-size: 0.75rem;
  display: inline-block;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 0.95rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 0.6rem;
  }
`;

export const Developed = styled.div`
  text-transform: uppercase;
  font-family: var(--ff-sans-serif);
  color: var(--clr-light);
  font-size: 0.8rem;
  margin-top: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 0.6rem;
  }
`;

export const Developer = styled.a`
  color: var(--clr-light);
  text-decoration: none;
  border-bottom: 2px solid var(--clr-light);
`;
