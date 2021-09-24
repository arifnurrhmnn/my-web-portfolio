import styled from "styled-components";
import { Container } from "../Theme/GlobalStyle";
import { Link } from "next/link";

export const Nav = styled.nav`
  background-color: ${(props) => (props.active ? "#161616" : "transparant")};
  height: ${(props) => (props.active ? "4rem" : "5rem")};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kanit", serif;
  font-size: 1rem;
  position: fixed;
  z-index: 999;
  transition: all 0.5s ease-out;
  @media screen and (max-width: 767px) {
    bottom: 0;
    font-size: 1rem;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 !important;
  height: 100%;
  ${Container}
`;

export const NavLogo = styled.div`
  font-size: 1rem;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
`;

export const NavIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  height: 100%;
  gap: 2.5rem;
  @media screen and (max-width: 767px) {
    gap: 1rem;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    left: 0;
    height: 5rem;
    border-radius: 1.5rem 1.5rem 0 0;
    box-shadow: 0 -2px 8px 0px #161616;
    border: 1px solid #161616;
    bottom: 0;
    transition: 0.3s;
    background-color: #201f1f;
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 767px) {
    width: calc((100% / 4) - 1rem);
    display: flex;
    align-items: center;
    height: 5rem;
    justify-content: center;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled.a`
  border-bottom: ${(props) => (props.isActive ? "2px solid #127419" : "none")};
  color: ${(props) => (props.isActive ? "#127419" : "#fff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  @media screen and (max-width: 767px) {
    text-align: center;
    align-items: center;
    height: 0;
    font-weight: ${(props) => (props.isActive ? 600 : 400)};
    border: none;
    display: table;
    &:hover {
      transition: all 0.3s ease;
    }
  }
`;

export const NavIconMenu = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    padding-bottom: 0.2rem;
  }
`;
