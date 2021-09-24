import React from "react";
import Link from "next/link";
import {
  Foo,
  FooterContainer,
  FooterTitle,
  FooterSubtitle,
  EmailLink,
  TextWrapper,
  LinkWrapper,
  SocialLinks,
} from "./Styles";
import {
  UilLinkedin,
  UilInstagram,
  UilGithub,
  UilFacebook,
  UilWhatsapp,
} from "@iconscout/react-unicons";

export default function Footer() {
  return (
    <>
      <Foo>
        <FooterContainer>
          <TextWrapper>
            <FooterTitle>Get in touch</FooterTitle>
            <FooterSubtitle>
              For business inquiry please send email to
              <Link href="mailto:arifnur.rhmnn@gmail.com" passHref>
                <EmailLink>arifnur.rhmnn@gmail.com</EmailLink>
              </Link>
            </FooterSubtitle>
          </TextWrapper>
          <LinkWrapper>
            <Link href="https://github.com/arifnurrhmnn" passHref>
              <SocialLinks>
                <UilGithub size="32" />
              </SocialLinks>
            </Link>
            <Link href="https://www.linkedin.com/in/arifnurrohman" passHref>
              <SocialLinks>
                <UilLinkedin size="32" />
              </SocialLinks>
            </Link>
            <Link href="https://web.facebook.com/arifnurrhmnn" passHref>
              <SocialLinks>
                <UilFacebook size="32" />
              </SocialLinks>
            </Link>
            <Link href="https://www.instagram.com/arif_pride" passHref>
              <SocialLinks>
                <UilInstagram size="32" />
              </SocialLinks>
            </Link>
            <Link href="https://wa.me/6281326017533" passHref>
              <SocialLinks>
                <UilWhatsapp size="32" />
              </SocialLinks>
            </Link>
          </LinkWrapper>
        </FooterContainer>
      </Foo>
    </>
  );
}
