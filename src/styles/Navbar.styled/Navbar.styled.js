import styled from "styled-components";
import { Link } from "react-scroll";
import { VscMenu as MenuBtn } from "react-icons/vsc";

export const StyledHeader = styled.header`
  padding: 1.5rem 2rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1.5rem 3rem;
  }
`;

export const Logo = styled.h2`
  font-size: 1.25rem;
`;

export const Menu = styled(MenuBtn)`
  cursor: pointer;
  font-size: 1.25rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const NavLists = styled.ul`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    list-style: none;
  }
`;

export const NavList = styled.li``;

export const NavLink = styled(Link)`
  cursor: pointer;
  position: relative;
  font-size: 1rem;
  letter-spacing: 0.5px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.25rem;
    background: var(--clr-light);
    height: 1.25px;
    width: 0;
    transition: 0.25s ease;
  }

  &:hover::before {
    width: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    &:hover::before {
      width: 100%;
    }
  }
`;
