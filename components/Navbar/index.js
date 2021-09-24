import { React, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logoProfile from "../../public/img/logo.png";

import {
  LogoLink,
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavIconMenu,
} from "./Styles";

import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
} from "@iconscout/react-unicons";

export default function Navbar() {
  const router = useRouter();
  const [click, seClick] = useState(false);
  const [isActive, setisActive] = useState(true);
  const [active, seActive] = useState(false);

  const handleClick = () => seClick(!click);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 16) {
        seActive(true);
      } else {
        seActive(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
  });

  const navs = [
    { te: "Home", icon: <UilEstate />, href: "/" },
    { te: "About", icon: <UilUser />, href: "/about" },
    { te: "Project", icon: <UilFileAlt />, href: "/project" },
    { te: "Contact", icon: <UilBriefcaseAlt />, href: "/contact" },
  ];

  return (
    <Nav active={active}>
      <NavbarContainer>
        <NavLogo>
          <Link href="/" passHref>
            <LogoLink>
              <NavIcon>
                <Image src={logoProfile} />
              </NavIcon>
              ARIF
            </LogoLink>
          </Link>
        </NavLogo>
        <NavMenu onClick={handleClick} click={click}>
          {navs.map((nav, index) => (
            <NavItem key={index}>
              <Link href={nav.href} passHref>
                <NavLinks
                  isActive={router.pathname == nav.href ? isActive : ""}
                >
                  <NavIconMenu>{nav.icon}</NavIconMenu>
                  {nav.te}
                </NavLinks>
              </Link>
            </NavItem>
          ))}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}
