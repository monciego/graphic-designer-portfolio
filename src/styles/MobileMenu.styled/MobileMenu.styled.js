import styled from "styled-components";
import { Link } from "react-scroll";

export const StyledMobileMenu = styled.aside`
  position: fixed;
  inset: 0;
  background-color: var(--clr-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  transform: ${({ isOpen }) =>
    isOpen ? `translateY(0)` : `translateY(-100%)`};
  transition: 0.25s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const MobileLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MobileLink = styled(Link)`
  text-transform: uppercase;
  font-family: var(--ff-sans-serif);
  font-size: 2rem;
  cursor: pointer;
`;
